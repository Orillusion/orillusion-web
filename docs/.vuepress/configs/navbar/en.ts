import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
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
          {text:'Specification', link: 'https://dev.orillusion.com/webgpu.html'},
          {text:'Shader Language', link: 'https://dev.orillusion.com/wgsl.html'},
        ],
      },
    ]
  },
  {
    text: 'Forum',
    link: 'https://forum.orillusion.com',
  }
]
