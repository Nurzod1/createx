<template>
  <div class="courses">
    <Navbar />
    <Course />
    <Testimonials />
    <Certificate />
    <Subfooter />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Course from "@/components/Course.vue";
import Testimonials from '@/components/Testimonials.vue';
import Certificate from '@/components/Certificate.vue';
import Subfooter from '@/components/Subfooter.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { Navbar, Course, Testimonials, Certificate, Subfooter, Footer,},
  name: "CoursesView",
};
</script>

<style lang="scss" scoped>
</style>