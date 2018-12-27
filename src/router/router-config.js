import Vue from 'vue';
import VueRouter from "vue-router";
import TheMain from "Cmn/TheMain";
import Home from "@/home/Home";
import MyAccount from "@/myaccount/MyAccount";
import Register from "@/myaccount/Register";
import ContactUs from "@/ContactUs";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
    path: '/',
    components: {
      main: TheMain
    },
    children: [{
      path: '',
      components: {
        content: Home
      }
    }]
  }, {
    path: '/myaccount',
    components: {
      content: MyAccount
    }
  }, {
    path: '/register',
    components: {
      content: Register
    }
  }, {
    path: '/contactus',
    components: {
      main: ContactUs
    }
  }]
});

export default router;