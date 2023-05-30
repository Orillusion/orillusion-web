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
                WebGPU is not supported in your browser<br>
                Please upgrade to latest <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>/<a href="https://www.microsoftedgeinsider.com/download/" target="_blank">Edge</a>
            </p>
        <a class="toggle" title="Check Code" v-if="code" @click="full = !full">{{ full ? '>': '<'}}</a>
        <a class="toggle" title="Open in Codepen" v-if="code" @click="codepen" style="margin-bottom: 50px;">
            <svg viewBox="0 0 100 100" width="20" height="20"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>
            <form ref="form" action="https://codepen.io/pen/define" method="POST" target="_blank">
                <input type="hidden" name="data" />
            </form>
        </a>
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
            if(!globalThis.navigator?.gpu?.requestAdapter)
                return false
            else{
                let version = globalThis.navigator?.userAgent?.match(/chrome\/(\d+)/i)
                if(version && version[1] >= 113)
                    return true
                else
                    return false
            }
        },
        href(){
            return withBase('/demo.html')+ '?' + withBase(this.src)
        }
    },
    methods: {
        codepen(){
            const codeString = this.$refs.iframe?.contentWindow.codepen()
            this.$refs.form.querySelector('input').setAttribute('value', codeString)
            this.$refs.form.submit()
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
.demo.code > a.toggle:hover{
    color: var(--vp-c-brand-dark)
}
.demo.code > a.toggle > svg{
    margin: auto;
    height: 37px;
    fill: #eee;
}
.demo.code > a.toggle:hover > svg{
    fill: var(--vp-c-brand-dark)
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