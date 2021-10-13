---
badges:
  - breaking
---

# Custom Elements Interop <MigrationBadges :badges="$frontmatter.badges" />

## Overview

- **BREAKING:** The checks to determine whether tags should be treated as custom elements are now performed during template compilation, and should be configured via compiler options instead of runtime config.
- **BREAKING:** Special `is` attribute usage is restricted to the reserved `<component>` tag only.
- **NEW:** To support 2.x use cases where `is` was used on native elements to work around native HTML parsing restrictions, prefix the value with `vue:` to resolve it as a Vue component.

## Autonomous Custom Elements

If we want to add a custom element defined outside of Vue (e.g. using the Web Components API), we need to 'instruct' Vue to treat it as a custom element. Let's use the following template as an example.

```html
<plastic-button></plastic-button>
```

### 2.x Syntax

In Vue 2.x, configuring tags as custom elements was done via `Vue.config.ignoredElements`:

```js
// This will make Vue ignore custom element defined outside of Vue
// (e.g., using the Web Components APIs)

Vue.config.ignoredElements = ['plastic-button']
```

### 3.x Syntax

**In Vue 3.0, this check is performed during template compilation.** To instruct the compiler to treat `<plastic-button>` as a custom element:

- If using a build step: pass the `isCustomElement` option to the Vue template compiler. If using `vue-loader`, this should be passed via `vue-loader`'s `compilerOptions` option:

  ```js
  // in webpack config
  rules: [
    {
      test: /\.vue$/,
      use: 'vue-loader',
      options: {
        compilerOptions: {
          isCustomElement: tag => tag === 'plastic-button'
        }
      }
    }
    // ...
  ]
  ```

- If using on-the-fly template compilation, pass it via `app.config.isCustomElement`:

  ```js
  const app = Vue.createApp({})
  app.config.isCustomElement = tag => tag === 'plastic-button'
  ```

  It's important to note the runtime config only affects runtime template compilation - it won't affect pre-compiled templates.

## Customized Built-in Elements

The Custom Elements specification provides a way to use custom elements as [Customized Built-in Element](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example) by adding the `is` attribute to a built-in element:

```html
<button is="plastic-button">Click Me!</button>
```

Vue's usage of the `is` special attribute was simulating what the native attribute does before it was made universally available in browsers. However, in 2.x it was interpreted as rendering a Vue component with the name `plastic-button`. This blocks the native usage of Customized Built-in Element mentioned above.

In 3.0, we are limiting Vue's special treatment of the `is` attribute to the `<component>` tag only.

- When used on the reserved `<component>` tag, it will behave exactly the same as in 2.x;
- When used on normal components, it will behave like a normal attribute:

  ```html
  <foo is="bar" />
  ```

  - 2.x behavior: renders the `bar` component.
  - 3.x behavior: renders the `foo` component and passing the `is` attribute.

- When used on plain elements, it will be passed to the `createElement` call as the `is` attribute, and also rendered as a native attribute. This supports the usage of customized built-in elements.

  ```html
  <button is="plastic-button">Click Me!</button>
  ```

  - 2.x behavior: renders the `plastic-button` component.
  - 3.x behavior: renders a native button by calling

    ```js
    document.createElement('button', { is: 'plastic-button' })
    ```

[Migration build flag: `COMPILER_IS_ON_ELEMENT`](migration-build.html#compat-configuration)

## `vue:` Prefix for In-DOM Template Parsing Workarounds

> Note: this section only affects cases where Vue templates are directly written in the page's HTML.
> When using in-DOM templates, the template is subject to native HTML parsing rules. Some HTML elements, such as `<ul>`, `<ol>`, `<table>` and `<select>` have restrictions on what elements can appear inside them, and some elements such as `<li>`, `<tr>`, and `<option>` can only appear inside certain other elements.

### 2.x Syntax

In Vue 2 we recommended working around with these restrictions by using the `is` attribute on a native tag:

```html
<table>
  <tr is="blog-post-row"></tr>
</table>
```

### 3.x Syntax

With the behavior change of `is`, a `vue:` prefix is now required to resolve the element as a Vue component:

```html
<table>
  <tr is="vue:blog-post-row"></tr>
</table>
```

## Migration Strategy

- Replace `config.ignoredElements` with either `vue-loader`'s `compilerOptions` (with the build step) or `app.config.isCustomElement` (with on-the-fly template compilation)

- Change all non-`<component>` tags with `is` usage to `<component is="...">` (for SFC templates) or prefix it with `vue:` (for in-DOM templates).
