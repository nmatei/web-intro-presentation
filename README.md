# Web Presentation

Intro Presentation to Web Development for students that want to learn basics of HTML/CSS/JS

## 🎞 Live preview

Web Intro [Presentation](https://nmatei.github.io/web-intro-presentation/)

### ↔ Navigation

- left/right/up/down arrows, page down/up keys
- click on sidebar pages

### 💠 Transitions modes

- [x] [Animations](https://nmatei.github.io/web-intro-presentation/?anim=animations)
- [x] [Slide Up/Down](https://nmatei.github.io/web-intro-presentation/?anim=slideUp)
- [x] [Slide Right/Left](https://nmatei.github.io/web-intro-presentation/?anim=slideLeft)
- [x] [Fade](https://nmatei.github.io/web-intro-presentation/?anim=fade)
- [x] [Clock](https://nmatei.github.io/web-intro-presentation/?anim=clock)
- [x] [Print](https://nmatei.github.io/web-intro-presentation/?anim=print) (`CTRL + P` - **Save as PDF** & **Margins: None**)
- [ ] Slide Headings (every h1 -> down, every h2 -> right)
- [ ] Book Style (Simulate 2 pages and move left - right)

## ⌨ English Signs (chars)

You have to know how to type this characters :) on your keyboard

```
 () brackets (parenthesis)
 {} curly brackets
 [] square brackets
 #  hash
 :  colon
 ;  semicolon
 `  backquote (left quote, grave accent)
 /  slash
 \  backslash
 |  pipe
 -  dash
 ,  comma
 _  underscore
 ?  question mark
 %  percent
```

## 📋 Developer

If you wish to use this project directly on your PC you can use:

```sh
git clone https://github.com/nmatei/web-intro-presentation.git
cd web-intro-presentation
npm i
```

### 🚀 Run in dev mode (watch changes in real time)

Start the webpack dev server. It compiles in memory, opens the presentation in
your browser and **live-reloads on every change** to files under `src/` (JS, CSS
and HTML):

```sh
npm start
```

The app is served at [http://localhost:8080](http://localhost:8080). Edit any
file in `src/` and the browser refreshes automatically — no manual rebuild needed.

### 📦 Production build & preview

```sh
npm run build   # bundles into ./docs (minified, production mode)
npm run serve   # serves the already-built ./docs locally
npm run qa      # build + serve in one step
```

When to use which:

- **`npm start`** — day-to-day development. Live-reload, source maps, no
  minification. Use this while editing.
- **`npm run build`** — generate the final minified bundle in `./docs` (the
  folder published to GitHub Pages). Run before deploying.
- **`npm run serve`** — preview an existing `./docs` build exactly as it will be
  served in production (static files, no dev server). Assumes you already ran
  `npm run build`.
- **`npm run qa`** — one-shot QA check: rebuilds and then serves `./docs`. Use
  this to verify the production output before pushing/deploying.

### TODOs

- [ ] When browser does not support impress (animations) (convert them all to "slide" style)
- [ ] Test print preview
  - [x] Chrome -> Dev tools -> "..." -> More tools -> Rendering -> Emulate CSS media type `print`
- [ ] Check how to display video with gray bg on print version (not black)


## 👋 Thanks

- [https://impress.js.org](https://impress.js.org)
- [https://fontawesome.com/v4.7/icons](https://fontawesome.com/v4.7/icons)
