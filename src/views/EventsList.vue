<template>
  <div class="eventslist">
    <WorkShops />
    <!-- <EventsCardList /> -->
    <EventsGridList />
    <Subfooter />
    <Footer />
  </div>
</template>

<script>
import WorkShops from '@/components/EventsComponents/WorkShops.vue'
import EventsCardList from '@/components/EventsComponents/EventsCardList.vue'
import Subfooter from '@/components/Subfooter.vue'
import Footer from '@/components/Footer.vue'
import EventsGridList from '@/components/EventsComponents/EventsGridList.vue'
export default {
  components: { WorkShops, EventsCardList, Subfooter, Footer, EventsGridList },
  name: 'EventsList',
}
</script>

<style lang="scss" scoped>

</style>