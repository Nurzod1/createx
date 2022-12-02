<template>
  <div id="app">
    <Navbar @showLoginModal="openSignInModal" v-model="isSidebarOpen"/>
    <MainSidebar :active="isSidebarOpen"/>
    <router-view />
    <sign-in :showin="showin" @close="closeSignInModal"/>
    <sign-up />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainSidebar from "@/components/MainSidebar.vue";
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';

export default {
  components: { Navbar, MainSidebar, SignIn, SignUp },
  data() {
    return {
      isSidebarOpen: false,
      showin: false
    }
  },
  methods: {
    openSignInModal() {
      this.showin = true
    },
    closeSignInModal() {
      this.showin = false
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0 !important;
}
</style>
