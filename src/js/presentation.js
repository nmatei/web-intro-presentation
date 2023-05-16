require("../../libs/impress");
import "../../libs/css/impress-demo-min.css";

// fix build
import regeneratorRuntime from "regenerator-runtime";

import "../css/style.css";
import "../css/print.css";

const storageAnimKey = "impress-anim";
const storagePageKey = "impress-page";

const animationTypes = {
  animations: {
    title: "Animations Slides",
    icon: "fa fa-object-group"
  },
  slideUp: {
    title: "Slide Up/Down",
    icon: "fa fa-film"
  },
  slideLeft: {
    title: "Slide Right/Left",
    icon: "fa fa-film fa-rotate-90"
  },
  fade: {
    title: "Fade",
    icon: "fa fa-gg"
  },
  clock: {
    title: "Clock",
    icon: "fa fa-clock-o"
  }
};

function $(selector) {
  return document.querySelector(selector);
}
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

function getStorageKey(slidesName, key) {
  return localStorage.getItem(`${key}-${slidesName}`);
}
function setStorageKey(slidesName, key, value) {
  if (value) {
    localStorage.setItem(`${key}-${slidesName}`, value);
  } else {
    localStorage.removeItem(`${key}-${slidesName}`);
  }
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

async function initAllEditors(runImpress) {
  const codeEls = Array.from($$(".step pre"));
  if (runImpress || codeEls.length <= 20) {
    const chunks = getChunks(codeEls, runImpress ? 30 : 10);
    await chunks.reduce(async (promise, elements) => {
      await promise;
      await initEditors(elements);
    }, 0);
  }
}

/**
 * https://ace.c9.io/#nav=api&api=edit_session
 */
function initEditors(codeEls) {
  return new Promise(resolve => {
    codeEls.forEach(el => {
      const type = el.dataset.type || "html";
      const highlight = el.dataset.highlight || "";
      const disableBeautify = el.dataset.disableBeautify === 'true';
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

      if (type === "jsx" || disableBeautify) {
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

  $("#toc ol").innerHTML = tocPages
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
      const cls = page.classList.contains("no-toc") ? "no-toc" : "";
      return `<a id="toc-${page.id}" class="${cls}" href="#${page.id}" title="${page.id}">${i + 1}</a>`;
    })
    .join("");
}

function applyAnimations(pages, animation) {
  if (animation === "fade") {
    document.body.classList.add("anim-fade");
  }
  // TODO calc..
  const L = Math.max(2000, 500 + pages.length * 140);
  pages.forEach((page, i) => {
    let dataX = 0,
      dataY = 0,
      scale = 1,
      rotate = "0";

    if (animation === "slideUp") {
      const margins = 8;
      dataY = (700 + 100 - margins) * i;
    } else if (animation === "slideLeft") {
      dataX = 1000 * i;
    } else if (animation === "clock") {
      // 0 is first page (we leave it in the middle)
      if (i) {
        // https://purecalculators.com/ro/triangle-hypotenuse-calculator
        const degree = (360 / (pages.length - 1)) * (i - 1);
        const radians = (degree * Math.PI) / 180;
        dataX = Math.sin(radians) * L;
        dataY = -Math.cos(radians) * L;
        // rotate = `${degree}`;
      } else {
        // TODO calculate
        scale = (pages.length + 15) / 10;
      }
    }

    page.setAttribute("data-x", dataX);
    page.setAttribute("data-y", dataY);

    page.setAttribute("data-scale", scale);
    page.setAttribute("data-rotate", rotate);
    page.setAttribute("data-z", "0");
    page.setAttribute("data-rotate-x", "0");
    page.setAttribute("data-rotate-y", "0");
  });

  if (animation === "clock") {
    addOverviewPage(pages.length);
    // we just added a new page
    pages = Array.from($$(".step"));
  }
  return pages;
}

function addOverviewPage(pageCount) {
  const overview = document.createElement("div");
  overview.id = "start-overview";
  overview.classList.add("step", "hide-page");
  let scale = 4.5;
  if (pageCount > 15) {
    scale = 7;
  }
  if (pageCount > 25) {
    scale = 10;
  }
  if (pageCount > 50) {
    scale = 20.5;
  }
  overview.setAttribute("data-scale", scale);
  document.getElementById("impress").prepend(overview);
}

function getAnimElements(animation) {
  return Object.entries(animationTypes)
    .map(([key, value]) => {
      return `<a href="?anim=${key}" data-anim="${key}" title="${value.title}" class="btn ${
        key === animation ? " present" : ""
      }">
        <i class="fa ${value.icon}" aria-hidden="true"></i>
      </a>`;
    })
    .join("");
}

function canRunImpress(pages) {
  // TODO maybe consider number of pages or editors to init
  const ua = navigator.userAgent.toLowerCase();
  const iPad3 = ua.search(/(ipad; cpu os 9_3_5)/) !== -1;
  if (iPad3) {
    // disable impress on old ipad :(
    return false;
  }
  return true;
  // return false;
}

// print actions
export async function start(slidesName) {
  if ("ontouchstart" in document.documentElement) {
    $(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
  }

  $("body").classList.remove("body-loading");

  let animation = getParam("anim") || getStorageKey(slidesName, storageAnimKey);
  if (!animation || !animationTypes[animation]) {
    animation = Object.keys(animationTypes)[0];
  }

  let pages = Array.from($$(".step"));
  const runImpress = canRunImpress(pages);

  const initialId = window.location.hash.substring(2);
  if (!initialId) {
    const storageId = getStorageKey(slidesName, storagePageKey);
    if (storageId) {
      window.location.hash = "/" + storageId;
    }
  }

  if (runImpress) {
    if (animation && animation !== "animations") {
      pages = applyAnimations(pages, animation);
      setStorageKey(slidesName, storageAnimKey, animation);
    } else {
      setStorageKey(slidesName, storageAnimKey, null);
    }

    initImpressEvents(slidesName, initialId);
    impress().init();
  }

  const actions = document.createElement("div");
  actions.className = "enable-events navigation-actions";

  if (runImpress && impress.supported) {
    const animElements = document.createElement("div");
    animElements.className = "views";
    animElements.innerHTML = getAnimElements(animation) + "<hr />";
    actions.appendChild(animElements);
  }

  const toc = document.createElement("div");
  toc.className = "toc";
  toc.innerHTML = setPageNumbers(pages);
  actions.appendChild(toc);

  document.body.appendChild(actions);

  setTocPageContent(pages);

  await initAllEditors(runImpress);
}

function initImpressEvents(slidesName, id) {
  let currentStepId = id;
  document.addEventListener(
    "impress:stepenter",
    function (event) {
      const page = event.target;
      if (currentStepId) {
        const step = $("#toc-" + currentStepId);
        if (step) {
          step.classList.remove("present");
        }
      }
      $("#toc-" + page.id).classList.add("present");
      setStorageKey(slidesName, storagePageKey, page.id);
    },
    false
  );

  document.addEventListener(
    "impress:stepleave",
    function (event) {
      const page = event.target;
      currentStepId = page.id;
    },
    false
  );

  // disable some navigation keys
  document.addEventListener(
    "keyup",
    function (event) {
      //console.warn("key up %o", event.keyCode, event);
      // if (event.metaKey) {
      //   console.warn("metaKey");
      // }
      // case 9:  // tab
      // metaKey - windows(start)
      if (event.keyCode === 9 || event.metaKey) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    true
  );
}
