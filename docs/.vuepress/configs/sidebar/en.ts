import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md'
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Orillusion Reference',
      children: [
        '/reference/index.md',
        {
          text: 'WebGPU',
          children: [
            {text: 'Specification', link: 'https://dev.orillusion.com/webgpu.html'},
            {text: 'Shading Language', link: 'https://dev.orillusion.com/wgsl.html'},
            {text: 'Explainer', link: 'https://dev.orillusion.com/explainer.html'},
          ],
        }
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
