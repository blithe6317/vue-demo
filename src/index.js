import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./app.vue";

import "./style.less";

import routes from "./router";

Vue.use(VueRouter);
Vue.use(ElementUI);
let a = 0;
for (let i = 0; i < 10; i++) {
  a = i;
  for (let i = 0; i < 100000000; i++) {
    a = i;
  }
}
console.log("a:", a);

const router = new VueRouter({
  routes,
});

const vm = new Vue({ router, render: (h) => h(App) }).$mount("#app");

window.vm = vm;
