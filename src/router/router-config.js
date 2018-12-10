import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "@/home/Home";
import MyAccount from "@/myaccount/MyAccount";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
    path: '/',
    components: {
      default: Home
    }
  }, {
    path: '/myaccount',
    component: MyAccount
  }, ]
});

export default router;