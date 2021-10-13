---
badges:
  - breaking
---

# Render Function API <MigrationBadges :badges="$frontmatter.badges" />

## Overview

This change will not affect `<template>` users.

Here is a quick summary of what has changed:

- `h` is now globally imported instead of passed to render functions as an argument
- render function arguments changed to be more consistent between stateful and functional components
- VNodes now have a flat props structure

For more information, read on!

## Render Function Argument

### 2.x Syntax

In 2.x, the `render` function would automatically receive the `h` function (which is a conventional alias for `createElement`) as an argument:

```js
// Vue 2 Render Function Example
export default {
  render(h) {
    return h('div')
  }
}
```

### 3.x Syntax

In 3.x, `h` is now globally imported instead of being automatically passed as an argument.

```js
// Vue 3 Render Function Example
import { h } from 'vue'

export default {
  render() {
    return h('div')
  }
}
```

## Render Function Signature Change

### 2.x Syntax

In 2.x, the `render` function automatically received arguments such as `h`.

```js
// Vue 2 Render Function Example
export default {
  render(h) {
    return h('div')
  }
}
```

### 3.x Syntax

In 3.x, since the `render` function no longer receives any arguments, it will primarily be used inside of the `setup()` function. This has the added benefit of gaining access to reactive state and functions declared in scope, as well as the arguments passed to `setup()`.

```js
import { h, reactive } from 'vue'

export default {
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }

    // return the render function
    return () =>
      h(
        'div',
        {
          onClick: increment
        },
        state.count
      )
  }
}
```

For more information on how `setup()` works, see our [Composition API Guide](/guide/composition-api-introduction.html).

## VNode Props Format

### 2.x Syntax

In 2.x, `domProps` contained a nested list within the VNode props:

```js
// 2.x
{
  staticClass: 'button',
  class: {'is-outlined': isOutlined },
  staticStyle: { color: '#34495E' },
  style: { backgroundColor: buttonColor },
  attrs: { id: 'submit' },
  domProps: { innerHTML: '' },
  on: { click: submitForm },
  key: 'submit-button'
}
```

### 3.x Syntax

In 3.x, the entire VNode props structure is flattened. Using the example from above, here is what it would look like now.

```js
// 3.x Syntax
{
  class: ['button', { 'is-outlined': isOutlined }],
  style: [{ color: '#34495E' }, { backgroundColor: buttonColor }],
  id: 'submit',
  innerHTML: '',
  onClick: submitForm,
  key: 'submit-button'
}
```

## Registered Component

### 2.x Syntax

In 2.x, when a component has been registered, the render function would work well when passing the component's name as a string to the first argument:

```js
// 2.x
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  }
  template: `
    <button @click="count++">
      Clicked {{ count }} times.
    </button>
  `
})

export default {
  render(h) {
    return h('button-counter')
  }
}
```

### 3.x Syntax

In 3.x, with VNodes being context-free, we can no longer use a string ID to implicitly lookup registered components. Instead, we need to use an imported `resolveComponent` method:

```js
// 3.x
import { h, resolveComponent } from 'vue'

export default {
  setup() {
    const ButtonCounter = resolveComponent('button-counter')
    return () => h(ButtonCounter)
  }
}
```

For more information, see [The Render Function Api Change RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md#context-free-vnodes).

## Migration Strategy

[Migration build flag: `RENDER_FUNCTION`](migration-build.html#compat-configuration)

### Library Authors

`h` being globally imported means that any library that contains Vue components will include `import { h } from 'vue'` somewhere. As a result, this creates a bit of overhead since it requires library authors to properly configure the externalization of Vue in their build setup:

- Vue should not be bundled into the library
- For module builds, the import should be left alone and be handled by the end user bundler
- For UMD / browser builds, it should try the global Vue.h first and fallback to require calls

## Next Steps

See [Render Function Guide](/guide/render-function) for more detailed documentation!
