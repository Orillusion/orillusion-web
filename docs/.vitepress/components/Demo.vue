<template>
    <div class="demo" :class="{
        full: full,
        code: code,
        ban: !support 
    }" :style="{height: height + 'px'}">
            <iframe v-if="support" ref="iframe" :src="href" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
            <Logo v-show="support && loading" class="loading-wrap"></Logo>
            <p v-if="!support">
                <img src="/images/logo_white.png" width="100" style="margin:0 auto 15px auto" /><br>
                Orillusion powered by WebGPU on Chrome/Edge 113+<br>
                Please upgrade to latest <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>/<a href="https://www.microsoftedgeinsider.com/download/" target="_blank">Edge</a>
            </p>
        <a class="toggle" v-if="code" @click="full = !full">{{ full ? '>': '<'}}</a>
    </div>
</template>

<script>
import { withBase } from 'vitepress'
import Logo from './Logo.vue'

export default {
    data(){
        return {
            full: false,
            loading: true
        }
    },
    components: {
        Logo
    },
    props: {
        src: {
            type: String,
            default: null,
            required: true,
        },
        height: {
            type: Number,
            default: 500,
            required: false
        },
        code: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    async mounted() {
        if(this.code){
            let uid = 'demo-'+ Math.random().toString(36).substr(2,10)
            this.$el.setAttribute(uid, 'true')
            let style = document.createElement('style')
            style.innerHTML = `.demo.code[${uid}] + div[class*=language-] {height: ${this.height}px}`
            this.$el.appendChild(style)
        }
        this.$refs.iframe?.contentWindow.addEventListener('message', (e)=>{
            if(e.data === 'rendering'){
                this.loading = false
            }
        })
        if(!location.hostname.match(/orillusion/) && !window.esbuild && !window._esbuild){
            window._esbuild = true
            const esbuild = await import('https://cdn.orillusion.com/esbuild.js')
            await esbuild.initialize({
                wasmURL: 'https://cdn.orillusion.com/esbuild.wasm'
            })
            window.esbuild = esbuild
        }
    },
    watch:{
        code(v){
            if(v)
                this.$el.nextSibling.setAttribute('style', `height:${this.height}px`)
            else
                this.$el.nextSibling.removeAttribute('style')
        }
    },
    computed: {
        support(){
            try{
                if(navigator.userAgent.match(/iphone|ipad|android/i))
                    throw new Error()
                let version = navigator.userAgent.match(/chrome\/\d+/i)
                if(version[0].split('/')[1] < 113)
                    throw new Error()
                return true
            }catch(e){
                return false
            }
        },
        href(){
            return withBase('/demo.html')+ '?' + withBase(this.src)
        }
    }
}
</script>

<style scoped>
.demo{
    position: relative;
    background: var(--vp-c-bg);
}
.demo.ban{
   display: flex;
   flex-direction: column;
   justify-content: center;
}
.demo.ban > p{
    margin: 0;
    text-align: center; 
    padding: 0 10px
}
.demo > iframe{
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 8px;
    background: none;
    color-scheme: light;
}
.demo.code{
    line-height: 0;
    position: absolute;
    left:0;right:0;
    z-index: 11;
}
@media screen and (max-width: 639px) {
    .demo.code{
        margin-left: -24px;
        margin-right: -24px;
    }
}
.demo.code.full {
    background: none;
    z-index: 1;
}
.demo.code.full > iframe{
    visibility: hidden;
}
.demo.code.full > p{
    visibility: hidden;
}

.demo.code + :deep(div[class*=language-]) {
    height: 300px;
    overflow: auto;
}
/* .demo.code + :deep(div[class*=language-]) > .line-numbers-wrapper{
    bottom: auto;
}
.demo.code + :deep(div[class*=language-]) > .highlight-lines {
    bottom: auto;
} */
.demo.code + :deep(div[class*=language-]) > span.lang{
    position: sticky;
    float: right;
    margin-right: -30px;
}
.demo.code + :deep(div[class*=language-]) > button.copy{
    position: sticky;
    float: right;
}
/* .demo.code + :deep(div[class*=language-]) > pre {
    overflow-x: unset;
} */
.demo.code > a.toggle{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 37px;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
    text-align: center;
    opacity: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid var(--vp-code-copy-code-border-color);
    background-color: var(--vp-code-copy-code-bg);
    border-radius: 4px;
    color: #eee;
    text-decoration: none;
    z-index: 111111;
}
.demo.code:hover > a.toggle{
    opacity: 1;
}
.demo.code.full > a.toggle{
    opacity: 1;
}
.demo.code:hover > a.toggle:hover{
    border-color: var(--vp-code-copy-code-hover-border-color);
    background-color: var(--vp-code-copy-code-hover-bg);
}
.loading-wrap{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    z-index: 0;
    background: transparent;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100% !important;
}
/* .demo:not(.code) > .loading-wrap{
    z-index: 0;
} */
.loading-wrap :deep(svg){
    width: 100px;
    margin: 0 auto;
}
a[href]{
    color: var(--vp-c-brand)
}
</style>