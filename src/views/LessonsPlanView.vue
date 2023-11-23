<template>
    <div class="asgn">
        <h2 class="title step">Навчальний план</h2>
        <div v-for="(assignment, index) in getFilledAssignmentsList" :key="assignment.id" class="asgn__item">
            <div class="info">{{ assignment.lessonName }} -- {{ assignment.teacherName }}</div>
            <button type="button" class="button" @click="deleteAssignment(index)">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'LessonsPlanView',

    computed: {
        ...mapGetters('assignments', ['getAssignmentsList', 'getFilledAssignmentsList']),
    },
    methods: {
        ...mapActions('assignments', ['deleteAssignment']),
    },
}
</script>

<style lang="scss" scoped>
</style>