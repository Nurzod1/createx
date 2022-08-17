<template>
  <div class="event">
    <div class="container">
      <div class="event-wrapper">
        <div class="event-intro">
          <div class="event-intro__subtitle">OUR EVENTS</div>
          <div class="event-intro__title">Lectures & workshops</div>
        </div>
        <EventCard v-for="item in items" :key="item.autor" :post="item"/>
        <div class="event-finish">
          <div class="event-finish__text">Do you want more?</div>
          <Button title="Explore all events"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import EventCard from "./EventCard.vue";
export default {
  components: { EventCard, Button },
  name: "Events",
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.event {
  background-color: #fdddcf;
  padding: 80px 0;
  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  &-intro {
    text-align: center;
    &__subtitle {
      line-height: 24px;
      color: #1e212c;
      font-weight: 700;
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
    }
  }
  &-finish{
    display: flex;
    gap: 80px;
    align-items: center;
    &__text{
      font-size: 28px;
      line-height: 150%;
      font-weight: 700;
      color: #1E212C;
    }
  }
}
</style>