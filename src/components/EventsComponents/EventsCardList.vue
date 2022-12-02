<template>
  <div class="cards">
    <div class="container">
      <div class="cards-wrapper">
        <EventCard v-for="item in items" :key="item.autor" :post="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  name: 'Card',
  components: { EventCard,},
  data() {
    return {
      items: [
        {
          data: '05',
          month: 'August',
          time: '11:00 – 14:00',
          text: "Formation of the organizational structure of the company in the face of uncertainty.",
          category: "Onine master-class",
        },
        {
          data: '24',
          month: 'July',
          time: '11:00 – 12:30',
          text: "Building a customer service department. Best Practices.",
          category: "Onine lecture",
        },
        {
          data: '16',
          month: 'July',
          time: '10:00 – 13:00',
          text: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          category: "Onine workshop",
        },
        {
          data: '05',
          month: 'August',
          time: '11:00 – 14:00',
          text: "Formation of the organizational structure of the company in the face of uncertainty.",
          category: "Onine master-class",
        },
        {
          data: '24',
          month: 'July',
          time: '11:00 – 12:30',
          text: "Building a customer service department. Best Practices.",
          category: "Onine lecture",
        },
        {
          data: '16',
          month: 'July',
          time: '10:00 – 13:00',
          text: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
          category: "Onine workshop",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.cards{
  &-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
  }
}
</style>