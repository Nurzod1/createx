<template>
  <div class="contacts-view">
    <Info />
    <Questions />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Info from '@/components/ContactsComponents/Info.vue'
import Questions from '@/components/ContactsComponents/Questions.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Navbar, Info, Questions, Footer},
  name: 'ContactsView',
}
</script>

<style>

</style>