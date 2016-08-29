# robowriter

robowriter is a simple AJAX driven theme for the [Ghost](http://github.com/tryghost/ghost/) blogging platform released under the MIT License. robowriter is based on Rory Gibsons [Ghostwriter theme](http://github.com/roryg/ghostwriter) — see more of his works at [jollygoodthemes.com](http://jollygoodthemes.com).

**[View a demo of robowriter](https://ulrik.is/writing)**

**[Download robowriter](https://github.com/skalarproduktraum/robowriter/archive/master.zip)**

### Features

* Supports Ghost 0.9.
* Clean typography focused design, featuring Roboto Slab and URW Garamond.
* Fully responsive (includes fitvid.js for responsive video embeds).
* AJAX loading for fast, smooth transitions between posts and pages.
* SASS files included — see `assets/sass/style.scss`.
* Static page support.
* Featured post support.
* Optional LaTeX support via [MathJax](http://mathjax.org)
* Optional highlighting support via [Prism](http://prismjs.com) or [highlight.js](https://highlightjs.org).

### Static Pages and Navigation

Ghost 0.4 introduced static pages which you can use for making pages separate from your list of blog posts. There isn't however a way to output a list of static pages for navigation yet so you'll need to edit the navigation menu in the default.hbs file yourself. The HTML for the menu starts on `line 37` of the default.hbs file and contains an example `About` menu item on `line 40`.

### Fonts

robowriter uses [URW Garamond](http://garamond.org/urw) as main font. The TrueType font files are included in this repository and are licensed under the [Aladdin Free Public License](http://web.archive.org/web/20021010015844/http://www.artifex.com/downloads/doc/Public.htm).

robowriter uses the free [Adobe Source Code Pro](https://github.com/adobe-fonts/source-code-pro) fonts for display of inline and performed code. The font is included from Google Fonts.

### Troubleshooting

###### The Browse Posts link isn't working

If you're having trouble with the browse posts link not working make sure you're using the currect URL for your environment in your Ghost config.js file. I.e. if your Ghost site is being served on http://your-site-name.com make sure you use exactly that URL in your config.js file and not for example http://www.your-site-name.com

### Screenshot

![Ghostwriter home page](https://github.com/roryg/ghostwriter/blob/master/screenshot.png?raw=true)
