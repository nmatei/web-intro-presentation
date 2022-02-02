require("../../libs/impress");
import "../../libs/css/impress-demo-min.css";

import "../css/style.css";
import "../css/print.css";

function $$(selector) {
  return document.querySelectorAll(selector);
}

function getParam(name) {
  const params = window.location.search
    .substring(1)
    .split("&")
    .reduce(function (prev, curr, i, arr) {
      const parts = curr.split("=");
      prev[decodeURIComponent(parts[0])] = parts[1] ? decodeURIComponent(parts[1]) : "";
      return prev;
    }, {});
  return params[name];
}

function getChunks(elements, size) {
  const chunks = [];
  const arrayLength = elements.length;

  for (let i = 0; i < arrayLength; i += size) {
    const myChunk = elements.slice(i, i + size);
    chunks.push(myChunk);
  }
  return chunks;
}

const typeMatch = {
  js: "ace/mode/javascript",
  ts: "ace/mode/typescript",
  jsx: "ace/mode/jsx",
  html: "ace/mode/html",
  css: "ace/mode/css",
  shell: "ace/mode/sh"
};

async function initAllEditors() {
  const codeEls = Array.from($$(".step pre"));
  const chunks = getChunks(codeEls, 5);
  await chunks.reduce(async (promise, elements) => {
    await promise;
    await initEditors(elements);
  }, 0);
}
/**
 * https://ace.c9.io/#nav=api&api=edit_session
 */
function initEditors(codeEls) {
  return new Promise(resolve => {
    codeEls.forEach(el => {
      const type = el.getAttribute("data-type") || "html";
      const highlight = el.getAttribute("data-highlight") || "";
      const editor = ace.edit(el);
      const beautify = ace.require("ace/ext/beautify");
      const session = editor.getSession();
      editor.setReadOnly(true);

      //editor.setTheme("ace/theme/monokai");
      session.setTabSize(2);
      session.setMode(typeMatch[type]);
      if (highlight) {
        const highlightLines = highlight.split(/\s*,\s*/i);
        highlightLines.forEach(line => session.highlightLines(line - 1));
      }

      if (type === "jsx") {
        // console.warn('not used beautify for jsx yet', editor);
        // TODO at least remove "left" intend
      } else {
        beautify.beautify(session);
      }

      editor.setOptions({
        maxLines: Infinity
      });
    });

    // let other operations enter
    setTimeout(resolve, 5);
  });
}

function getSlideTitle(page) {
  let pageEl = page.querySelector("h1");
  if (!pageEl) {
    console.warn("h1 not present. fallback to h2", page);
    pageEl = page.querySelector("h2");
  }
  return pageEl.innerHTML;
}

function setTocPageContent(pages) {
  const slides = Array.from($$("div.step.toc-el"));
  const pagesNr = getPageKeys(pages);
  const tocPages = slides.map(page => ({
    id: page.id,
    text: getSlideTitle(page),
    pageNr: pagesNr[page.id]
  }));

  document.querySelector("#toc ol").innerHTML = tocPages
    .map(page => `<li><a href="#${page.id}" data-page="${page.pageNr}">${page.text}</a></li>`)
    .join("");
}

function getPageKeys(pages) {
  return pages.reduce((keys, page, i) => {
    keys[page.id] = i + 1;
    return keys;
  }, {});
}

function setPageNumbers(pages) {
  return pages
    .map((page, i) => {
      page.setAttribute("data-current-page", i + 1);
      page.setAttribute("data-total-pages", pages.length);
      return `<a id="toc-${page.id}" href="#/${page.id}" title="${page.id}">${i + 1}</a>`;
    })
    .join("");
}

function setAnimation(pages, animation) {
  pages.forEach((page, i) => {
    let dataX = 0,
      dataY = 0;

    if (animation === "slide-up") {
      const margins = 8;
      dataY = (700 + 100 - margins) * i;
    } else if (animation === "slide-left") {
      dataX = 1000 * i;
    } else {
      document.body.classList.add("anim-fade");
    }

    page.setAttribute("data-x", dataX);
    page.setAttribute("data-y", dataY);

    page.setAttribute("data-scale", "1");
    page.setAttribute("data-rotate", "0");
    page.setAttribute("data-z", "0");
    page.setAttribute("data-rotate-x", "0");
    page.setAttribute("data-rotate-y", "0");
  });
}

function getAnimElements(animation) {
  return [
    '<a href="?" title="Animations Slides" class="btn' + (animation || " present") + '">',
    '<i class="fa fa-object-group" aria-hidden="true"></i>',
    "</a>",
    '<a href="?anim=slide-up" title="Slide Up/Down" class="btn' + (animation === "slide-up" ? " present" : "") + '">',
    '<i class="fa fa-film" aria-hidden="true"></i>',
    "</a>",
    '<a href="?anim=slide-left" title="Slide Right/Left" class="btn' +
      (animation === "slide-left" ? " present" : "") +
      '">',
    '<i class="fa fa-film fa-rotate-90" aria-hidden="true"></i>',
    "</a>",
    '<a href="?anim=fade" title="Fade" class="btn' + (animation === "fade" ? " present" : "") + '">',
    '<i class="fa fa-gg" aria-hidden="true"></i>',
    "</a>",
    "<hr>"
  ].join("");
}

// print actions
export async function start() {
  if ("ontouchstart" in document.documentElement) {
    document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
  }

  document.querySelector("body").classList.remove("body-loading");

  const animation = getParam("anim");
  const pages = Array.from($$(".step"));

  if (animation) {
    setAnimation(pages, animation);
  }

  document.addEventListener("touchstart", event => {
    if (event.target.matches(".toc a")) {
      // console.warn("touchstart", event);
      //event.preventDefault();
      event.stopPropagation();
    }
  });

  impress().init();

  const actions = document.createElement("div");
  const animElements = document.createElement("div");

  actions.className = "enable-events navigation-actions";
  animElements.className = "views";

  //'&#9723;','&#9931;','&#8645;','&#8644;'
  animElements.innerHTML = getAnimElements(animation);
  actions.appendChild(animElements);

  const toc = document.createElement("div");
  toc.className = "toc";
  toc.innerHTML = setPageNumbers(pages);
  actions.appendChild(toc);

  document.body.appendChild(actions);

  document.addEventListener(
    "impress:stepenter",
    function (event) {
      const page = event.target;
      document.getElementById("toc-" + page.id).classList.add("present");

      // TODO remove when save animations in localstorage
      const links = Array.from($$(".navigation-actions .views a"));
      links.forEach(link => {
        link.href = link.href.split("#")[0] + "#/" + page.id;
      });
    },
    false
  );

  document.addEventListener(
    "impress:stepleave",
    function (event) {
      const page = event.target;
      document.getElementById("toc-" + page.id).classList.remove("present");
    },
    false
  );

  // disable some navigation keys
  document.addEventListener(
    "keyup",
    function (event) {
      // case 9:  // tab
      if (event.keyCode === 9) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    true
  );

  setTocPageContent(pages);

  await initAllEditors();
}
