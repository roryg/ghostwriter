# Ghostwriter

Ghostwriter is a simple AJAX driven theme for the [Ghost](http://github.com/tryghost/ghost/) blogging platform released under the MIT License.

**[View a demo of Ghostwriter](http://ghostwriter-theme.ghost.io/)**

**[Download Ghostwriter](https://github.com/roryg/ghostwriter/archive/master.zip)**

**[See more of my themes](http://jollygoodthemes.com)**

### Features

* Supports Ghost 0.4
* Clean typography focused design.
* Fully responsive (includes fitvid.js for responsive video embeds).
* AJAX loading for fast, smooth transitions between posts and pages.
* SASS files included.
* Static page support.
* Featured post support.
* A bunch of other bits and bobs.

### Static Pages and Navigation

Ghost 0.4 introduced static pages which you can use for making pages separate from your list of blog posts. There isn't however a way to output a list of static pages for navigation yet so you'll need to edit the navigation menu in the default.hbs file yourself. The HTML for the menu starts on `line 37` of the default.hbs file and contains an example `About` menu item on `line 40`.

### Troubleshooting

###### The Browse Posts link isn't working

If you're having trouble with the browse posts link not working make sure you're using the currect URL for your environment in your Ghost config.js file. I.e. if your Ghost site is being served on http://your-site-name.com make sure you use exactly that URL in your config.js file and not for example http://www.your-site-name.com

### Screenshot

![Ghostwriter home page](https://github.com/roryg/ghostwriter/blob/master/screenshot.png?raw=true)
