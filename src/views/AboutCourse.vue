<template>
  <div class="about">
    <Navbar />
    <AboutHeader />
    <AboutLearn />
    <Curator />
    <Steps />
    <Join />
    <For />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AboutHeader from "@/components/AboutComponents/AboutHeader.vue";
import AboutLearn from '@/components/AboutComponents/AboutLearn.vue';
import Curator from '@/components/AboutComponents/Curator.vue';
import Steps from '@/components/AboutComponents/Steps.vue';
import Join from '@/components/AboutComponents/Join.vue';
import For from '@/components/AboutComponents/For.vue';
export default {
  components: { Navbar, AboutHeader, AboutLearn, Curator, Steps, Join, For },
  name: "AboutCourse",
};
</script>

<style lang="scss" scoped>
</style>