var Presentation = (function () {
  var params = window.location.search
    .substring(1)
    .split("&")
    .reduce(function (prev, curr, i, arr) {
      var p = curr.split("=");
      prev[decodeURIComponent(p[0])] = p[1] ? decodeURIComponent(p[1]) : "";
      return prev;
    }, {});

  return {
    getParam: function (name) {
      return params[name];
    }
  };
})();

(function () {
  var disabledLinks = document.getElementsByClassName("disabled-link");
  for (var i = 0; i < disabledLinks.length; i++) {
    var link = disabledLinks[i];
    link.onclick = function (e) {
      return false;
    };
  }
})();

// print actions
(function () {
  var isPrintMode = Presentation.getParam("print") !== undefined,
    animation = Presentation.getParam("anim"),
    pages = document.getElementsByClassName("step"),
    length = pages.length;

  if (!isPrintMode) {
    if (animation) {
      // use simple animations
      for (var i = 0; i < length; i++) {
        var page = pages[i],
          dataX = 0,
          dataY = 0;

        if (animation === "slide-up") {
          dataY = (700 + 100) * i;
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
  }

  var actions = document.createElement("div"),
    toc = document.createElement("div"),
    animElements = document.createElement("div"),
    animElementsItems = [];

  actions.className = "enable-events navigation-actions";
  animElements.className = "views";

  animElementsItems.push(
    '<a href="?print" class="btn' +
      (isPrintMode ? " present" : "") +
      '" title="Print Mode: use print as PDF in Chrome (margins: 0.15in 0 0.18in 0)">',
    '<i class="fa fa-print" aria-hidden="true"></i>',
    "</a>"
  );
  if (document.body.classList.contains("pdf-available")) {
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
    // '<a class="btn" title="About Me" href="https://www.linkedin.com/in/nicolaematei" target="_blank">',
    // 	'<i class="fa fa-info-circle" aria-hidden="true"></i>',
    // '</a>',
    "<hr>",
    '<a href="?" title="Animations Slides" class="btn' + (animation || isPrintMode ? "" : " present") + '">',
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
  var tocContent = [];
  for (var i = 0; i < length; i++) {
    var page = pages[i];
    page.setAttribute("data-current-page", i + 1);
    page.setAttribute("data-total-pages", length);

    if (isPrintMode && !page.id) {
      //console.warn('page does not contain an ID', page);
      page.id = "step-" + (i + 1);
    }

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

    if (isPrintMode && page.className.indexOf("slide") === -1) {
      page.className += " slide";
    }
  }

  // TOC
  toc.className = "toc";
  toc.innerHTML = tocContent.join("");
  actions.appendChild(toc);

  // TODO TOC Page
  const tocPages = [...document.querySelectorAll("div.step.toc-el")].map(p => ({
    id: p.id,
    text: p.querySelector("h1").innerText
  }));
  document.querySelector("#toc ol").innerHTML = tocPages
    .map(page => `<li><a href="#${page.id}">${page.text}</a></li>`)
    .join("");

  document.body.appendChild(actions);

  if (isPrintMode) {
    // TODO use throttle (defer)
    // window.addEventListener('scroll', function() {
    // 	console.debug('onscroll', window.pageYOffset);
    // 	console.debug('page 2', pages[1].offsetTop);
    // }, false);
  }

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
})();
