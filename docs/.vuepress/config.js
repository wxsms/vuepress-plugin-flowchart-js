module.exports = {
  title: 'vuepress-plugin-flowchart-js',
  description: 'Rapid flowchart development plugin for vuepress',
  themeConfig: {
    repo: 'wxsms/vuepress-plugin-flowchart-js',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  },
  plugins: [
    require('../../index'),
  ]
}