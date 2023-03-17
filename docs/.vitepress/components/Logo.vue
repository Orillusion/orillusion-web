<template>
    <div class="image-bg"></div>
</template>
<script>
    import logo from './logo.svg?raw'
    import { withBase } from 'vitepress'
    
    export default {
        props: {
            homeHero: {
                type: Boolean,
                default: false,
                required: false
            },
            animation: {
                type: Boolean,
                default: true,
                required: false
            }
        },
        async mounted(){
            let target = this.target = this.homeHero ? document.querySelector('.VPHomeHero .image-bg') : this.$el
            if(this.homeHero){
                target.nextElementSibling?.remove()
                target.nextElementSibling?.remove()
            }
            target.innerHTML = localStorage.logo || logo
            if(this.animation)
                this.$nextTick(this.loadSvg)
        },
        methods:{
            loadSvg(){
                if(!this.target.innerHTML.match(/transform-origin/)){
                    let paths = this.target.querySelectorAll('svg path')
                    let center = 132.84 / 2
                    for(let i = 0; i < paths.length; i++){
                        let p = paths[i]
                        let box = p.getBBox()
                        if(box.width === 0){
                            setTimeout(this.loadSvg, 10)
                            return
                        }
                        let x = box.x + box.width / 2
                        let y = box.y + box.height / 2
                        let offset = Math.sqrt(Math.pow(x-center, 2) + Math.pow(y-center, 2))
                        p.setAttribute('transform-origin', x + ' ' + y)
                        p.setAttribute('style', `animation-delay: ${offset * 0.02}s`)
                    }
                    if(!localStorage.logo)
                        localStorage.logo = this.target.innerHTML
                }
                this.intersectionObserver = new IntersectionObserver(function (entries) {
                    if (entries[0].isIntersecting) {
                        entries[0].target.classList.add('active')
                    }else{
                        entries[0].target.classList.remove('active')
                    }
                })
                this.intersectionObserver.observe(this.target)
            }
        },
        beforeUnmount(){
            this.intersectionObserver?.disconnect()
        }
    }
</script>

<style scoped>
    .image-bg:not(:empty){
        height: 250px;
        text-align: center;
        margin-bottom: 2em;
    }
    .image-bg > :deep(svg){
        height: 100%;
        margin: auto;
    }
</style>

<style>
.image-bg.active path {
    animation: wave 3s ease-in-out infinite;
}
html.dark .image-bg g{
    fill: #adbac7
}
@keyframes wave {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    10% {
        transform: scale(0.3);
        opacity: 0;
    }
    30% {
        transform: scale(1.2);
        opacity: 1;
    }
    40% {
        transform: scale(0.75);
        opacity: 0.75;
    }
    45% {
        transform: scale(1.1);
        opacity: 1;
    }
    47% {
        transform: scale(0.9);
        opacity: 0.85;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>