<template>
    <div class="home">
        <h1 v-if="userName">Доброго дня, {{ userName }}!</h1>
        <h2>Вітаємо Вас на сайті школи</h2>
        <h2>У нашій школі учні самі вибирають предмети і вчителів</h2>
        <h5 v-if="!userName">Увійдіть для повноцінного використання</h5>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {},
    computed: {
        ...mapGetters(['userName']),
    },
}
</script>
