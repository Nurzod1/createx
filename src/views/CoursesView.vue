<template>
  <div class="courses">
    <Course />
    <Testimonials />
    <Certificate />
    <Subfooter />
    <Footer />
  </div>
</template>

<script>
import Course from "@/components/Course.vue";
import Testimonials from '@/components/Testimonials.vue';
import Certificate from '@/components/Certificate.vue';
import Subfooter from '@/components/Subfooter.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { Course, Testimonials, Certificate, Subfooter, Footer},
  name: "CoursesView",
};
</script>

<style lang="scss" scoped>
</style>