import { createStore } from "vuex";
import teachers from "./modules/teachers"
import lessons from "./modules/lessons";
import assignments from "./modules/assignments";

export default createStore({
	state: {
		errorMessage: null,
		userName: null,
	},
	getters: {
		userName: ({ userName }) => userName,
		errorMessage: ({ errorMessage }) => errorMessage,
	},
	mutations: {
		setErrorMessage(state, message) {
			state.errorMessage = message
		},
		setUserName(state, name) {
			state.userName = name
		},
	},
	actions: {
		setErrorMessage({ commit }, message) {
			commit("setErrorMessage", message)
		},
		setUserName({ commit }, name) {
			commit("setUserName", name)
		},
	},
	modules: {
		teachers,
		lessons,
		assignments
	},
});
