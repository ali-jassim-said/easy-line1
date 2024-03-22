<template>
  <div class="wrapper">
        <form class="form-box">
            <h2 class="title">Login</h2>
            <div class="input-box">
                <span class="icon">
                    <i class="fas fa-envelope"></i>
                </span>
                <input type="email">
                <label for="email">Email</label>
            </div>
            <div class="input-box">
                <span class="icon">
                    <i class="fas fa-lock"></i>
                </span>
                <input type="password">
                <label for="password">Password</label>
            </div>
            <button type="button" @click="login()">Login</button>

            <div class="reg">
                <p>Don't have an account? <a href="#">Signup now</a></p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    methods: {
        login(){
                this.$store.dispatch("doLogin")
            }
    }
}
</script>

<style>
    @import url("../../assets/css/login.css");
 </style>