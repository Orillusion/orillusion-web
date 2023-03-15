import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync } from 'fs'

type SidebarItem = {
  text: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items: ({
      text: string;
      link: string;
      items?: {text: string;link: string;}[];
  })[];
}[]
export default async () => defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'Orillusion',
  description: 'The Next Generation WebGPU Engine',
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/png", href: '/zh/images/icons/icon-192.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/zh/images/icons/icon-512.png' }],
    ['link', { rel: 'prefetch', href: 'https://cdn.orillusion.com/orillusion.es.js' }],
    ['link', { rel: 'prefetch', href: 'https://cdn.orillusion.com/physics.es.js' }],
    ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-0H9189CS0W' }],
    ['meta', { name: 'theme-color', content: '#242424' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
  ],
  themeConfig: {
    logo: {
      light: '/images/logo_black.png',
      dark: '/images/logo_white.png'
    },
    outlineTitle: '本页内容',
    outline: [2,3],
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebar('', 'api'),
      '/physics/': sidebar('', 'physics'),
      '/stats/': sidebar('', 'stats'),
      '/media-extention/': sidebar('', 'media-extention'),
      '/example/': sidebarExample(),
      '/cdn/': [{
        text: '3DHub CDN',
        items: [
          {
            text: '认证与授权',
            link: '/cdn/index.md'
          },
          {
            text: '模型 API',
            link: '/cdn/models.md'
          },
          {
            text: '分享 API',
            link: '/cdn/links.md'
          },
          {
            text: '场景 API',
            link: '/cdn/scenes.md'
          }
        ]
      }]
    },

    editLink: {
      pattern: 'https://github.com/Orillusion/orillusion-web/edit/master/docs/:path',
      text: '为此页提供修改建议'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Orillusion/orillusion' }
    ],

    // localeLinks: {
    //   text: '简体中文',
    //   items: [
    //     { text: 'English', link: 'https://demo.orillusion.com/en/' }
    //   ]
    // },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021027896号</a>',
      copyright: 'Copyright © 2021-Present Orillusion'
    },

    algolia: {
      appId: 'A4SU9IUJ2M',
      apiKey: '1a3b57b41821e82cafdd80621f042c9c',
      indexName: 'orillusion',
      // locales: {
      //   zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
      //   }
      // }
    },

    lastUpdatedText: '最后更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }

  },
  markdown: {
    lineNumbers: true
  }
})

function nav() {
  return [
    {
      text: '文档',
      items: [
        {
          text: '教程',
          link: '/guide/'
        },
        // {
        //   text: '示例',
        //   link: '/example/Animation/sample1'
        // }
      ]
    },
    {
      text: 'API',
      items: [
        {
          text: 'Orillusion',
          items: [
            { text: 'API', link: '/api/' },
          ]
        },
        {
          text: 'WebGPU',
          items: [
            { text: '规范标准', link: 'https://www.orillusion.com/zh/webgpu.html' },
            { text: '着色器语言', link: 'https://www.orillusion.com/zh/wgsl.html' },
            { text: '说明', link: 'https://www.orillusion.com/zh/explainer.html' }
          ]
        }
      ]
    },
    // {
    //   text: '3DHub',
    //   link: 'https://3dhub.orillusion.com'
    // },
    {
      text: '论坛',
      link: 'https://forum.orillusion.com'
    }
  ]
}

function sidebarGuide():SidebarItem{
  return [
    {
      text: '快速入门',
      collapsible: true,
      items: [
        { text: '引擎特点', link: '/guide/index.md' },
        { text: '安装', link: '/guide/getting_start/install.md' },
        { text: '初始化引擎', link: '/guide/getting_start/initialization.md' },
        { text: '绘制立方体', link: '/guide/getting_start/draw_cube.md' },
        { text: '加载3D模型', link: '/guide/getting_start/load_model.md' },
        { text: '第一个脚本组件', link: '/guide/getting_start/script.md' },
      ],
    },
    {
      text: '核心',
      collapsible: true,
      items: [
        { text: '实体与组件', link: '/guide/core/component.md' },
        { text: 'Object3D', link: '/guide/core/object.md' },
        { text: 'Scene3D', link: '/guide/core/scene.md' },
        { text: '坐标变换', link: '/guide/core/transform.md' },
        { text: '脚本组件', link: '/guide/core/script.md' },
        { text: 'Engine3D', link: '/guide/core/engine.md' },
        { text: '配置', link: '/guide/core/config.md' },
      ],
    },
    {
      text: '图形',
      collapsible: true,
      items: [
        { text: '摄像机', link: '/guide/graphics/camera.md' },
        { text: '光照', link: '/guide/graphics/lighting.md' },
        { text: '阴影', link: '/guide/graphics/shadow.md' },
        { text: '网格', link: '/guide/graphics/mesh.md' },
        { text: '材质', link: '/guide/graphics/materials.md' },
        { text: '纹理', link: '/guide/graphics/texture.md' },
      ],
    },
    {
      text: '动画',
      collapsible: true,
      items: [
        { text: '骨骼动画', link: '/guide/animation/skeleton.md' },
        { text: '属性动画', link: '/guide/animation/property.md' },
        { text: 'Morph动画', link: '/guide/animation/morph.md' },
        { text: '粒子动画', link: '/guide/animation/particle.md' },
      ],
    },
    {
      text: '物理',
      collapsible: true,
      items: [
        { text: '物理总览', link: '/guide/physics/Readme.md' },
        { text: '刚体', link: '/guide/physics/rigidbody.md' },
        { text: '碰撞体', link: '/guide/physics/collider.md' },
      ],
    },
    {
      text: '交互',
      collapsible: true,
      items: [
        { text: '触控', link: '/guide/interaction/pointer.md' },
        { text: '键盘', link: '/guide/interaction/keyboard.md' },
        { text: '拾取事件', link: '/guide/interaction/pickfire.md' },
        { text: '自定义事件', link: '/guide/interaction/event.md' },
      ],
    },
    {
      text: '媒体扩展',
      collapsible: true,
      items: [
        { text: '安装', link: '/guide/media/Readme.md' },
        { text: '图片', link: '/guide/media/image.md' },
        { text: '视频', link: '/guide/media/video.md' },
        { text: '视频(背景过滤)', link: '/guide/media/chromakey.md' },
      ],
    },
    {
      text: '资源',
      collapsible: true,
      items: [
        { text: '资源加载', link: '/guide/resource/Readme.md' },
        { text: 'GLTF', link: '/guide/resource/gltf.md' },
      ],
    },
    {
      text: '用户界面',
      collapsible: true,
      items: [
        { text: '简介', link: '/guide/gui/Readme.md' },
        { text: '文本', link: '/guide/gui/textfield.md' },
        { text: '图片', link: '/guide/gui/image.md' },
        { text: '按钮', link: '/guide/gui/button.md' },
        { text: 'WorldSpace', link: '/guide/gui/panel.md' }
      ],
    },
    {
      text: '性能调试',
      collapsible: true,
      items: [
        { text: '统计面板', link: '/guide/performance/Readme.md' },
      ],
    },
    {
      text: '工具库',
      collapsible: true,
      items: [
        { text: '数学', link: '/guide/tools/math.md' },
      ],
    },
    // {
    //   text: '平台适配',
    //   collapsible: true,
    //   items: [
    //     { text: '平台适配', link: '/guide/platforms/Readme.md' },
    //   ],
    // },
    // {
    //   text: '美术',
    //   collapsible: true,
    //   items: [
    //     { text: '规范', link: '/guide/art/Readme.md' },
    //   ],
    // },
    // {
    //   text: '编辑器',
    //   collapsible: true,
    //   items: [
    //     { text: '编辑器', link: '/guide/editor/Readme.md' },
    //   ],
    // },
    {
      text: '高级功能',
      collapsible: true,
      items: [
        { text: 'WebGPU Shader',
          link: '/guide/advanced/shader/shader_intro.md',
          items: [
            { text: 'RenderShader', link: '/guide/advanced/shader/shader_material.md' },
            { text: '代码引用', link: '/guide/advanced/shader/shader_include.md' },
            { text: '代码宏', link: '/guide/advanced/shader/shader_define.md' },
            { text: '着色器变体', link: '/guide/advanced/shader/shader_variants.md' },
            { text: '着色器内置变量', link: '/guide/advanced/shader/shader_internal.md' },
            { text: '自定义材质示例', link: '/guide/advanced/shader/shader_unlit.md' },
            { text: 'ComputeShader', link: '/guide/advanced/shader/shader_compute.md' },
          ]
        },
        {
          text: '后处理特效',
          link: '/guide/advanced/posteffect.md',
          items: [
            { text: 'DepthOfFieldPost', link: '/guide/advanced/post_depthOfField.md' },
            { text: 'SSRPost', link: '/guide/advanced/post_ssr.md' },
            { text: 'OutlinePost', link: '/guide/advanced/post_outline.md' },
            { text: 'GlobalFog', link: '/guide/advanced/post_globalfog.md' },
            { text: 'HDRBloomPost', link: '/guide/advanced/post_bloom.md' },
            { text: 'GTAOPost', link: '/guide/advanced/post_gtao.md' },
            { text: 'TAAPost', link: '/guide/advanced/post_taa.md' }
          ]
        },
        { text: '全局光照', link: '/guide/advanced/gi.md' },
      ]
    }
  ]
}

function sidebar(root: string = '', packages: string) {
  const index: { [key: string]: { text: string, link: string }[] } = {}
  const mds = readFileSync(`${__dirname}/../${packages}/index.md`, 'utf-8').match(/.*.(\n|\r)/g) as string[]
  let lastTitle = ''
  for (let line of mds) {
    if (line.match(/# @/))
      continue
    else if (line.match(/##\s\w+/)) {
      lastTitle = line.slice(3, -1).trim()
      index[lastTitle] = []
    } else {
      let text = line.match(/\w+/)
      let md = line.match(/\w+\/\w+\.md/)
      if (md && text) {
        index[lastTitle].push({
          text: text[0],
          link: `${root}/${packages}/${md[0]}`
        })
      }
    }
  }
  const sidebar: SidebarItem = [{
    text: 'Packages',
    items: [{
      text: '@orillusion/core',
      link: '/api/'
    }, {
      text: '@orillusion/physics',
      link: '/physics/'
    }, {
      text: '@orillusion/stats',
      link: '/stats/'
    }, {
      text: '@orillusion/media-extention',
      link: '/media-extention/'
    }]
  }]
  for (let i in index) {
    sidebar.push({
      text: i,
      collapsible: true,
      collapsed: false,
      items: index[i]
    })
  }
  return sidebar
}
function sidebarExample(root: string = '') {
  const index: { [key: string]: string[] } = {
    Animation: [],
    Camera: [],
    Light: [],
    Material: [],
    Texture: [],
    Benchmark: [],
    Advance: []
  }

  const examples: SidebarItem = []
  for (let i in index) {
    const mds = readdirSync(__dirname + '/../example/' + i, 'utf-8').filter(v => /\.md$/.test(v))
    examples.push({
      text: i,
      collapsible: true,
      collapsed: false,
      items: mds.map((v: string) => {
        return { text: v.slice(0, -3), link: `${root}/example/${i}/${v}` }
      })
    })
  }
  return examples
}
