import Home from "./pages/home/index.vue";
import Test from "./pages/test/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    title: "首页",
    icon: "el-icon-s-home",
    component: Home,
  },
  {
    path: "/test",
    title: "测试",
    icon: "el-icon-s-tools",
    component: Test,
  },
];

export default routes;
