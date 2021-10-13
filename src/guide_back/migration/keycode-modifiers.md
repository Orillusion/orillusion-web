---
badges:
  - breaking
---

# KeyCode Modifiers <MigrationBadges :badges="$frontmatter.badges" />

## Overview

Here is a quick summary of what has changed:

- **BREAKING**: Using numbers, i.e. keyCodes, as `v-on` modifiers is no longer supported
- **BREAKING**: `config.keyCodes` is no longer supported

## 2.x Syntax

In Vue 2, `keyCodes` were supported as a way to modify a `v-on` method.

```html
<!-- keyCode version -->
<input v-on:keyup.13="submit" />

<!-- alias version -->
<input v-on:keyup.enter="submit" />
```

In addition, you could define your own aliases via the global `config.keyCodes` option.

```js
Vue.config.keyCodes = {
  f1: 112
}
```

```html
<!-- keyCode version -->
<input v-on:keyup.112="showHelpText" />

<!-- custom alias version -->
<input v-on:keyup.f1="showHelpText" />
```

## 3.x Syntax

Since [`KeyboardEvent.keyCode` has been deprecated](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode), it no longer makes sense for Vue 3 to continue supporting this as well. As a result, it is now recommended to use the kebab-case name for any key you want to use as a modifier.

```html
<!-- Vue 3 Key Modifier on v-on -->
<input v-on:keyup.page-down="nextPage">

<!-- Matches both q and Q -->
<input v-on:keypress.q="quit">
```

As a result, this means that `config.keyCodes` is now also deprecated and will no longer be supported.

## Migration Strategy

For those using `keyCode` in their codebase, we recommend converting them to their kebab-cased named equivalents.

The keys for some punctuation marks can just be included literally. e.g. For the `,` key:

```html
<input v-on:keypress.,="commaPress">
```

Limitations of the syntax prevent certain characters from being matched, such as `"`, `'`, `/`, `=`, `>`, and `.`. For those characters you should check `event.key` inside the listener instead.

[Migration build flags:](migration-build.html#compat-configuration)

- `CONFIG_KEY_CODES`
- `V_ON_KEYCODE_MODIFIER`
