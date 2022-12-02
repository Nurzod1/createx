<template>
  <div class="about-us">
    <AboutUsHeader />
    <Statistics />
    <Values />
    <Directions />
    <Progress />
    <AboutUsTutors />
    <Testimonials />
    <Jobs />
    <Blog />
    <Subfooter />
    <Footer />
  </div>
</template>

<script>
import AboutUsHeader from '@/components/AboutUsComponents/AboutUsHeader.vue'
import Statistics from '@/components/AboutUsComponents/Statistics.vue'
import Values from '@/components/AboutUsComponents/Values.vue'
import Directions from '@/components/AboutUsComponents/Directions.vue'
import Progress from '@/components/AboutUsComponents/Progress.vue'
import AboutUsTutors from '@/components/AboutUsComponents/AboutUsTutors.vue'
import Testimonials from '@/components/Testimonials.vue'
import Jobs from '@/components/AboutUsComponents/Jobs.vue'
import Blog from '@/components/Blog.vue'
import Subfooter from '@/components/Subfooter.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { AboutUsHeader, Statistics, Values, Directions, Progress, AboutUsTutors, Testimonials, Jobs, Blog, Subfooter, Footer },
  name: 'AboutUsView',
}
</script>

<style>

</style>