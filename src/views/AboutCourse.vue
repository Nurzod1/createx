<template>
  <div class="about">
    <AboutHeader />
    <AboutLearn />
    <Curator />
    <Steps />
    <Join />
    <For />
    <Program />
    <Testimonials />
    <Register />
    <OtherCourses />
    <Footer />
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutComponents/AboutHeader.vue";
import AboutLearn from '@/components/AboutComponents/AboutLearn.vue';
import Curator from '@/components/AboutComponents/Curator.vue';
import Steps from '@/components/AboutComponents/Steps.vue';
import Join from '@/components/AboutComponents/Join.vue';
import For from '@/components/AboutComponents/For.vue';
import Program from '@/components/AboutComponents/Program.vue';
import Testimonials from '@/components/Testimonials.vue';
import Register from '@/components/AboutComponents/Register.vue';
import OtherCourses from '@/components/AboutComponents/OtherCourses.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { AboutHeader, AboutLearn, Curator, Steps, Join, For, Program, Testimonials, Register, OtherCourses, Footer},
  name: "AboutCourse",
};
</script>

<style lang="scss" scoped>
</style>