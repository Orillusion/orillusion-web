// @ts-nocheck
import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import Logo from '../components/Logo.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
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
        if(globalThis.location && !globalThis.location.hostname.match(/orillusion/) && !globalThis.esbuild && !globalThis._esbuild){
            globalThis._esbuild = true
            import('https://cdn.orillusion.com/esbuild.js').then(async esbuild=>{
                await esbuild.initialize({
                    wasmURL: 'https://cdn.orillusion.com/esbuild.wasm'
                })
                globalThis.esbuild = esbuild
            })
        }

        // jump to /en on first visit 
        if( !globalThis.localStorage._first && !/zh/i.test(globalThis.navigator.language) ){
            globalThis.localStorage._first = true
            globalThis.location.href = '/en' + globalThis.location.pathname
        }
    }
}
