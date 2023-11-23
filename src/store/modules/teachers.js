// import { teachersData } from "@/data/schoolData"

export default {
	namespaced: true,
	state: {
		teachersList: [
			{
				id: 1,
				name: 'Наталія Петрівна',
				exp: 1
			},
			{
				id: 2,
				name: 'Наталія Василівна',
				exp: 2
			},
			{
				id: 3,
				name: 'Васелина Петрівна',
				exp: 3
			},
			{
				id: 4,
				name: 'Сергій Віталійович',
				exp: 4
			},
			{
				id: 5,
				name: 'Петро Степанович',
				exp: 5
			},
		],
	},
	getters: {
		teachersList: ({ teachersList }) => teachersList,
		getTeacherById: (state) => (teacherId) => {
			return state.teachersList.find((teacher) => teacher.id == teacherId)
		},
	},
	mutations: {
	},
	actions: {
		addTeacher({ commit }, teacher) {
			commit("addTeacher", {
				id: new Date().getTime(),
				...teacher
			})
		},
	},
	modules: {},
}
