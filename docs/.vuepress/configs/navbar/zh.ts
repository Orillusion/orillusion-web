import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '参考',
    children: [
      {
        text: 'Orillusion',
        children: [
          '/zh/reference/index.md'
        ],
      },
      {
        text: 'WebGPU',
        children: [
          {text:'规范标准', link: 'https://dev.orillusion.com/zh/webgpu.html'},
          {text:'着色器语言', link: 'https://dev.orillusion.com/zh/wgsl.html'},
          {text:'说明', link: 'https://dev.orillusion.com/zh/explainer.html'},
        ],
      },
    ]
  },
  {
    text: '论坛',
    link: 'https://forum.orillusion.com',
  }
]
