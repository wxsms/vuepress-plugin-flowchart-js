# vuepress-plugin-flowchart-js

[![Badge](https://badgen.net/npm/dm/vuepress-plugin-flowchart-js)](https://www.npmjs.com/package/vuepress-plugin-flowchart-js)
[![Badge](https://badgen.net/npm/v/vuepress-plugin-flowchart-js)](https://www.npmjs.com/package/vuepress-plugin-flowchart-js)

![preview](https://static.wxsm.space/others/vue-plugin-flowchart-preview.png)

> This repository used to be a fork of [ulivz/vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart) but the original one is no longer maintained, so here's our own. Thanks for the awesome work made by [ulivz](https://github.com/ulivz).

## Install

```bash
yarn add vuepress-plugin-flowchart-js -D
```

## Usage

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'flowchart-js'
  ]
}
```

## Features

- Integrated [flowchart.js](https://github.com/adrai/flowchart.js/) with [vuepress](https://github.com/vuejs/vuepress)
- Lazy loading.
- Out-of-the-box styling preset (Currently support `vue`、`ant`).

Check out the full [documentation](https://vuepress-plugin-flowchart-js.wxsm.space).

## Changes from the original

1. Use <code>\`\`\`flowchart</code> and <code>\`\`\`</code> as default wrapping syntax instead of `@flowstart` and `@flowend`.
1. Remove redundant scrollbars from the charts.
1. Skip SSR by wrapping chart components with `<ClientOnly>`, because:
    1. Normally the SVG tags make no sense to search engines.
    1. Avoid problems.
1. Fix a problem while sometimes charts rendered multiple times in a container.

## License

MIT