import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import ViewD from "view-design";
import Vant from "vant";
import _ from "lodash";

import "element-ui/lib/theme-chalk/index.css";
import "vant/lib/index.css";

import App from "./app.vue";

import "./style.less";

import routes from "./router";

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes,
});

const vm = new Vue({ router, render: (h) => h(App) }).$mount("#app");

window.vm = vm;
