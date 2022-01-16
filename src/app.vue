<template>
  <div class="app">
    <h2>{{ count }}</h2>
    <button @click="add">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style lang="less">
.app {
  button {
    background-color: red;
  }
}
</style>
