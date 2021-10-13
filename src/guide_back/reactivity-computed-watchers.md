# Computed and Watch

> This section uses [single-file component](single-file-component.html) syntax for code examples

## Computed values

Sometimes we need state that depends on other state - in Vue this is handled with component [computed properties](computed.html#computed-properties). To directly create a computed value, we can use the `computed` function: it takes a getter function and returns an immutable reactive [ref](reactivity-fundamentals.html#creating-standalone-reactive-values-as-refs) object for the returned value from the getter.

```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
```

Alternatively, it can take an object with `get` and `set` functions to create a writable ref object.

```js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
```

### Computed Debugging <Badge text="3.2+" />

`computed` accepts a second argument with `onTrack` and `onTrigger` options:

- `onTrack` will be called when a reactive property or ref is tracked as a dependency.
- `onTrigger` will be called when the watcher callback is triggered by the mutation of a dependency.

Both callbacks will receive a debugger event which contains information on the dependency in question. It is recommended to place a `debugger` statement in these callbacks to interactively inspect the dependency:

```js
const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // triggered when count.value is tracked as a dependency
    debugger
  },
  onTrigger(e) {
    // triggered when count.value is mutated
    debugger
  }
})

// access plusOne, should trigger onTrack
console.log(plusOne.value)

// mutate count.value, should trigger onTrigger
count.value++
```

`onTrack` and `onTrigger` only work in development mode.

## `watchEffect`

To apply and _automatically re-apply_ a side effect based on reactive state, we can use the `watchEffect` function. It runs a function immediately while reactively tracking its dependencies and re-runs it whenever the dependencies are changed.

```js
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

setTimeout(() => {
  count.value++
  // -> logs 1
}, 100)
```

### Stopping the Watcher

When `watchEffect` is called during a component's [setup()](composition-api-setup.html) function or [lifecycle hooks](composition-api-lifecycle-hooks.html), the watcher is linked to the component's lifecycle and will be automatically stopped when the component is unmounted.

In other cases, it returns a stop handle which can be called to explicitly stop the watcher:

```js
const stop = watchEffect(() => {
  /* ... */
})

// later
stop()
```

### Side Effect Invalidation

Sometimes the watched effect function will perform asynchronous side effects that need to be cleaned up when it is invalidated (i.e. state changed before the effects can be completed). The effect function receives an `onInvalidate` function that can be used to register an invalidation callback. This invalidation callback is called when:

- the effect is about to re-run
- the watcher is stopped (i.e. when the component is unmounted if `watchEffect` is used inside `setup()` or lifecycle hooks)

```js
watchEffect(onInvalidate => {
  const token = performAsyncOperation(id.value)
  onInvalidate(() => {
    // id has changed or watcher is stopped.
    // invalidate previously pending async operation
    token.cancel()
  })
})
```

We are registering the invalidation callback via a passed-in function instead of returning it from the callback because the return value is important for async error handling. It is very common for the effect function to be an async function when performing data fetching:

```js
const data = ref(null)
watchEffect(async onInvalidate => {
  onInvalidate(() => {
    /* ... */
  }) // we register cleanup function before Promise resolves
  data.value = await fetchData(props.id)
})
```

An async function implicitly returns a Promise, but the cleanup function needs to be registered immediately before the Promise resolves. In addition, Vue relies on the returned Promise to automatically handle potential errors in the Promise chain.

### Effect Flush Timing

Vue's reactivity system buffers invalidated effects and flushes them asynchronously to avoid unnecessary duplicate invocation when there are many state mutations happening in the same "tick". Internally, a component's `update` function is also a watched effect. When a user effect is queued, it is by default invoked **before** all component `update` effects:

```vue
<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  setup() {
    const count = ref(0)

    watchEffect(() => {
      console.log(count.value)
    })

    return {
      count
    }
  }
}
</script>
```

In this example:

- The count will be logged synchronously on initial run.
- When `count` is mutated, the callback will be called **before** the component has updated.

In cases where a watcher effect needs to be re-run **after** component updates (i.e. when working with [Template Refs](./composition-api-template-refs.md#watching-template-refs)), we can pass an additional `options` object with the `flush` option (default is `'pre'`):

```js
// fire after component updates so you can access the updated DOM
// Note: this will also defer the initial run of the effect until the
// component's first render is finished.
watchEffect(
  () => {
    /* ... */
  },
  {
    flush: 'post'
  }
)
```

The `flush` option also accepts `'sync'`, which forces the effect to always trigger synchronously. This is however inefficient and should be rarely needed.

In Vue >= 3.2.0, `watchPostEffect` and `watchSyncEffect` aliases can also be used to make the code intention more obvious.

### Watcher Debugging

The `onTrack` and `onTrigger` options can be used to debug a watcher's behavior.

- `onTrack` will be called when a reactive property or ref is tracked as a dependency.
- `onTrigger` will be called when the watcher callback is triggered by the mutation of a dependency.

Both callbacks will receive a debugger event which contains information on the dependency in question. It is recommended to place a `debugger` statement in these callbacks to interactively inspect the dependency:

```js
watchEffect(
  () => {
    /* side effect */
  },
  {
    onTrigger(e) {
      debugger
    }
  }
)
```

`onTrack` and `onTrigger` only work in development mode.

## `watch`

The `watch` API is the exact equivalent of the component [watch](computed.html#watchers) property. `watch` requires watching a specific data source and applies side effects in a separate callback function. It also is lazy by default - i.e. the callback is only called when the watched source has changed.

- Compared to [watchEffect](#watcheffect), `watch` allows us to:

  - Perform the side effect lazily;
  - Be more specific about what state should trigger the watcher to re-run;
  - Access both the previous and current value of the watched state.

### Watching a Single Source

A watcher data source can either be a getter function that returns a value, or directly a `ref`:

```js
// watching a getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)

// directly watching a ref
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```

### Watching Multiple Sources

A watcher can also watch multiple sources at the same time using an array:

```js
const firstName = ref('')
const lastName = ref('')

watch([firstName, lastName], (newValues, prevValues) => {
  console.log(newValues, prevValues)
})

firstName.value = 'John' // logs: ["John", ""] ["", ""]
lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]
```

However, if you are changing both watched sources simultaneously in the same function, the watcher will be executed only once:

```js{9-13}
setup() {
  const firstName = ref('')
  const lastName = ref('')

  watch([firstName, lastName], (newValues, prevValues) => {
    console.log(newValues, prevValues)
  })

  const changeValues = () => {
    firstName.value = 'John'
    lastName.value = 'Smith'
    // logs: ["John", "Smith"] ["", ""]
  }

  return { changeValues }
}
```

Note that multiple synchronous changes will only trigger the watcher once.

It is possible to force the watcher to trigger after every change by using the setting `flush: 'sync'`, though that isn't usually recommended. Alternatively, [nextTick](/api/global-api.html#nexttick) can be used to wait for the watcher to run before making further changes. e.g.:

```js
const changeValues = async () => {
  firstName.value = 'John' // logs: ["John", ""] ["", ""]
  await nextTick()
  lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]
}
```

### Watching Reactive Objects

Using a watcher to compare values of an array or object that are reactive requires that it has a copy made of just the values.

```js
const numbers = reactive([1, 2, 3, 4])

watch(
  () => [...numbers],
  (numbers, prevNumbers) => {
    console.log(numbers, prevNumbers)
  }
)

numbers.push(5) // logs: [1,2,3,4,5] [1,2,3,4]
```

Attempting to check for changes of properties in a deeply nested object or array will still require the `deep` option to be true:

```js
const state = reactive({
  id: 1,
  attributes: {
    name: ''
  }
})

watch(
  () => state,
  (state, prevState) => {
    console.log('not deep', state.attributes.name, prevState.attributes.name)
  }
)

watch(
  () => state,
  (state, prevState) => {
    console.log('deep', state.attributes.name, prevState.attributes.name)
  },
  { deep: true }
)

state.attributes.name = 'Alex' // Logs: "deep" "Alex" "Alex"
```

However, watching a reactive object or array will always return a reference to the current value of that object for both the current and previous value of the state. To fully watch deeply nested objects and arrays, a deep copy of values may be required. This can be achieved with a utility such as [lodash.cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)

```js
import _ from 'lodash'

const state = reactive({
  id: 1,
  attributes: {
    name: ''
  }
})

watch(
  () => _.cloneDeep(state),
  (state, prevState) => {
    console.log(state.attributes.name, prevState.attributes.name)
  }
)

state.attributes.name = 'Alex' // Logs: "Alex" ""
```

### Shared Behavior with `watchEffect`

`watch` shares behavior with [`watchEffect`](#watcheffect) in terms of [manual stoppage](#stopping-the-watcher), [side effect invalidation](#side-effect-invalidation) (with `onInvalidate` passed to the callback as the 3rd argument instead), [flush timing](#effect-flush-timing) and [debugging](#watcher-debugging).
