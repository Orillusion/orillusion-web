---
title: v-bind Merge Behavior
badges:
  - breaking
---

# {{ $frontmatter.title }} <MigrationBadges :badges="$frontmatter.badges" />

## Overview

- **BREAKING**: Order of bindings for v-bind will affect the rendering result.

## Introduction

When dynamically binding attributes on an element, a common scenario involves using both the `v-bind="object"` syntax as well as individual attributes in the same element. However, this raises questions as far as the priority of merging.

## 2.x Syntax

In 2.x, if an element has both `v-bind="object"` and an identical individual attribute defined, the individual attribute would always overwrite bindings in the `object`.

```html
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="red"></div>
```

## 3.x Syntax

In 3x, if an element has both `v-bind="object"` and an identical individual attribute defined, the order of how the bindings are declared determines how they are merged. In other words, rather than assuming developers want the individual attribute to always override what is defined in the `object`, developers now have more control over the desired merging behavior.

```html
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="blue"></div>

<!-- template -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- result -->
<div id="red"></div>
```

## Migration Strategy

If you are relying on this override functionality for `v-bind`, we currently recommend ensuring that your `v-bind` attribute is defined before individual attributes.

[Migration build flag: `COMPILER_V_BIND_OBJECT_ORDER`](migration-build.html#compat-configuration)
