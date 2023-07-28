<template>
  <button
    class="rounded-md bh-button"
    :style="{ background: 'var(--orange-color-1)' }"
  >
    {{ nameButton }}
  </button>
</template>

<script>
export default {
  name: "bh-commons",

  props: ["nameButton"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.bh-button {
  padding: 8px 16px 8px 16px;
  border-radius: 10px;
}

.bh-button:hover {
  opacity: 0.8;
}
</style>
