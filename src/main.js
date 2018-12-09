import Vue from 'vue';
import Home from './page/Home.vue';
var vm = new Vue({
	el: '#app',
	data: {
		message: 'hello first vue'
	},
	render: h => h(Home)

});