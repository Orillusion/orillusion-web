import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md'
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Orillusion Reference',
      children: [
        '/reference/index.md',
      ],
    },
  ],
  // '/reference/webgpu': [
  //   {
  //     text: 'WebGPU',
  //     children: [
  //       '/reference/webgpu/index.md',
  //       '/reference/webgpu/wgsl.md',
  //     ],
  //   },
  // ]
}
