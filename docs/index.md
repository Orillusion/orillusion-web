---
layout: home
title: Orillusion
titleTemplate: Next Generation WebGPU Engine

hero:
  name: Orillusion
  image:
    light: /images/logo_black.png
    dark: /images/logo_white.png
  text: Next Generation WebGPU Engine
  tagline: Simple but powerful for Web3D developers
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/Orillusion/orillusion

features:
  - title: Approachable
    details: A refreshingly simple data-driven 3D engine built in JavaScript. Free and Open Source Forever!
  - title: Versatile
    details: An incrementally extensible ECS framework that scales between a library and a full-featured product.
  - title: Performant
    details: 
      Pure Web Cross-Platform Runtime.<br>
      Blazing Fast WebGPU Renderer.<br>
      Minimal Optimization Efforts.

---

<div class="heroDemos">
  <div class="container">
    <Demo src="/examples/pbr.ts" :code="false" :codepen="false" :height="450"></Demo>
    <Demo src="/examples/pbr2.ts" :code="false" :codepen="false" :height="450"></Demo>
  </div>
</div>
<Logo :homeHero="true"></Logo>
