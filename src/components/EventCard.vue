<template>
  <div class="event-card">
    <div class="event-wrapper">
      <div class="event-time__wrapper">
        <div class="event-time__date">{{ post.data }}</div>
        <div class="event-time">
          <div class="event-time__month">{{ post.month }}</div>
          <div class="event-time__clock">{{ post.time }}</div>
        </div>
      </div>
      <div class="event-info">
        <div class="event-info__text">
          {{ post.text }}
        </div>
        <div class="event-info__category">
          {{ post.category }}
        </div>
      </div>
    </div>
    <Button title="View more" />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "EventCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  &-card {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    width: 1230px;
    padding: 35px;
    border-radius: 4px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 80px 80px -20px rgba(255, 63, 58, 0.16),
        0px 30px 24px -10px rgba(255, 63, 58, 0.1),
        0px 12px 10px -6px rgba(255, 63, 58, 0.08),
        0px 4px 4px -4px rgba(30, 33, 44, 0.05);
    }
  }
  &-wrapper {
    display: flex;
    gap: 20px;
  }
  &-time {
    &__wrapper {
      display: flex;
      gap: 20px;
    }
    &__date {
      font-size: 48px;
      line-height: 62px;
      font-weight: 900;
      color: #ff3f3a;
    }
    &__month {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
    }
    &__clock {
      line-height: 25px;
      color: #787a80;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    &__text {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      color: #1e212c;
    }
    &__category {
      line-height: 25px;
      color: #787a80;
    }
  }
}
</style>