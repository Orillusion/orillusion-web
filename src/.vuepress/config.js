const sidebar = {
  cookbook: [
    {
      title: 'Cookbook',
      collapsable: false,
      children: [
        '/cookbook/',
        '/cookbook/editable-svg-icons',
        '/cookbook/debugging-in-vscode',
        '/cookbook/automatic-global-registration-of-base-components'
      ]
    }
  ],
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: [
        //'/guide/installation',
        '/guide/introduction',
        // '/guide/instance',
        // '/guide/template-syntax',
        // '/guide/data-methods',
        // '/guide/computed',
        // '/guide/class-and-style',
        // '/guide/conditional',
        // '/guide/list',
        // '/guide/events',
        // '/guide/forms',
        // '/guide/component-basics'
      ]
    },
    // {
    //   title: 'Components In-Depth',
    //   collapsable: false,
    //   children: [
    //     '/guide/component-registration',
    //     '/guide/component-props',
    //     '/guide/component-attrs',
    //     '/guide/component-custom-events',
    //     '/guide/component-slots',
    //     '/guide/component-provide-inject',
    //     '/guide/component-dynamic-async',
    //     '/guide/component-template-refs',
    //     '/guide/component-edge-cases'
    //   ]
    // },
    // {
    //   title: 'Transitions & Animation',
    //   collapsable: false,
    //   children: [
    //     '/guide/transitions-overview',
    //     '/guide/transitions-enterleave',
    //     '/guide/transitions-list',
    //     '/guide/transitions-state'
    //   ]
    // },
    // {
    //   title: 'Reusability & Composition',
    //   collapsable: false,
    //   children: [
    //     {
    //       title: 'Composition API',
    //       children: [
    //         '/guide/composition-api-introduction',
    //         '/guide/composition-api-setup',
    //         '/guide/composition-api-lifecycle-hooks',
    //         '/guide/composition-api-provide-inject',
    //         '/guide/composition-api-template-refs'
    //       ]
    //     },
    //     '/guide/mixins',
    //     '/guide/custom-directive',
    //     '/guide/teleport',
    //     '/guide/render-function',
    //     '/guide/plugins'
    //   ]
    // },
    // {
    //   title: 'Advanced Guides',
    //   collapsable: false,
    //   children: [
    //     '/guide/web-components',
    //     {
    //       title: 'Reactivity',
    //       children: [
    //         '/guide/reactivity',
    //         '/guide/reactivity-fundamentals',
    //         '/guide/reactivity-computed-watchers'
    //       ]
    //     },
    //     '/guide/optimizations',
    //     '/guide/change-detection'
    //   ]
    // },
    // {
    //   title: 'Tooling',
    //   collapsable: false,
    //   children: [
    //     '/guide/single-file-component',
    //     '/guide/testing',
    //     '/guide/typescript-support',
    //     '/guide/mobile',
    //     '/guide/tooling/deployment'
    //   ]
    // },
    // {
    //   title: 'Scaling Up',
    //   collapsable: false,
    //   children: [
    //     '/guide/routing',
    //     '/guide/state-management',
    //     '/guide/ssr',
    //     '/guide/security'
    //   ]
    // },
    // {
    //   title: 'Accessibility',
    //   collapsable: false,
    //   children: [
    //     '/guide/a11y-basics',
    //     '/guide/a11y-semantics',
    //     '/guide/a11y-standards',
    //     '/guide/a11y-resources'
    //   ]
    // }
  ],
  api: [
    '/api/application-api',
    {
      title: 'WebGPU',
      path: '/api/webgpu/index',
      collapsable: false,
      children: [
        '/api/webgpu/limits',
        '/api/webgpu/pipelines',
        '/api/webgpu/rejected-error-handling',
        '/api/webgpu/timeline-fences',
        '/api/webgpu/usage-validation-rules'
      ]
    },
    // '/api/application-config',
    // '/api/application-api',
    // '/api/global-api',
    // {
    //   title: 'Options',
    //   path: '/api/options-api',
    //   collapsable: false,
    //   children: [
    //     '/api/options-data',
    //     '/api/options-dom',
    //     '/api/options-lifecycle-hooks',
    //     '/api/options-assets',
    //     '/api/options-composition',
    //     '/api/options-misc'
    //   ]
    // },
    // '/api/instance-properties',
    // '/api/instance-methods',
    // '/api/directives',
    // '/api/special-attributes',
    // '/api/built-in-components.md',
    // {
    //   title: 'Reactivity API',
    //   path: '/api/reactivity-api',
    //   collapsable: false,
    //   children: [
    //     '/api/basic-reactivity',
    //     '/api/refs-api',
    //     '/api/computed-watch-api',
    //     '/api/effect-scope',
    //   ]
    // },
    // '/api/composition-api',
    // {
    //   title: 'Single File Components',
    //   collapsable: false,
    //   children: [
    //     {
    //       title: 'Spec',
    //       path: '/api/sfc-spec'
    //     },
    //     {
    //       title: 'Tooling',
    //       path: '/api/sfc-tooling'
    //     },
    //     {
    //       title: '<script setup>',
    //       path: '/api/sfc-script-setup'
    //     },
    //     {
    //       title: '<style> Features',
    //       path: '/api/sfc-style'
    //     }
    //   ]
    // }
  ],
  examples: [
    {
      title: 'Examples',
      collapsable: false,
      children: [
        '/examples/markdown',
        '/examples/commits',
        '/examples/grid-component',
        '/examples/tree-view',
        '/examples/svg',
        '/examples/modal',
        '/examples/elastic-header',
        '/examples/select2',
        '/examples/todomvc'
      ]
    }
  ],
  migration: [
    '/guide/migration/introduction',
    '/guide/migration/migration-build',
    {
      title: 'Details',
      collapsable: false,
      children: [
        '/guide/migration/array-refs',
        '/guide/migration/async-components',
        '/guide/migration/attribute-coercion',
        '/guide/migration/attrs-includes-class-style',
        '/guide/migration/children',
        '/guide/migration/custom-directives',
        '/guide/migration/custom-elements-interop',
        '/guide/migration/data-option',
        '/guide/migration/emits-option',
        '/guide/migration/events-api',
        '/guide/migration/filters',
        '/guide/migration/fragments',
        '/guide/migration/functional-components',
        '/guide/migration/global-api',
        '/guide/migration/global-api-treeshaking',
        '/guide/migration/inline-template-attribute',
        '/guide/migration/key-attribute',
        '/guide/migration/keycode-modifiers',
        '/guide/migration/listeners-removed',
        '/guide/migration/mount-changes',
        '/guide/migration/props-data',
        '/guide/migration/props-default-this',
        '/guide/migration/render-function-api',
        '/guide/migration/slots-unification',
        '/guide/migration/suspense',
        '/guide/migration/transition',
        '/guide/migration/transition-as-root',
        '/guide/migration/transition-group',
        '/guide/migration/v-on-native-modifier-removed',
        '/guide/migration/v-model',
        '/guide/migration/v-if-v-for',
        '/guide/migration/v-bind',
        '/guide/migration/vnode-lifecycle-events',
        '/guide/migration/watch'
      ]
    }
  ],
  ssr: [
    ['/guide/ssr/introduction', 'Introduction'],
    '/guide/ssr/getting-started',
    '/guide/ssr/universal',
    '/guide/ssr/structure',
    '/guide/ssr/build-config',
    '/guide/ssr/server',
    '/guide/ssr/routing',
    '/guide/ssr/hydration'
  ],
  contributing: [
    {
      title: 'Contribute to the Docs',
      collapsable: false,
      children: [
        '/guide/contributing/writing-guide',
        '/guide/contributing/doc-style-guide',
        '/guide/contributing/translations'
      ]
    }
  ]
}

module.exports = {
  title: 'Orillusion',
  description: 'Orillusion - 次时代Web3D渲染引擎',
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo_blue.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#304455' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/logo_blue.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/logo_blue.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // [
    //   'script',
    //   {
    //     src: 'https://player.vimeo.com/api/player.js'
    //   }
    // ],
    // [
    //   'script',
    //   {
    //     src: 'https://extend.vimeocdn.com/ga/72160148.js',
    //     defer: 'defer'
    //   }
    // ]
  ],
  themeConfig: {
    logo: '/logo_blue.png',
    nav: [
      {
        text: '文档',
        ariaLabel: 'Documentation Menu',
        items: [
          {
            text: '教程',
            link: '/guide/introduction'
          },
          // {
          //   text: 'Style Guide',
          //   link: '/style-guide/'
          // },
          // {
          //   text: 'Cookbook',
          //   link: '/cookbook/'
          // },
          // {
          //   text: 'Examples',
          //   link: '/examples/markdown'
          // },
          // {
          //   text: 'Contribute',
          //   link: '/guide/contributing/writing-guide'
          // },
          // {
          //   text: 'Migration from Vue 2',
          //   link: '/guide/migration/introduction'
          // }
        ]
      },
      {
        text: 'API参考',
        link: '/api/'
      },
      // {
      //   text: 'Ecosystem',
      //   items: [
      //     {
      //       text: 'Community',
      //       ariaLabel: 'Community Menu',
      //       items: [
      //         {
      //           text: 'Team',
      //           link: '/community/team/'
      //         },
      //         {
      //           text: 'Partners',
      //           link: '/community/partners'
      //         },
      //         {
      //           text: 'Join',
      //           link: '/community/join/'
      //         },
      //         {
      //           text: 'Themes',
      //           link: '/community/themes/'
      //         }
      //       ]
      //     },
      //     {
      //       text: 'Official Projects',
      //       items: [
      //         {
      //           text: 'Vue Router',
      //           link: 'https://next.router.vuejs.org/'
      //         },
      //         {
      //           text: 'Vuex',
      //           link: 'https://next.vuex.vuejs.org/'
      //         },
      //         {
      //           text: 'Vue CLI',
      //           link: 'https://cli.vuejs.org/'
      //         },
      //         {
      //           text: 'Vue Test Utils',
      //           link: 'https://next.vue-test-utils.vuejs.org/guide/'
      //         },
      //         {
      //           text: 'Devtools',
      //           link: 'https://devtools.vuejs.org'
      //         },
      //         {
      //           text: 'Weekly news',
      //           link: 'https://news.vuejs.org/'
      //         },
      //         {
      //           text: 'Blog',
      //           link: 'https://blog.vuejs.org/'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   text: 'Support Vue',
      //   link: '/support-vuejs/',
      //   items: [
      //     {
      //       text: 'One-time Donations',
      //       link: '/support-vuejs/#one-time-donations'
      //     },
      //     {
      //       text: 'Recurring Pledges',
      //       link: '/support-vuejs/#recurring-pledges'
      //     },
      //     {
      //       text: 'T-Shirt Shop',
      //       link: 'https://vue.threadless.com/'
      //     }
      //   ]
      // },
      {
        text: '多语言',
        link: '#',
        items: [
          // Translation maintainers: Please include the link below to the English documentation
          {
            text: 'English',
            link: 'https://en.orillusion.com/',
            isTranslation: true
          },
          {
            text: '中文',
            link: 'https://cn.orillusion.com/',
            isTranslation: true
          },
          // {
          //   text: '한국어',
          //   link: 'https://v3.ko.vuejs.org/',
          //   isTranslation: true
          // },
          // {
          //   text: '日本語',
          //   link: 'https://v3.ja.vuejs.org/',
          //   isTranslation: true
          // },
          // {
          //   text: 'Русский',
          //   link: 'https://v3.ru.vuejs.org/ru/',
          //   isTranslation: true
          // },
          // {
          //   text: 'More Translations',
          //   link: '/guide/contributing/translations#community-translations'
          // }
        ]
      }
    ],
    repo: 'Orillusion/orillusion-web',
    editLinks: true,
    editLinkText: '编辑 GitHub!',
    lastUpdated: '最新更新',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      // '/guide/migration/': sidebar.migration,
      // '/guide/contributing/': sidebar.contributing,
      // '/guide/ssr/': sidebar.ssr,
      '/guide/': sidebar.guide,
      // '/community/': sidebar.guide,
      // '/cookbook/': sidebar.cookbook,
      '/api/': sidebar.api,
      // '/examples/': sidebar.examples
    },
    smoothScroll: false,
    algolia: {
      indexName: 'orillusion',
      appId: 'A4SU9IUJ2M',
      apiKey: '1a3b57b41821e82cafdd80621f042c9c'
    },
    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },
    topBanner: false
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const date = new Date(timestamp)

          const digits = [
            date.getUTCFullYear(),
            date.getUTCMonth() + 1,
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
          ].map(num => String(num).padStart(2, '0'))

          return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(
            /{(\d)}/g,
            (_, num) => digits[num]
          )
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '有新内容更新',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
