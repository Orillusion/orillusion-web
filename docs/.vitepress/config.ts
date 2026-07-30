import { defineConfig } from 'vitepress';
import { readFileSync, readdirSync } from 'fs';
type SidebarItem = {
    text: string;
    collapsible?: boolean;
    collapsed?: boolean;
    items: {
        text: string;
        link: string;
        items?: { text: string; link: string }[];
    }[];
}[];
export default async () =>
    defineConfig({
        base: '/',
        lang: 'zh',
        title: 'Orillusion',
        description: 'Next-generation WebGPU engine, easy to use, forever open source, providing complete development tools for Web3D',
        lastUpdated: true,
        ignoreDeadLinks: true,
        appearance: 'dark',
        head: [
            ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/icons/icon-192.png' }],
            ['link', { rel: 'dns-prefetch', href: 'https://cdn.orillusion.com' }],
            ['link', { rel: 'prefetch', href: 'https://registry.npmmirror.com/dat.gui/0.7.9/files/build/dat.gui.module.js' }],
            ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-0H9189CS0W' }],
            ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
            ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['link', { rel: 'apple-touch-icon', href: '/images/icons/icon-512.png' }],
            ['meta', { name: 'theme-color', content: '#242424' }],
            ['link', { rel: 'manifest', href: '/manifest.json' }]
        ],
        locales: {
            root: { label: 'Simplified Chinese' },
            en: { label: 'English', link: 'https://www.orillusion.com/en/' }
        },
        themeConfig: {
            logo: {
                light: '/images/logo_black.png',
                dark: '/images/logo_white.png'
            },
            outlineTitle: 'On this page',
            outline: [2, 3],
            nav: nav(),
            sidebar: {
                '/guide/': sidebarGuide(),
                '/api/': sidebar('', 'api'),
                '/physics/': sidebar('', 'physics'),
                '/physics-rapier/': sidebar('', 'physics-rapier'),
                '/stats/': sidebar('', 'stats'),
                '/media-extention/': sidebar('', 'media-extention'),
                '/particle/': sidebar('', 'particle'),
                '/graphic/': sidebar('', 'graphic'),
                '/geometry/': sidebar('', 'geometry'),
                '/example/': sidebarExample(),
                '/cdn/': [
                    {
                        text: '3DHub CDN',
                        items: [
                            {
                                text: 'Authentication & Authorization',
                                link: '/cdn/index.md'
                            },
                            {
                                text: 'Model API',
                                link: '/cdn/models.md'
                            },
                            {
                                text: 'Sharing API',
                                link: '/cdn/links.md'
                            },
                            {
                                text: 'Scene API',
                                link: '/cdn/scenes.md'
                            }
                        ]
                    }
                ]
            },

            editLink: {
                pattern: 'https://github.com/Orillusion/orillusion-web/edit/master/docs/:path',
                text: 'Suggest changes to this page'
            },

            socialLinks: [
                {
                    icon: 'github',
                    link: 'https://github.com/Orillusion/orillusion'
                },
                {
                    icon: {
                        svg: '<svg viewBox="0 0 1024 1024"><path d="M490.338 592.738c11.816 11.816 29.539 11.816 41.354 0L976.738 179.2c7.877-15.754 5.908-41.354-25.6-41.354l-880.246 1.97c-23.63 0-43.323 21.66-25.6 41.353l445.046 411.57z m494.277-252.061c0-19.692-23.63-31.508-39.384-17.723L596.677 643.938c-23.63 21.662-53.17 33.477-84.677 33.477s-61.046-11.815-84.677-31.507L80.738 322.954c-15.753-13.785-39.384-3.939-39.384 17.723-1.97-5.908-1.97 447.015-1.97 447.015 0 43.323 35.447 78.77 78.77 78.77h787.692c43.323 0 78.77-35.447 78.77-78.77V340.677z"></path></svg>'
                    },
                    link: 'mailto:business@orillusion.com'
                }
            ],

            footer: {
                message: '<a href="https://beian.miit.gov.cn/" target="_blank">Beijing ICP No. 2021027896</a>',
                copyright: 'Copyright © 2021-Present <a href="mailto:business@orillusion.com">Orillusion</a>'
            },
            // search: {
            //     provider: 'local',
            //     options: {
            //         translations: {
            //             button: {
            //                 buttonText: 'Search docs',
            //                 buttonAriaLabel: 'Search docs'
            //             },
            //             modal: {
            //                 noResultsText: 'No results found',
            //                 resetButtonTitle: 'Clear query',
            //                 footer: {
            //                     selectText: 'to select',
            //                     navigateText: 'to navigate',
            //                     closeText: 'to close'
            //                 }
            //             }
            //         }
            //     }
            // },

            algolia: {
                appId: 'A4SU9IUJ2M',
                apiKey: '1a3b57b41821e82cafdd80621f042c9c',
                indexName: 'orillusion',
                searchParameters: {
                    facetFilters: ['tags:latest']
                },
                placeholder: 'Search docs',
                translations: {
                    button: {
                        buttonText: 'Search docs',
                        buttonAriaLabel: 'Search docs'
                    },
                    modal: {
                        searchBox: {
                            resetButtonTitle: 'Clear query',
                            resetButtonAriaLabel: 'Clear query',
                            cancelButtonText: 'Cancel',
                            cancelButtonAriaLabel: 'Cancel'
                        },
                        startScreen: {
                            recentSearchesTitle: 'Recent',
                            noRecentSearchesText: 'No recent searches',
                            saveRecentSearchButtonTitle: 'Save this search',
                            removeRecentSearchButtonTitle: 'Remove this search from history',
                            favoriteSearchesTitle: 'Favorites',
                            removeFavoriteSearchButtonTitle: 'Remove this search from favorites'
                        },
                        errorScreen: {
                            titleText: 'Unable to fetch results',
                            helpText: 'You may want to check your network connection'
                        },
                        footer: {
                            selectText: 'to select',
                            navigateText: 'to navigate',
                            closeText: 'to close',
                            searchByText: 'Search by'
                        },
                        noResultsScreen: {
                            noResultsText: 'No results found',
                            suggestedQueryText: 'Try searching for',
                            reportMissingResultsText: 'Believe this query should return results?',
                            reportMissingResultsLinkText: 'Let us know'
                        }
                    }
                }
            },

            lastUpdatedText: 'Last updated',

            docFooter: {
                prev: 'Previous',
                next: 'Next'
            }
        },
        markdown: {
            lineNumbers: true,
            attrs: { disable: true }
        },
        router: {
            prefetchLinks: false
        },
        vite: {
            build: {
                target: 'esnext',
                chunkSizeWarningLimit: 1000,
                rollupOptions: {
                    output: {
                        manualChunks(id: string) {
                            if (id.includes('node_modules')) {
                                return 'vendor';
                            }
                        }
                    }
                }
            }
        }
    });

function nav() {
    return [
        {
            text: 'Docs',
            activeMatch: '/guide|example/',
            items: [
                {
                    text: 'Guide',
                    link: '/guide/',
                    activeMatch: '/guide/'
                },
                {
                    text: 'Examples',
                    link: '/example/base/AddRemove',
                    target: '',
                    activeMatch: '/example/'
                }
            ]
        },
        {
            text: 'API',
            activeMatch: '/api|physics|physics-rapier|media-extention|stats|particle|graphic/',
            items: [
                {
                    text: 'Orillusion',
                    items: [
                        { text: 'Core', link: '/api/', activeMatch: '/api/' },
                        { text: 'Physics', link: '/physics/', activeMatch: '/physics/' },
                        { text: 'Physics Rapier', link: '/physics-rapier/', activeMatch: '/physics-rapier/' },
                        { text: 'Media Extention', link: '/media-extention/', activeMatch: '/media-extention/' },
                        { text: 'Stats', link: '/stats/', activeMatch: '/stats/' },
                        { text: 'Particle', link: '/particle/', activeMatch: '/particle/' },
                        { text: 'Graphic', link: '/graphic/', activeMatch: '/graphic/' },
                        { text: 'Geometry', link: '/geometry/', activeMatch: '/geometry/' }
                    ]
                },
                {
                    text: 'WebGPU',
                    items: [
                        {
                            text: 'Specification',
                            link: 'https://www.orillusion.com/zh/webgpu.html'
                        },
                        {
                            text: 'Shader Language',
                            link: 'https://www.orillusion.com/zh/wgsl.html'
                        },
                        {
                            text: 'Explainer',
                            link: 'https://www.orillusion.com/zh/explainer.html'
                        }
                    ]
                }
            ]
        },
        // {
        //   text: '3DHub',
        //   link: 'https://3dhub.orillusion.com'
        // },
        {
            text: 'Forum',
            link: 'https://forum.orillusion.com'
        },
        {
            text: 'v0.9',
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
    ];
}

function sidebarGuide(): SidebarItem {
    return [
        {
            text: 'Getting Started',
            collapsible: true,
            items: [
                { text: 'Engine Features', link: '/guide/index.md' },
                { text: 'Installation', link: '/guide/getting_start/install.md' },
                {
                    text: 'Initializing the Engine',
                    link: '/guide/getting_start/initialization.md'
                },
                {
                    text: 'Drawing a Cube',
                    link: '/guide/getting_start/draw_cube.md'
                },
                {
                    text: 'Loading a 3D Model',
                    link: '/guide/getting_start/load_model.md'
                },
                {
                    text: 'Your First Script Component',
                    link: '/guide/getting_start/script.md'
                }
            ]
        },
        {
            text: 'Core',
            collapsible: true,
            items: [
                { text: 'Entities & Components', link: '/guide/core/component.md' },
                { text: 'Object3D', link: '/guide/core/object.md' },
                { text: 'Scene3D', link: '/guide/core/scene.md' },
                { text: 'Transform', link: '/guide/core/transform.md' },
                { text: 'Script Component', link: '/guide/core/script.md' },
                { text: 'Engine3D', link: '/guide/core/engine.md' },
                { text: 'Configuration', link: '/guide/core/config.md' }
            ]
        },
        {
            text: 'Graphics',
            collapsible: true,
            items: [
                { text: 'Camera', link: '/guide/graphics/camera.md' },
                { text: 'Lighting', link: '/guide/graphics/lighting.md' },
                { text: 'Shadows', link: '/guide/graphics/shadow.md' },
                { text: 'Mesh', link: '/guide/graphics/mesh.md' },
                { text: 'Materials', link: '/guide/graphics/materials.md' },
                { text: 'Textures', link: '/guide/graphics/texture.md' },
                { text: 'Render Layer', link: '/guide/graphics/render_layer.md' },
                { text: 'Graphics Drawing', link: '/guide/graphics/graphics.md' }
            ]
        },
        {
            text: 'Animation',
            collapsible: true,
            items: [
                { text: 'Skeletal Animation', link: '/guide/animation/skeleton.md' },
                { text: 'Property Animation', link: '/guide/animation/property.md' },
                { text: 'Morph Animation', link: '/guide/animation/morph.md' }
            ]
        },
        {
            text: 'Particles',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/guide/particle/Readme.md' },
                { text: 'Emitter', link: '/guide/particle/emitter.md' },
                // { text: 'Renderer', link: '/guide/particle/renderer.md' },
                { text: 'Base Modules', link: '/guide/particle/baseModule.md' }
            ]
        },
        {
            text: 'Physics',
            collapsible: true,
            items: [
                { text: 'Physics Overview', link: '/guide/physics/Readme.md' },
                { text: 'Collision Shapes', link: '/guide/physics/collisionShape.md' },
                { text: 'Rigidbody', link: '/guide/physics/rigidbody.md' },
                { text: 'Soft Body', link: '/guide/physics/softbody.md' },
                { text: 'Constraints', link: '/guide/physics/constraint.md' },
            ]
        },
        {
            text: 'Physics (Rapier)',
            collapsible: true,
            items: [
                { text: 'Physics Overview', link: '/guide/physics-rapier/Readme.md' },
                { text: 'Rigidbody & Collision Shapes', link: '/guide/physics-rapier/rigidbody.md' },
                { text: 'Joints', link: '/guide/physics-rapier/joint.md' },
                { text: 'Triggers & Events', link: '/guide/physics-rapier/events.md' },
                { text: 'Physics Queries', link: '/guide/physics-rapier/query.md' },
                { text: 'Characters & Vehicles', link: '/guide/physics-rapier/character_vehicle.md' }
            ]
        },
        {
            text: 'Interaction',
            collapsible: true,
            items: [
                { text: 'Pointer', link: '/guide/interaction/pointer.md' },
                { text: 'Keyboard', link: '/guide/interaction/keyboard.md' },
                { text: 'Pick Events', link: '/guide/interaction/pickfire.md' },
                { text: 'Custom Events', link: '/guide/interaction/event.md' }
            ]
        },
        {
            text: 'Media Extension',
            collapsible: true,
            items: [
                { text: 'Installation', link: '/guide/media/Readme.md' },
                { text: 'Image', link: '/guide/media/image.md' },
                { text: 'Video', link: '/guide/media/video.md' },
                { text: 'Video (Chroma Key)', link: '/guide/media/chromakey.md' },
                { text: 'Audio', link: '/guide/media/audio.md' }
            ]
        },
        {
            text: 'Resources',
            collapsible: true,
            items: [
                { text: 'Resource Loading', link: '/guide/resource/Readme.md' },
                { text: 'GLTF', link: '/guide/resource/gltf.md' }
            ]
        },
        {
            text: 'Sprite',
            collapsible: true,
            items: [
                { text: 'Introduction & Basics', link: '/guide/sprite/Readme.md' },
                { text: 'Billboard & Fixed Distance', link: '/guide/sprite/billboard.md' },
                { text: 'Atlas & Batch Rendering', link: '/guide/sprite/atlas.md' }
            ]
        },
        {
            text: 'Performance & Debugging',
            collapsible: true,
            items: [{ text: 'Stats Panel', link: '/guide/performance/Readme.md' }]
        },
        {
            text: 'Utilities',
            collapsible: true,
            items: [{ text: 'Math', link: '/guide/tools/math.md' }]
        },
        {
            text: 'Advanced Features',
            collapsible: true,
            items: [
                {
                    text: 'WebGPU Shader',
                    link: '/guide/advanced/shader/shader_intro.md',
                    items: [
                        {
                            text: 'RenderShader',
                            link: '/guide/advanced/shader/shader_material.md'
                        },
                        {
                            text: 'Code Includes',
                            link: '/guide/advanced/shader/shader_include.md'
                        },
                        {
                            text: 'Shader Macros',
                            link: '/guide/advanced/shader/shader_define.md'
                        },
                        {
                            text: 'Shader Variants',
                            link: '/guide/advanced/shader/shader_variants.md'
                        },
                        {
                            text: 'Shader Built-in Variables',
                            link: '/guide/advanced/shader/shader_internal.md'
                        },
                        {
                            text: 'Custom Material Example',
                            link: '/guide/advanced/shader/shader_unlit.md'
                        },
                        {
                            text: 'ComputeShader',
                            link: '/guide/advanced/shader/shader_compute.md'
                        }
                    ]
                },
                {
                    text: 'RenderGraph',
                    link: '/guide/advanced/rendergraph.md'
                },
                {
                    text: 'Large World Rendering (RTE)',
                    link: '/guide/advanced/rte.md'
                },
                {
                    text: 'Post-processing Effects',
                    link: '/guide/advanced/posteffect.md',
                    items: [
                        {
                            text: 'DepthOfFieldPost',
                            link: '/guide/advanced/post_depthOfField.md'
                        },
                        {
                            text: 'SSRPost',
                            link: '/guide/advanced/post_ssr.md'
                        },
                        {
                            text: 'OutlinePost',
                            link: '/guide/advanced/post_outline.md'
                        },
                        {
                            text: 'GlobalFog',
                            link: '/guide/advanced/post_globalfog.md'
                        },
                        {
                            text: 'BloomPost',
                            link: '/guide/advanced/post_bloom.md'
                        },
                        {
                            text: 'GTAOPost',
                            link: '/guide/advanced/post_gtao.md'
                        },
                        { text: 'TAAPost', link: '/guide/advanced/post_taa.md' },
                        { text: 'GodRayPost', link: '/guide/advanced/post_godRay.md' },
                        { text: 'Custom Post-processing', link: '/guide/advanced/post_custom.md' }
                    ]
                },
                { text: 'Global Illumination', link: '/guide/advanced/gi.md' }
            ]
        }
    ];
}

function sidebar(root: string = '', packages: string) {
    const index: { [key: string]: { text: string; link: string }[] } = {};
    const mds = readFileSync(`${__dirname}/../${packages}/index.md`, 'utf-8').match(/.*.(\n|\r)/g) as string[];
    let lastTitle = '';
    for (let line of mds) {
        if (line.match(/# @/)) continue;
        else if (line.match(/##\s\w+/)) {
            lastTitle = line.slice(3, -1).trim();
            index[lastTitle] = [];
        } else {
            let text = line.match(/\w+/);
            let md = line.match(/\(([^)]+)\)/);
            if (md && text) {
                index[lastTitle].push({
                    text: text[0],
                    link: `${root}/${packages}/${md[1]}`
                });
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
                    text: '@orillusion/physics-rapier',
                    link: '/physics-rapier/'
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
                },
                {
                    text: '@orillusion/graphic',
                    link: '/graphic/'
                },
                {
                    text: '@orillusion/geometry',
                    link: '/geometry/'
                }
            ]
        }
    ];
    for (let i in index) {
        sidebar.push({
            text: i,
            collapsible: true,
            collapsed: false,
            items: index[i]
        });
    }
    return sidebar;
}
function sidebarExample(root: string = '') {
    const index: { [key: string]: string[] } = {
        Base: [],
        Animation: [],
        Graphic: [],
        Geometry: [],
        Material: [],
        Benchmark: [],
        Lights: [],
        Loader: [],
        Particle: [],
        Compute: [],
        Physics: [],
        PhysicsRapier: [],
        Sprite: [],
        GI: []
    };

    const examples: SidebarItem = [];
    for (let i in index) {
        const dir = i.toLowerCase();
        const mds = readdirSync(__dirname + '/../example/' + dir, 'utf-8').filter((v) => /\.md$/.test(v));
        examples.push({
            text: i,
            collapsible: true,
            collapsed: false,
            items: mds.map((v: string) => {
                return {
                    text: v.slice(0, -3),
                    link: `${root}/example/${dir}/${v}`
                };
            })
        });
    }
    return examples;
}
