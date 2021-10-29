<template>
  <iframe ref="iframe" class="innerframe" :src="src"></iframe>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
      required: true,
    },
  },
  methods: {},
  mounted() {
  },
  beforeUnmount() {
  },
};
</script>

<style lang="scss" scoped>
.innerframe {
  position: fixed;
  top: calc(var(--navbar-height));
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--navbar-height));
  border: none;
}
</style>
