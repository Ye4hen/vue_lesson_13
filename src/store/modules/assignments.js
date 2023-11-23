

export default {
	namespaced: true,
	state: {
		assignmentsList: [],
	},
	getters: {
		getAssignmentsList: (state) => state.assignmentsList,
		getFilledAssignmentsList: (state, getters, rootState, rootGetters) =>
			state.assignmentsList.map((assignment) => ({
				id: assignment.id,
				lessonName: rootGetters['lessons/getLessonById'](assignment.lessonId).name,
				teacherName: rootGetters['teachers/getTeacherById'](assignment.teacherId).name,
			})),
	},
	mutations: {
		addAssignment(state, assignment) {
			state.assignmentsList.push(assignment)
		},
		deleteAssignment(state, asgnIndex) {
			state.assignmentsList.splice(asgnIndex, 1)
		},
	},
	actions: {
		addAssignment({ commit }, assignment) {
			commit("addAssignment", {
				id: new Date().getTime(),
				...assignment,
			})
		},
		deleteAssignment({ commit }, asgnIndex) {
			commit("deleteAssignment", asgnIndex)
		},
	},
	modules: {},
}
