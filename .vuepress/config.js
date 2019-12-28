const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Tools',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
    ['meta', { name: "theme-color", content: "#ffffff" }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '/arab-open-source/vuepress-tools',
    logo: '/img/vuepress-tools-logo.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    author: 'Ahmad Mostafa',
    domain: 'vuepress.tools',
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        text: 'Themes',
        link: '/themes/',
        icon: 'palette'
      },
      {
        text: 'Plugins',
        link: '/plugins/',
        icon: 'plug'
      }
    ],
    sidebar: {
      '/themes/': [
        'medium',
        'britecore',
        'vuetify',
        'modern-blog',
        'zjblog',
        'eugeo',
        'gouv-fr',
        'xydocs',
        'easyBlog',
        'cute',
        'modern-portfolio',
        'nav',
        'tabsp',
        'default-prefers-color-scheme',
        'codemao_docs',
        'dark-new',
        'default',
        'bulma',
        'casper',
        'api',
        'ajv',
        'mini',
        'yuu',
        'meteorlxy-cwr',
        'mufeng',
        'cchao',
        'ermu',
        'zp',
        'bhabgs',
        'kalisio',
        'dark',
        'reco',
        'thindark',
        'refrom-reco',
        'sakura',
        'note',
        'similar-yilia',
        'yur-cli',
        'learner',
        'hope',
        'luna',
        'loaded',
        'dew',
        'canvas',
        'ting',
        'blog',
        'egoist',
        'oneN',
        'whilife',
        'simple',
        'fluent',
        'tassel',
        'millidocs',
        'shadow',
        'blogue',
        'cky',
        'ldy',
        'resume',
        'tomato',
        'valle',
        'typewriter',
        'even',
        'neon',
        'teadocs',
        'elegant',
        'light',
        'zjy',
        'terminal',
        'yuicer',
        'gh-style',
        'single-page-sections',
        'glitzma',
        'kim',
        'craftdocs',
        'bb',
        'flipbox',
        'koala',
        'vook',
        'yubisaki',
        'Secondary_element',
        'indigo-material',
        'concise',
        'ebook',
        'tsed',
        'blogvis',
        'cool',
        'material',
        'oscarteg',
        'talltotal',
        'ououe',
        'ktquez',
        'cycle',
        'one',
        'simple-blog',
        'monday',
        'postline',
        'zeit',
        'bgcz',
        'clair',
        'docs',
        'dynamicsidebar',
        'seeker',
        'melody',
        'yilia-plus',
        'reform',
        'blog-official-style',
        'meteorlxy',
        'yur',
        'x',
        'crow',
        'jupiter',
        'lemon',
        'nine',
        'sammyne',
        'succinct',
        'track',
        'idg',
        'monokai',
        'egg',
        'vuescroll',
        'default-hot',
        'live-ebook',
        'meteorlxy-original'
      ],
      '/plugins/': ['named-chunks',
        'global-toc',
        'i18n-ui',
        'gotop-plus',
        'code-segment',
        'canonical',
        'cursor-effects',
        'share',
        'mouse-effects',
        'blog-multidir',
        'go-top',
        'firebase',
        'autometa',
        'authors',
        'new',
        'mathjax-bug8',
        'live',
        'raml-loader',
        'screenfull',
        'qihu-autopush',
        'one-click-copy',
        'tailwind',
        'api-docs-generator',
        'helper-live2d',
        'container',
        'code-copy',
        'social-share',
        'amazon-global-tracking',
        'import-codes',
        'minimal-analytics',
        'loading-page',
        'markdown-classes',
        'google-adsense',
        'simple-seo',
        'autonav',
        'img-lazy',
        'rocket',
        'image',
        'rpurl',
        'example-preview',
        'ga',
        'migrate',
        'code-box',
        'baidu-autopush',
        'nprogress',
        'component-docgen',
        'sidebar-on-off',
        'mermaidjs',
        'svg-icons',
        'dynamic-title',
        'comments',
        'smooth-scroll',
        'merge-pages',
        'robots',
        'permalink-pinyin',
        'pagination',
        'blog',
        'remote-url',
        'boxx',
        'check-md',
        'latex',
        'matomo',
        'reward',
        'disqus-comment',
        'enhanced-search',
        'medium-zoom',
        'clean-urls',
        'google-analytics',
        'playground',
        'comment',
        'viewer',
        'nest',
        'alias',
        'zooming',
        'copyright',
        'google-tag-manager',
        'extract-code',
        'visit',
        'pagation',
        'server-push',
        'tabs',
        'git-log',
        'seo',
        'yuque-deploy',
        'ppt',
        'gitalk',
        'contact-us',
        'define',
        'mailchimp',
        'contributors',
        'selected-text-popup',
        'sidebar',
        'reading-progress',
        'reading-time',
        'click',
        'featured',
        'media',
        'export-site',
        'back-to-top',
        'rss',
        'component-catalog',
        'run',
        'mathjax',
        'spacing',
        'live2d',
        'flowchart',
        'cpt',
        'serve',
        'bgm-player',
        'dehydrate',
        'application-insights',
        'code-switcher',
        'auto-sidebar',
        'export',
        'docgen',
        'demo-code',
        'md-enhance',
        'feed',
        'blog-advance',
        'mygitalk',
        'cat',
        'redirect',
        'baidu-tongji',
        'kan-ban-niang',
        'cleanmylink',
        'demo-block',
        'table-of-contents',
        'disqus',
        'code-doc',
        'ribbon',
        'sitemap',
        'yuque',
        'gitalk-maker']
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
    [
      'sitemap', {
        hostname: 'https://vuepress.tools'
      }
    ],
    ['seo']
  ]
}
