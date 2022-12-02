<template>
  <div class="home">
    <Header />
    <Why />
    <Feature />
    <Benefits />
    <Events />
    <Certificate />
    <Tutors />
    <Testimonials />
    <Blog />
    <Subfooter />
    <Footer />
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue'
import Benefits from '@/components/Benefits.vue'
import Certificate from '@/components/Certificate.vue'
import Events from '@/components/Events.vue'
import Feature from '@/components/Feature.vue'
import Header from '@/components/Header.vue'
import Tutors from '@/components/Tutors.vue'
import Why from '@/components/Why.vue'
import Blog from '@/components/Blog.vue'
import Subfooter from '@/components/Subfooter.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {Header, Why, Feature, Benefits, Events, Certificate, Tutors ,Testimonials, Blog, Subfooter, Footer},
  name: 'HomeView',
}
</script>
