<template>
  <side-bar v-if="showSideBar"/>
  <Navbar v-if="showSideBar"/>
  <router-view/>
</template>
<script>
import SideBar from './components/sidebar/SideBar.vue'
import Navbar from './components/navbar/navbar.vue'
export default {
  components: { SideBar, Navbar },
  name: "AppView",
  computed: {
    showSideBar() {
      return this.$route.name != 'login';
    }
  },
  mounted(){
    const token = localStorage.getItem("token")
    if(!token){
      this.$router.push({ name: "login"})
    }
  }
}
</script>
<style>
  @import url("../src/assets/css/style.css");
</style>
