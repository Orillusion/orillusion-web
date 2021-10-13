---
badges:
  - breaking
---

# Attribute Coercion Behavior <MigrationBadges :badges="$frontmatter.badges" />

::: info Info
This is a low-level internal API change and does not affect most developers.
:::

## Overview

Here is a high level summary of the changes:

- Drop the internal concept of enumerated attributes and treat those attributes the same as normal non-boolean attributes
- **BREAKING**: No longer removes attribute if the value is boolean `false`. Instead, it's set as attr="false". To remove the attribute, use `null` or `undefined`.

For more information, read on!

## 2.x Syntax

In 2.x, we had the following strategies for coercing `v-bind` values:

- For some attribute/element pairs, Vue is always using the corresponding IDL attribute (property): [like `value` of `<input>`, `<select>`, `<progress>`, etc](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L11-L18).

- For "[boolean attributes](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L33-L40)" and [xlinks](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L44-L46), Vue removes them if they are "falsy" ([`undefined`, `null` or `false`](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L52-L54)) and adds them otherwise (see [here](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L66-L77) and [here](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L81-L85)).

- For "[enumerated attributes](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L20)" (currently `contenteditable`, `draggable` and `spellcheck`), Vue tries to [coerce](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L24-L31) them to string (with special treatment for `contenteditable` for now, to fix [vuejs/vue#9397](https://github.com/vuejs/vue/issues/9397)).

- For other attributes, we remove "falsy" values (`undefined`, `null`, or `false`) and set other values as-is (see [here](https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L92-L113)).

The following table describes how Vue coerce "enumerated attributes" differently with normal non-boolean attributes:

| Binding expression  | `foo` <sup>normal</sup> | `draggable` <sup>enumerated</sup> |
| ------------------- | ----------------------- | --------------------------------- |
| `:attr="null"`      | -                       | `draggable="false"`               |
| `:attr="undefined"` | -                       | -                                 |
| `:attr="true"`      | `foo="true"`            | `draggable="true"`                |
| `:attr="false"`     | -                       | `draggable="false"`               |
| `:attr="0"`         | `foo="0"`               | `draggable="true"`                |
| `attr=""`           | `foo=""`                | `draggable="true"`                |
| `attr="foo"`        | `foo="foo"`             | `draggable="true"`                |
| `attr`              | `foo=""`                | `draggable="true"`                |

We can see from the table above, current implementation coerces `true` to `'true'` but removes the attribute if it's `false`. This also led to inconsistency and required users to manually coerce boolean values to string in very common use cases like `aria-*` attributes like `aria-selected`, `aria-hidden`, etc.

## 3.x Syntax

We intend to drop this internal concept of "enumerated attributes" and treat them as normal non-boolean HTML attributes.

- This solves the inconsistency between normal non-boolean attributes and “enumerated attributes”
- It also makes it possible to use values other than `'true'` and `'false'`, or even keywords yet to come, for attributes like `contenteditable`

For non-boolean attributes, Vue will stop removing them if they are `false` and coerce them to `'false'` instead.

- This solves the inconsistency between `true` and `false` and makes outputting `aria-*` attributes easier

The following table describes the new behavior:

| Binding expression  | `foo` <sup>normal</sup>    | `draggable` <sup>enumerated</sup> |
| ------------------- | -------------------------- | --------------------------------- |
| `:attr="null"`      | -                          | - <sup>*</sup>                    |
| `:attr="undefined"` | -                          | -                                 |
| `:attr="true"`      | `foo="true"`               | `draggable="true"`                |
| `:attr="false"`     | `foo="false"` <sup>*</sup> | `draggable="false"`               |
| `:attr="0"`         | `foo="0"`                  | `draggable="0"` <sup>*</sup>      |
| `attr=""`           | `foo=""`                   | `draggable=""` <sup>*</sup>       |
| `attr="foo"`        | `foo="foo"`                | `draggable="foo"` <sup>*</sup>    |
| `attr`              | `foo=""`                   | `draggable=""` <sup>*</sup>       |

<small>*: changed</small>

Coercion for boolean attributes is left untouched.

## Migration Strategy

### Enumerated attributes

The absence of an enumerated attribute and `attr="false"` may produce different IDL attribute values (which will reflect the actual state), described as follows:

| Absent enumerated attr | IDL attr & value                     |
| ---------------------- | ------------------------------------ |
| `contenteditable`      | `contentEditable` &rarr; `'inherit'` |
| `draggable`            | `draggable` &rarr; `false`           |
| `spellcheck`           | `spellcheck` &rarr; `true`           |

Since we no longer coerce `null` to `'false'` for “enumerated properties” in 3.x, in the case of `contenteditable` and `spellcheck`, developers will need to change those `v-bind` expressions that used to resolve to `null` to resolve to `false` or `'false'` in order to maintain the same behavior as 2.x.

In 2.x, invalid values were coerced to `'true'` for enumerated attributes. This was usually unintended and unlikely to be relied upon on a large scale. In 3.x `true` or `'true'` should be explicitly specified.

### Coercing `false` to `'false'` instead of removing the attribute

In 3.x, `null` or `undefined` should be used to explicitly remove an attribute.

### Comparison between 2.x & 3.x behavior

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th><code>v-bind</code> value <sup>2.x</sup></th>
      <th><code>v-bind</code> value <sup>3.x</sup></th>
      <th>HTML output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">2.x “Enumerated attrs”<br><small>i.e. <code>contenteditable</code>, <code>draggable</code> and <code>spellcheck</code>.</small></td>
      <td><code>undefined</code></td>
      <td><code>undefined</code>, <code>null</code></td>
      <td><i>removed</i></td>
    </tr>
    <tr>
      <td>
        <code>true</code>, <code>'true'</code>, <code>''</code>, <code>1</code>,
        <code>'foo'</code>
      </td>
      <td><code>true</code>, <code>'true'</code></td>
      <td><code>"true"</code></td>
    </tr>
    <tr>
      <td><code>null</code>, <code>false</code>, <code>'false'</code></td>
      <td><code>false</code>, <code>'false'</code></td>
      <td><code>"false"</code></td>
    </tr>
    <tr>
      <td rowspan="2">Other non-boolean attrs<br><small>eg. <code>aria-checked</code>, <code>tabindex</code>, <code>alt</code>, etc.</small></td>
      <td><code>undefined</code>, <code>null</code>, <code>false</code></td>
      <td><code>undefined</code>, <code>null</code></td>
      <td><i>removed</i></td>
    </tr>
    <tr>
      <td><code>'false'</code></td>
      <td><code>false</code>, <code>'false'</code></td>
      <td><code>"false"</code></td>
    </tr>
  </tbody>
</table>

[Migration build flags:](migration-build.html#compat-configuration)

- `ATTR_FALSE_VALUE`
- `ATTR_ENUMERATED_COERCION`
