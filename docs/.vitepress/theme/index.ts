// @ts-nocheck
import DefaultTheme from 'vitepress/theme';
import Demo from '../components/Demo.vue';
import Logo from '../components/Logo.vue';
import './custom.css';

export default {
    ...DefaultTheme,
    enhanceApp({ app, router }) {
        app.component('Demo', Demo);
        app.component('Logo', Logo);

        // ga
        globalThis.dataLayer = globalThis.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-0H9189CS0W');

        // inject esbuild for dev
        if (globalThis.location && globalThis.location.hostname.match(/localhost/) && !globalThis.esbuild && !globalThis._esbuild) {
            globalThis._esbuild = true;
            import('https://cdn.orillusion.com/esbuild.js').then(async (esbuild) => {
                await esbuild.initialize({
                    wasmURL: 'https://cdn.orillusion.com/esbuild.wasm'
                });
                globalThis.esbuild = esbuild;
            });
            return;
        }

        if (globalThis.document){
            router.onBeforeRouteChange = () => {
                document.body.classList.add('loading')
            }
            router.onAfterRouteChanged = () => {
                document.body.classList.add('done')
                setTimeout(()=>document.body.classList.remove('loading', 'done'), 100)
                if (!globalThis._translation)
                    setTimeout(() => {
                        const host = 'https://www.orillusion.com';
                        globalThis.document.querySelector('.VPNav')?.addEventListener('click', (e) => {
                            if (e.target.href && e.target.href.startsWith(host)) {
                                e.preventDefault();
                                globalThis.localStorage._lang = 'zh';
                                globalThis.location.href = e.target.href.replace(host, location.origin);
                            }
                        });
                        globalThis._translation = true;
                    });
            };
        }
    }
};
