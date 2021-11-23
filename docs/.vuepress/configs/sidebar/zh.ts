import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md'
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: 'API 参考',
      children: [
        '/zh/reference/index.md',
        {
          text: 'WebGPU',
          children: [
            {text: '规范', link: 'https://dev.orillusion.com/zh/webgpu.html'},
            {text: '着色器语言', link: 'https://dev.orillusion.com/zh/wgsl.html'},
            {text: '说明', link: 'https://dev.orillusion.com/zh/explainer.html'},
          ],
        }
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
