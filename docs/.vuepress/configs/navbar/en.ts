import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/'
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'Orillusion',
        children: [
          '/reference/index.md'
        ],
      },
      {
        text: 'WebGPU',
        children: [
          {text:'Specification', link: 'https://www.orillusion.com/webgpu.html'},
          {text:'Shading Language', link: 'https://www.orillusion.com/wgsl.html'},
          {text:'Explainer', link: 'https://www.orillusion.com/explainer.html'},
        ],
      },
    ]
  },
  {
    text: 'Forum',
    link: 'https://forum.orillusion.com',
  }
]
