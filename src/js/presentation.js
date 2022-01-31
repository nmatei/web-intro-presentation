require("../../libs/impress");
import "../../libs/css/impress-demo-min.css";

import "../css/style.css";
import "../css/print.css";

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

/**
 * https://ace.c9.io/#nav=api&api=edit_session
 */
function initEditors() {
  const typeMatch = {
    js: "ace/mode/javascript",
    ts: "ace/mode/typescript",
    jsx: "ace/mode/jsx",
    html: "ace/mode/html",
    css: "ace/mode/css",
    shell: "ace/mode/sh"
  };

  const codeEls = Array.from(document.querySelectorAll(".step pre"));
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
}

function disableLinks() {
  var disabledLinks = document.getElementsByClassName("disabled-link");
  for (var i = 0; i < disabledLinks.length; i++) {
    var link = disabledLinks[i];
    link.onclick = function (e) {
      return false;
    };
  }
}

// print actions
export function start() {
  initEditors();
  disableLinks();

  if ("ontouchstart" in document.documentElement) {
    document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
  }

  document.querySelector("body").classList.remove("body-loading");

  var isPrintMode = getParam("print") !== undefined,
    animation = getParam("anim"),
    pages = document.getElementsByClassName("step"),
    length = pages.length;

  if (animation) {
    // use simple animations
    for (var i = 0; i < length; i++) {
      var page = pages[i],
        dataX = 0,
        dataY = 0;

      if (animation === "slide-up") {
        var margins = 8;
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
    }
  }

  impress().init();

  var actions = document.createElement("div"),
    toc = document.createElement("div"),
    animElements = document.createElement("div"),
    animElementsItems = [];

  actions.className = "enable-events navigation-actions";
  animElements.className = "views";

  var pdfAvailable = document.body.classList.contains("pdf-available");
  if (pdfAvailable) {
    var pdfPath = window.location.pathname.split("/");
    pdfPath = pdfPath[pdfPath.length - 1];
    pdfPath = pdfPath.replace(".html", ".pdf");
    animElementsItems.push(
      '<a href="pdf/',
      pdfPath,
      '" target="_blank" class="btn" title="PDF Version">',
      '<i class="fa fa-file-pdf-o" aria-hidden="true"></i>',
      "</a>"
    );
  }

  animElementsItems.push(
    pdfAvailable ? "<hr>" : "",
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
  );

  //'&#9723;','&#9931;','&#8645;','&#8644;'
  animElements.innerHTML = animElementsItems.join("");
  actions.appendChild(animElements);

  // pagination
  const tocContent = [];
  const pagesNr = {};
  for (var i = 0; i < length; i++) {
    var page = pages[i];
    page.setAttribute("data-current-page", i + 1);
    page.setAttribute("data-total-pages", length);

    pagesNr[page.id] = i + 1;
    tocContent.push(
      '<a id="toc-' +
        page.id +
        '" href="#' +
        (isPrintMode ? "" : "/") +
        page.id +
        '" title="' +
        page.id +
        '">' +
        (i + 1) +
        "</a>"
    );
  }

  // TOC
  toc.className = "toc";
  toc.innerHTML = tocContent.join("");
  actions.appendChild(toc);

  function getSlideTitle(page) {
    let pageEl = page.querySelector("h1");
    if (!pageEl) {
      console.warn("h1 not present. fallback to h2", page);
      pageEl = page.querySelector("h2");
    }
    return pageEl.innerHTML;
  }

  const slides = Array.from(document.querySelectorAll("div.step.toc-el"));
  const tocPages = slides.map(p => ({
    id: p.id,
    text: getSlideTitle(p),
    pageNr: pagesNr[p.id]
  }));
  document.querySelector("#toc ol").innerHTML = tocPages
    .map(page => `<li><a href="#${page.id}" data-page="${page.pageNr}">${page.text}</a></li>`)
    .join("");

  document.body.appendChild(actions);

  document.addEventListener(
    "impress:stepenter",
    function (event) {
      var page = event.target;
      //console.debug('enter ', page);
      document.getElementById("toc-" + page.id).classList.add("present");

      var views = document.getElementsByClassName("navigation-actions")[0].getElementsByClassName("views")[0],
        links = views.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.href = link.href.split("#")[0] + "#/" + page.id;
      }
    },
    false
  );

  document.addEventListener(
    "impress:stepleave",
    function (event) {
      var page = event.target;
      //console.debug('leave ', page);
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
}
