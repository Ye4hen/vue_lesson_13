// import { lessonsData } from "@/data/schoolData"

export default {
	namespaced: true,
	state: {
		lessonsList: [
			{
				id: 1,
				name: "Українська мова",
				teachersId: [
					1, 2
				]
			},
			{
				id: 2,
				name: "Українська література",
				teachersId: [
					5, 2
				]
			},
			{
				id: 3,
				name: "Математика",
				teachersId: [
					3
				]
			},
			{
				id: 4,
				name: "Англійська мова",
				teachersId: [
					4
				]
			},
			{
				id: 5,
				name: "Зарубіжна література",
				teachersId: [
					5, 4
				]
			},
		],
		selectedLessons: [],
	},
	getters: {
		lessonsList: ({ lessonsList }) => lessonsList,

		getLessonById: (state) => (lessonId) => {
			return state.lessonsList.find((lesson) => lesson.id == lessonId)
		},
		getFilledSelectedList: (state, getters, rootState, rootGetters) =>
			state.lessonsList.map((lesson) => ({

				id: lesson.id,
				name: lesson.name,
				teacherNames: lesson.teachersId.map(teacherId => rootGetters['teachers/getTeacherById'](teacherId).name)
			}))
	},
	mutations: {
	},
	actions: {
	},
	modules: {},
}
