<template>
    <div class="lesson container">
        <h2 class="title step">Крок 1. Сторінка вибору уроків</h2>
        <ul class="lesson__list">
            Виберіть уроки:
            <li v-for="lesson in lessonsList" :key="lesson.id" class="lesson__item">
                <div v-if="lesson.teachersId.length" class="lesson__item">
                    <h5 class="lesson__name">{{ lesson.name }}</h5>
                    <input v-model="selectedLessons" :value="lesson.id" type="checkbox" />
                </div>
            </li>
        </ul>
        <button class="button lesson__button" @click="displaySelected">Choose the lessons</button>
        <div v-if="errorMessage" class="err-msg">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'LessonsSelectView',

    data() {
        return {
            selectedLessons: [],
        }
    },

    computed: {
        ...mapGetters('lessons', ['lessonsList']),
        ...mapGetters(['errorMessage']),
    },

    methods: {
        ...mapActions(['setErrorMessage']),
        displaySelected() {
            if (this.selectedLessons.length) {
                this.$router.push({
                    name: 'selected_lessons_list',
                    params: {
                        lessonId: this.selectedLessons,
                    },
                })
                this.setErrorMessage(null)
            } else {
                this.setErrorMessage('Будь ласка, виберіть принаймні один предмет')
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>