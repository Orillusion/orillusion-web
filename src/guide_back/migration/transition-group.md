---
title: Transition Group Root Element
badges:
  - breaking
---

# {{ $frontmatter.title }} <MigrationBadges :badges="$frontmatter.badges" />

## Overview

`<transition-group>` no longer renders a root element by default, but can still create one with the `tag` attribute.

## 2.x Syntax

In Vue 2, `<transition-group>`, like other custom components, needed a root element, which by default was a `<span>` but was customizable via the `tag` attribute.

```html
<transition-group tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</transition-group>
```

## 3.x Syntax

In Vue 3, we have [fragment support](/guide/migration/fragments.html), so components no longer _need_ a root node. Consequently, `<transition-group>` no longer renders one by default.

- If you already have the `tag` attribute defined in your Vue 2 code, like in the example above, everything will work as before
- If you didn't have one defined _and_ your styling or other behaviors relied on the presence of the `<span>` root element to work properly, simply add `tag="span"` to the `<transition-group>`:

```html
<transition-group tag="span">
  <!-- -->
</transition-group>
```

## Migration Strategy

[Migration build flag: `TRANSITION_GROUP_ROOT`](migration-build.html#compat-configuration)

## See also

- [Some transition classes got a rename](/guide/migration/transition.html)
- [`<Transition>` as a root can no longer be toggled from the outside](/guide/migration/transition-as-root.html)
