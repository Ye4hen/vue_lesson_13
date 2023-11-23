<template>
    <div class="login">
        <h2 class="login__title title">Welcome to the Login Page!</h2>
        <div class="login__form">
            <div class="login__item">
                <label>
                    Name
                    <input v-model="userName" type="text" />
                </label>
            </div>
            <div class="login__item">
                <label>
                    Password
                    <input v-model="userPassword" type="password" />
                </label>
            </div>
            <button class="login__button button" @click="userLogin">Login</button>
            <div v-if="errorMessage" class="err-msg">{{ errorMessage }}</div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'LoginPage',
    data() {
        return {
            userName: null,
            userPassword: null,
        }
    },

    computed: {
        ...mapGetters(['errorMessage']),
    },

    methods: {
        ...mapActions(['setErrorMessage', 'setUserName']),
        userLogin() {
            this.setUserName(this.userName)

            if (this.userName && this.userPassword) {
                this.setErrorMessage(null)
                console.log(this.userName)

                if (this.$route.query.redirect) {
                    this.$router.push({
                        path: this.$route.query.redirect,
                    })
                } else this.$router.push({ name: 'home' })
            } else {
                this.setErrorMessage('Будь ласка, заповніть поля')
            }
        },
    },
}
</script>
