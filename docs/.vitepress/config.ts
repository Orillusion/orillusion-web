import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync } from 'fs'

type SidebarItem = {
    text: string
    collapsible?: boolean
    collapsed?: boolean
    items: {
        text: string
        link: string
        items?: { text: string; link: string }[]
    }[]
}[]
export default async () =>
    defineConfig({
        base: '/en',
        lang: 'en-US',
        title: 'Orillusion',
        description: 'The Next Generation WebGPU Engine',
        lastUpdated: true,
        ignoreDeadLinks: true,
        appearance: 'dark',
        head: [
            ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/icons/icon-192.png' }],
            ['link', { rel: 'dns-prefetch', href: 'https://cdn.orillusion.com' }],
            ['link', { rel: 'prefetch',  href: "https://unpkg.com/@orillusion/core@0.6.9-beta.1/dist/orillusion.es.js" }],
            ['link', { rel: 'prefetch',  href: "https://unpkg.com/@orillusion/physics@0.2.0/dist/physics.es.js" }],
            ['link', { rel: 'prefetch',  href: "https://unpkg.com/dat.gui@0.7.9/build/dat.gui.module.js" }],
            ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-0H9189CS0W' }],
            ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
            ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['link', { rel: 'apple-touch-icon', href: '/images/icons/icon-512.png' }],
            ['meta', { name: 'theme-color', content: '#242424' }],
            ['link', { rel: 'manifest', href: '/en/manifest.json' }]
        ],
        locales: {
            root: { label: 'English' },
            zh: { label: '简体中文', link: 'https://www.orillusion.com/' }
        },
        themeConfig: {
            logo: {
                light: '/images/logo_black.png',
                dark: '/images/logo_white.png'
            },
            outline: [2, 3],
            nav: nav(),
            sidebar: {
                '/guide/': sidebarGuide(),
                '/api/': sidebar('', 'api'),
                '/physics/': sidebar('', 'physics'),
                '/stats/': sidebar('', 'stats'),
                '/media-extention/': sidebar('', 'media-extention'),
                '/particle/': sidebar('', 'particle'),
                '/example/': sidebarExample()
            },

            editLink: {
                pattern: 'https://github.com/Orillusion/orillusion-web/edit/en/docs/:path'
            },

            socialLinks: [
                { icon: 'github', link: 'https://github.com/Orillusion/orillusion' },
                {
                    icon: {svg: '<svg viewBox="0 0 1024 1024"><path d="M490.338 592.738c11.816 11.816 29.539 11.816 41.354 0L976.738 179.2c7.877-15.754 5.908-41.354-25.6-41.354l-880.246 1.97c-23.63 0-43.323 21.66-25.6 41.353l445.046 411.57z m494.277-252.061c0-19.692-23.63-31.508-39.384-17.723L596.677 643.938c-23.63 21.662-53.17 33.477-84.677 33.477s-61.046-11.815-84.677-31.507L80.738 322.954c-15.753-13.785-39.384-3.939-39.384 17.723-1.97-5.908-1.97 447.015-1.97 447.015 0 43.323 35.447 78.77 78.77 78.77h787.692c43.323 0 78.77-35.447 78.77-78.77V340.677z"></path></svg>'},
                    link: 'mailto:business@orillusion.com'
                }
            ],

            footer: {
                message: 'Released under the MIT License',
                copyright: 'Copyright © 2021-Present <a href="mailto:business@orillusion.com">Orillusion</a>'
            },

            algolia: {
                appId: 'TJ3C7RARIT',
                apiKey: 'ab01334a5b0c198b8702054b2cafd5da',
                indexName: 'orillusion',
                searchParameters: {
                    facetFilters: ['tags:latest']
                }
            }
        },
        markdown: {
            lineNumbers: true,
            attrs: { disable: true }
        }
    })

function nav() {
    return [
        {
            text: 'Doc',
            items: [
                {
                    text: 'Guide',
                    link: '/guide/'
                }
                // {
                //   text: 'Example',
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
                        { text: 'Core', link: '/api/' },
                        { text: 'Physics', link: '/physics/' },
                        { text: 'Media Extention', link: '/media-extention/' },
                        { text: 'Stats', link: '/stats/' },
                        { text: 'Particle', link: '/particle/' }
                    ]
                },
                {
                    text: 'WebGPU',
                    items: [
                        { text: 'Spec', link: 'https://gpuweb.github.io/gpuweb/' },
                        { text: 'WGSL', link: 'https://gpuweb.github.io/gpuweb/wgsl/' },
                        { text: 'Explainer', link: 'https://gpuweb.github.io/gpuweb/explainer/' }
                    ]
                }
            ]
        },
        {
            text: 'Forum',
            link: 'https://forum.orillusion.com'
        },
        {
            text: 'v0.6',
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/Orillusion/orillusion/releases'
                },
                {
                    text: 'NPM',
                    link: 'https://www.npmjs.com/package/@orillusion/core'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/Orillusion/orillusion/blob/main/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarGuide(): SidebarItem {
    return [
        {
            text: 'Get Started',
            collapsible: true,
            items: [
                { text: 'Intro', link: '/guide/index.md' },
                { text: 'Install', link: '/guide/getting_start/install.md' },
                { text: 'Engine Init', link: '/guide/getting_start/initialization.md' },
                { text: 'Draw Cube', link: '/guide/getting_start/draw_cube.md' },
                { text: 'Load 3D Model', link: '/guide/getting_start/load_model.md' },
                { text: 'First Script', link: '/guide/getting_start/script.md' }
            ]
        },
        {
            text: 'Core',
            collapsible: true,
            items: [
                { text: 'Entity & Component', link: '/guide/core/component.md' },
                { text: 'Object3D', link: '/guide/core/object.md' },
                { text: 'Scene3D', link: '/guide/core/scene.md' },
                { text: 'Transform', link: '/guide/core/transform.md' },
                { text: 'Script', link: '/guide/core/script.md' },
                { text: 'Engine3D', link: '/guide/core/engine.md' },
                { text: 'Config', link: '/guide/core/config.md' }
            ]
        },
        {
            text: 'Graphics',
            collapsible: true,
            items: [
                { text: 'Camera', link: '/guide/graphics/camera.md' },
                { text: 'Light', link: '/guide/graphics/lighting.md' },
                { text: 'Shadow', link: '/guide/graphics/shadow.md' },
                { text: 'Mesh', link: '/guide/graphics/mesh.md' },
                { text: 'Material', link: '/guide/graphics/materials.md' },
                { text: 'Texture', link: '/guide/graphics/texture.md' }
            ]
        },
        {
            text: 'Animation',
            collapsible: true,
            items: [
                { text: 'Skeleton', link: '/guide/animation/skeleton.md' },
                { text: 'Property', link: '/guide/animation/property.md' },
                { text: 'Morph', link: '/guide/animation/morph.md' }
            ]
        },
        {
            text: 'Particle',
            collapsible: true,
            items: [
                { text: 'Intro', link: '/guide/particle/Readme.md' },
                { text: 'Emitter', link: '/guide/particle/emitter.md' },
                // { text: 'Renderer', link: '/guide/particle/renderer.md' },
                { text: 'Base Module', link: '/guide/particle/baseModule.md' }
            ]
        },
        {
            text: 'Physics',
            collapsible: true,
            items: [
                { text: 'Intro', link: '/guide/physics/Readme.md' },
                { text: 'Rigid Body', link: '/guide/physics/rigidbody.md' },
                { text: 'Collider', link: '/guide/physics/collider.md' }
            ]
        },
        {
            text: 'Interaction',
            collapsible: true,
            items: [
                { text: 'Input System', link: '/guide/interaction/pointer.md' },
                { text: 'Keyboard', link: '/guide/interaction/keyboard.md' },
                { text: 'Mouse Pick', link: '/guide/interaction/pickfire.md' },
                { text: 'Custom Event', link: '/guide/interaction/event.md' }
            ]
        },
        {
            text: 'Media',
            collapsible: true,
            items: [
                { text: 'Intro', link: '/guide/media/Readme.md' },
                { text: 'Image', link: '/guide/media/image.md' },
                { text: 'Video', link: '/guide/media/video.md' },
                { text: 'ChromaKey', link: '/guide/media/chromakey.md' }
            ]
        },
        {
            text: 'Resource',
            collapsible: true,
            items: [
                { text: 'Resource Loading', link: '/guide/resource/Readme.md' },
                { text: 'GLTF', link: '/guide/resource/gltf.md' }
            ]
        },
        {
            text: 'GUI',
            collapsible: true,
            items: [
                { text: 'Intro', link: '/guide/gui/Readme.md' },
                { text: 'Image', link: '/guide/gui/image.md' },
                { text: 'Image Group', link: '/guide/gui/imageGroup.md' },
                { text: 'Text', link: '/guide/gui/textfield.md' },
                { text: 'Button', link: '/guide/gui/button.md' },
                { text: 'Shadow', link: '/guide/gui/shadow.md' },
                { text: 'Multi UIPanel', link: '/guide/gui/demo.md' }
            ]
        },
        {
            text: 'Stats',
            collapsible: true,
            items: [{ text: 'Intro', link: '/guide/performance/Readme.md' }]
        },
        {
            text: 'Utils',
            collapsible: true,
            items: [{ text: 'Math', link: '/guide/tools/math.md' }]
        },
        {
            text: 'Advanced',
            collapsible: true,
            items: [
                {
                    text: 'WebGPU Shader',
                    link: '/guide/advanced/shader/shader_intro.md',
                    items: [
                        { text: 'RenderShader', link: '/guide/advanced/shader/shader_material.md' },
                        { text: 'Include', link: '/guide/advanced/shader/shader_include.md' },
                        { text: 'Define', link: '/guide/advanced/shader/shader_define.md' },
                        { text: 'Variants', link: '/guide/advanced/shader/shader_variants.md' },
                        { text: 'Public Variables', link: '/guide/advanced/shader/shader_internal.md' },
                        { text: 'Custom Material', link: '/guide/advanced/shader/shader_unlit.md' },
                        { text: 'ComputeShader', link: '/guide/advanced/shader/shader_compute.md' }
                    ]
                },
                {
                    text: 'Post Effects',
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
                { text: 'Global Illumination', link: '/guide/advanced/gi.md' }
            ]
        }
    ]
}

function sidebar(root: string = '', packages: string) {
    const index: { [key: string]: { text: string; link: string }[] } = {}
    const mds = readFileSync(`${__dirname}/../${packages}/index.md`, 'utf-8').match(/.*.(\n|\r)/g) as string[]
    let lastTitle = ''
    for (let line of mds) {
        if (line.match(/# @/)) continue
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
    const sidebar: SidebarItem = [
        {
            text: 'Packages',
            items: [
                {
                    text: '@orillusion/core',
                    link: '/api/'
                },
                {
                    text: '@orillusion/physics',
                    link: '/physics/'
                },
                {
                    text: '@orillusion/stats',
                    link: '/stats/'
                },
                {
                    text: '@orillusion/media-extention',
                    link: '/media-extention/'
                },
                {
                    text: '@orillusion/particle',
                    link: '/particle/'
                }
            ]
        }
    ]
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
        const mds = readdirSync(__dirname + '/../example/' + i, 'utf-8').filter((v) => /\.md$/.test(v))
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
