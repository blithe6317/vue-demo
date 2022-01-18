<template>
  <div class="app">
    <el-menu default-active="/home" class="menu">
      <el-menu-item
        v-for="(d, index) in routes"
        :index="d.path"
        :key="index"
        @click="push(d.path)"
      >
        <i :class="d.icon"></i>
        <span slot="title">{{ d.title }}</span>
      </el-menu-item>
    </el-menu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routes from "./router";

export default {
  data() {
    return { count: 0, routes };
  },
  methods: {
    add() {
      this.count++;
    },
    push(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="less" scoped>
.app {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .menu {
    width: 197px;
  }
  .main {
    flex: 1;
  }
}
</style>
