<template>
    <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link v-if="userName" :to="{ name: 'select_lessons' }">Вибрати предмети</router-link>
        <div class="login__component">
            <h6 class="login__name">{{ userName }}</h6>
            <button class="login__btn button" @click="onAction">{{ buttonLoginTitle }}</button>
        </div>
    </nav>
    <router-view />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['userName']),
        buttonLoginTitle() {
            return this.userName ? 'Вихід' : 'Вхід'
        },
    },
    methods: {
        ...mapActions(['setUserName']),
        onAction() {
            if (!this.userName) {
                this.$router.push({
                    name: 'login',
                })
            } else {
                this.setUserName(null)
                this.$router.push({
                    name: 'home',
                })
            }
        },
    },
}
</script>
<style lang="scss">
@import '@/assets/style';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //   text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
