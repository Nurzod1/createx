<template>
  <div class="cards">
    <div class="container">
      <div class="cards-wrapper">
        <EventColumnCard v-for="item in items" :key="item.category" :post="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import EventColumnCard from "@/components/EventColumnCard.vue";
export default {
  name: 'Card',
  components: { EventColumnCard },
  data() {
    return {
      items: [
        {
          data: '05 Aug',
          time: '11:00 – 14:00',
          text: "Formation of the organizational structure of the company in the face of uncertainty.",
          category: "Onine master-class",
        },
        {
          data: '24 Jul',
          time: '11:00 – 12:30',
          text: "Building a customer service department. Best Practices.",
          category: "Onine lecture",
        },
        {
          data: '16 Jul',
          time: '10:00 – 13:00',
          text: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          category: "Online workshop",
        },
        {
          data: '10 Jul',
          time: '9:00 – 14:00',
          text: "Formation of the organizational structure of the company in the face of uncertainty.",
          category: "Online master-class",
        },
        {
          data: '27 Jun',
          time: '11:00 – 12:30',
          text: "Building a customer service department. Best Practices.",
          category: "Online lecture",
        },
        {
          data: '15 Jun',
          month: 'July',
          time: '10:00 – 13:00',
          text: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          category: "Online workshop",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.cards{
  &-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @include breakpoint(sm){
      grid-template-columns: 1fr 1fr;
    }
    @include breakpoint(xs){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>