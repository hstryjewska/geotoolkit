---
permalink: /index.html
---

## Requirements

- `node` : `^12 || >=14`
- `npm`

# Setup

## Installation

1. Choose and download the latest template release from [List of Releases](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases).
2. Extract the release archive to a new directory, rename it to your project name and browse the directory.
3. Install all dependencies using `npm` _clean install_ command.

```sh
$ npm ci
```

> More on the clean install npm command can be read here [`npm ci`](https://docs.npmjs.com/cli/ci.html)

> You can still use `npm install` in cases the `npm ci` raises system error due to specific platform incompatibilities.

## Additional `webpack` configuration

You can additionally configure `webpack` for specific environment:

- `development` - [`configuration/webpack.dev.config.js`](configuration/webpack.dev.config.js)
- `production` - [`configuration/webpack.prod.config.js`](configuration/webpack.prod.config.js)
  - Note that if you prefer to build and deploy [`sourcemap`](https://webpack.js.org/configuration/devtool/#production) files:
    > You should configure your server to disallow access to the Source Map file for normal users!

# Development

## Assets Source

- **SASS/PostCSS** files are located under `src/scss/`
- **JavaScript** files with support of latest ECMAScript _ES6 / ECMAScript 2016(ES7)/ etc_ files are located under `src/js/`
- **Image** files are located under `src/images/`
- **Font** files are located under `src/fonts/`
- **HTML** files are located under `src/`
  - It will **automatically** build **all HTML files** placed under `src/` directory, no need to manually configure each template anymore!

## Build Assets

### One time build assets for development

```sh
$ npm run build
```

### Build assets and enable source files watcher

```sh
$ npm run watch
```

This command is suitable if you develop with external web server.

> **Note:** File watching does not work with _NFS_ (_Windows_) and virtual machines under _VirtualBox_. Extend the configuration in such cases by:

```js
module.exports = {
  //...
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
};
```

### Start a development server - reloading automatically after each file change.

```sh
$ npm run dev
```

# Production

## Build Assets

Optimize assets for production by:

```sh
$ npm run production
```

# Run Code Style Linters

## SASS

```sh
$ npm run lint:sass
```

## JavaScript

```sh
$ npm run lint:js
```

# Additional Tools

## Run Assets Bundle Analyzer

```sh
$ npm run stats
```

> This will open the visualisaion on the default configuraiton URL `localhost:8888`, you can change this URL or port following the [package](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-cli) documentation.

# geotoolkit
