import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import NotFound from "../views/NotFound.vue";
import store from "@/store";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: { requiresAuth: false }
	},
	{
		path: "/login",
		name: "login",
		component: LoginPage,
		meta: { requiresAuth: false }
	},
	{
		path: "/lessons/select",
		name: "select_lessons",
		component: () => import('../views/LessonsSelectView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: "/lessons/:lessonId+",
		name: "selected_lessons_list",
		component: () => import('../views/SelectedLessonsView.vue'),
		props: (route) => ({ lessonIds: route.params.lessonId }),
		meta: { requiresAuth: true },
	},
	{
		path: "/lessons/:lessonId+  :teacherId/",
		name: "lessons_list",
		component: () => import('../views/LessonsPlanView.vue'),
		props: (route) => ({
			lessonId: route.params.lessonId,
			teacherId: route.params.teacherId
		}),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
		meta: { requiresAuth: false }
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to) => {
	const isAuthenticated = store.getters.userName;
	if (to.meta.requiresAuth && !isAuthenticated) {
		return {
			name: 'LoginPage',
			query: { redirect: to.fullPath },
		}
	}
})

export default router;
