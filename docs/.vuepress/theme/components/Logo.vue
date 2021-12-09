<template>
    <div ref="svg" class="svg">
    </div>
</template>
<script lang="ts">
    export default {
        data(){
            return {
                svg: ''
            }
        },
        async mounted(){
            let res = await fetch('/images/logo.svg')
            let svg = await res.text()
            this.$refs.svg.innerHTML = svg
            this.$nextTick(this.loadSvg)
        },
        methods:{
            loadSvg(){
                let paths = document.querySelectorAll('svg path')
                let center = 132.84 / 2
                for(let i = 0; i < paths.length; i++){
                    let p = paths[i] as SVGGraphicsElement
                    let box = p.getBBox()
                    let x = box.x + box.width / 2
                    let y = box.y + box.height / 2
                    let offset = Math.sqrt(Math.pow(x-center, 2) + Math.pow(y-center, 2))
                    p.setAttribute('transform-origin', x + ' ' + y)
                    p.setAttribute('style', `animation-delay: ${offset * 0.02}s`)
                }
                this.$refs.svg.classList.add('active')
            }
        }
    }
</script>

<style scoped>
.svg {
    width: 100%;
    height: 280px;
    display: block;
    margin: 3rem auto 1.5rem;
}
.svg :deep(svg) {
    width: 100%;
    height: 100%;
    max-height: 280px;
    transform-origin: center;
    opacity: 0;
}
.svg.active :deep(svg){
    opacity: 1;
}
.svg.active :deep(path) {
    animation: wave 3s ease-in-out infinite;
}
html.dark .svg :deep(g){
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