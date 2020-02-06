import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '1',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			url: 'admin',
			nickname: '郭瑞昌',
			avatar: 'https://soft1841-1.oss-cn-beijing.aliyuncs.com/logo/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200206184924.jpg'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	getters: {
	},
	actions: {
	},
	modules: {}
})
