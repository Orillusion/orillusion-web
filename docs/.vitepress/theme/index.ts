// @ts-nocheck
import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import Logo from '../components/Logo.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Demo', Demo)
        app.component('Logo', Logo)

        // ga
        globalThis.dataLayer = globalThis.dataLayer || []
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', 'G-0H9189CS0W')

        // inject esbuild for dev
        if (globalThis.location && !globalThis.location.hostname.match(/orillusion/) && !globalThis.esbuild && !globalThis._esbuild) {
            globalThis._esbuild = true
            import('https://cdn.orillusion.com/esbuild.js').then(async (esbuild) => {
                await esbuild.initialize({
                    wasmURL: 'https://cdn.orillusion.com/esbuild.wasm'
                })
                globalThis.esbuild = esbuild
            })
            return
        }

        if (globalThis.document)
            router.onAfterRouteChanged = () => {
                if (!globalThis._translation)
                    setTimeout(() => {
                        globalThis.document.querySelector('.VPNav')?.addEventListener('click', (e) => {
                            if (e.target.href && e.target.href.startsWith('https://www.orillusion.com/en/')) {
                                e.preventDefault()
                                globalThis.localStorage._lang = 'en'
                                globalThis.location.href = e.target.href
                            }
                        })
                        globalThis._translation = true
                    })
            }

        // redirect to /en
        if (globalThis.localStorage && globalThis.localStorage?._lang !== 'zh' && !/googlebot/i.test(globalThis.navigator.userAgent) && !/zh/i.test(globalThis.navigator.language)) {
            globalThis.localStorage._lang = 'en'
            globalThis.location.href = siteData.value.locales.en.link.slice(0, -1) + globalThis.location.pathname
        }
    }
}
