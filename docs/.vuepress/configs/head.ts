import type { HeadConfig } from '@vuepress/core'
export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            href: `/images/icons/icon-192.png`,
        },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'Orillusion' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Orillusion' }],
    [
        'meta',
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ],
    [
        'link',
        { rel: 'apple-touch-icon', href: `/images/icons/icon-512.png` },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#22272e' }],
    ['meta', { name: 'theme-color', content: '#22272e' }],
    ['meta', { name: 'keywords', content: 'webgpu,orillusion,gfx,engine,ecs,3d' }],
    ['script', {src: "https://zz.bdstatic.com/linksubmit/push.js"}],
    ['link', {rel:'prefetch', href: 'https://demo.orillusion.com/ecs/example/asteroids.html'}]
]