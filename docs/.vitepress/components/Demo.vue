<template>
    <div class="demo" :class="{
        full: full,
        code: code
    }" :style="{height: height + 'px'}">
        <iframe ref="iframe" :src="href" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        <Logo v-show="loading" class="loading-wrap"></Logo>
        <a class="toggle" @click="full = !full">{{ full ? '<': '>'}}</a>
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
        this.$refs.iframe.contentWindow.addEventListener('message', (e)=>{
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
        href(){
            return withBase('/demos/index.html')+ '?' + withBase(this.src)
        }
    }
}
</script>

<style scoped>
.demo{
    position: relative;
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
    width: 100%;
}
.demo.code > iframe {
    width: 50%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
@media (max-width: 719px) {
    .demo > iframe{
        border-radius: 8px;
    }
    .demo.code{
        position: relative;
        width: auto;
        margin-bottom: 0.85rem;
    }
    .demo.code > iframe {
        width: 100%;
    }
    .demo.code > :deep(.loading-wrap){
        right: 0 !important;
    }
}
.demo.code + :deep(div[class*=language-]) {
    width: 50%;
    height: 300px;
    overflow: auto;
    border-radius: 0;
}
.demo.code + :deep(div[class*=language-]) > .line-numbers-wrapper{
    bottom: auto;
}
.demo.code + :deep(div[class*=language-]) > .highlight-lines {
    bottom: auto;
}
.demo.code + :deep(div[class*=language-]) > span.lang{
    position: sticky;
    float: right;
    left: calc(100% - 25px);
    right: auto;
}
.demo.code + :deep(div[class*=language-]) > button.copy{
    position: sticky;
    float: right;
    left: calc(100% - 40px);
    right: auto;
}
.demo.code + :deep(div[class*=language-]) > pre {
    overflow-x: unset;
}
a.toggle {
    display: none;
}
@media (min-width: 720px) {
    .demo.code + :deep(div[class*=language-]) {
        margin-left: 50%;
        border-top-left-radius: 0px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 0px;
    }
    .demo.code.full > iframe{
        width: 100%;
    }
    .demo.code.full + :deep(div[class*=language-]) {
        visibility: hidden;
    }
    .demo.code > a.toggle{
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        bottom: 10px;
        right: calc(50% + 8px);
        font-size: 20px;
        text-align: center;
        opacity: 0;
        position: absolute;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.3s, background-color 0.1s;
        background-color: rgba(0,0,0,.3);
        color: #eee;
    }

    .demo.code:hover > a.toggle{
        opacity: 0.8;
    }
    .demo.code:hover > a.toggle:hover{
        opacity: 1;
        background-color: rgba(0,0,0,.5);
    }
    .demo.code.full > a.toggle{
        right: 8px;
    }
}
@media (max-width: 719px) {
    .demo.code + :deep(div[class*=language-]) {
        width: auto;
        top: auto;
        left: auto;
        border-radius: 8px;
    }
}

.loading-wrap{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    background: transparent;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100% !important;
}
.loading-wrap :deep(svg){
    width: 100px;
    margin: 0 auto;
}
.demo.code > .loading-wrap{
    right: 50%;
}
</style>