<template>
    <div class="lesson container">
        <h2 class="title step">Крок 2. Вибір вчителів</h2>
        <ul class="lesson__list">
            <li v-for="lessonId in selectedLessonsList" :key="lessonId" class="lesson__item">
                <h4 class="lesson__name">
                    {{ getLessonById(lessonId).name }}
                </h4>
                <div class="select__item">
                    <label>
                        <select v-model="getLessonById(lessonId).selectedTeacher">
                            <option
                                v-for="teacherName in getLessonById(lessonId).teachersId"
                                :key="teacherName"
                                :value="teacherName"
                            >
                                {{ getTeacherById(teacherName).name }}
                            </option>
                        </select>
                    </label>
                </div>
            </li>
        </ul>
        <button class="button" @click="addNewAssignment">Розпочати навчання</button>
        <div v-if="errorMessage" class="err-msg">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SelectedLessonsView',

    data() {
        return {
            selectTeacher: null,
        }
    },

    computed: {
        ...mapGetters('lessons', ['getLessonById', 'getFilledSelectedList']),
        ...mapGetters('teachers', ['getTeacherById', 'teachersList']),
        ...mapGetters(['errorMessage']),
        selectedLessonsList() {
            return this.$route.params.lessonId
        },
    },

    methods: {
        ...mapActions('assignments', ['addAssignment']),
        ...mapActions(['setErrorMessage']),
        addNewAssignment() {
            const assignmentsToAdd = this.selectedLessonsList.map((lessonId) => ({
                lessonId,
                teacherId: this.getLessonById(lessonId).selectedTeacher,
            }))
            assignmentsToAdd.forEach((assignment) => {
                if (assignment.teacherId) {
                    this.setErrorMessage(null)
                    this.addAssignment(assignment)
                    this.$router.push({
                        name: 'lessons_list',
                        params: {
                            lessonId: this.selectedLessonsList,
                            teacherId: this.getLessonById(this.selectedLessonsList[0]).selectedTeacher,
                        },
                    })
                } else this.setErrorMessage('Будь ласка, виберіть вчителів')
                console.log(assignment.teacherId)
            })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>