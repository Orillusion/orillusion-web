import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import Logo from '../components/Logo.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({app}){
        app.component('Demo', Demo)
        app.component('Logo', Logo)

        // ga
        globalThis.dataLayer = globalThis.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0H9189CS0W');
    }
}