<template>
  <div class="eventview">
    <EventHeader />
    <EventProgram />
    <Speaker />
    <For />
    <Subscribe />
    <EventRegister />
    <Check />
    <Footer />
  </div>
</template>

<script>
import EventHeader from '@/components/EventViewComponents/EventHeader.vue'
import EventProgram from '@/components/EventViewComponents/EventProgram.vue'
import Speaker from '@/components/EventViewComponents/Speaker.vue'
import For from '@/components/AboutComponents/For.vue'
import Subscribe from '@/components/EventViewComponents/Subscribe.vue';
import EventRegister from '@/components/EventViewComponents/EventRegister.vue';
import Check from '@/components/EventViewComponents/Check.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: { EventHeader, EventProgram, Speaker, For , Subscribe, EventRegister, Check, Footer},
  name: 'EventView',
}
</script>

<style lang="scss" scoped>

</style>