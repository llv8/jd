import Vue from 'vue';
import Element from "element-ui";
import router from 'Rtr/router-config.js';
import TheTemplate from 'Cmn/TheTemplate';
import "element-ui/lib/theme-chalk/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/style.css";
Vue.use(Element);
var vm = new Vue({
	router,
	el: '#app',
	data: {},
	render: h => h(TheTemplate)
});