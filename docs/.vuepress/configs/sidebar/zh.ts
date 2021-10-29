import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: 'Guide',
      children: [
        '/zh/guide/README.md'
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: 'Orillusion Reference',
      children: [
        '/zh/reference/index.md',
      ],
    },
  ],
  // '/zh/reference/webgpu': [
  //   {
  //     text: 'WebGPU',
  //     children: [
  //       '/zh/reference/webgpu/index.md',
  //       '/zh/reference/webgpu/wgsl.md',
  //     ],
  //   },
  // ]
}
