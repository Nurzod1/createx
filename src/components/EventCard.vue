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
    <div @click="$router.push(`/EventView/${post.slug}`)" class="event-card__btn">
    <Button title="View more" />
    </div>
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
    width: 100%;
    padding: 35px;
    border-radius: 4px;
    transition: 0.3s;
    align-items: center;
    @include breakpoint(md) {
      padding: 20px;
      gap: 10px;
    }
    @include breakpoint(xs) {
      flex-direction: column;
      align-items: flex-end;
      padding: 15px;
      gap: 0px;
    }
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
    align-items: center;
    width: 100%;
    @include breakpoint(sm){
      align-items: start;
      flex-direction: column;
      gap: 0px;
    }
  }
  &-time {
    &__wrapper {
      display: flex;
      gap: 20px;
      align-items: center;
      @include breakpoint(md) {
        gap: 15px;
      }
    }
    &__date {
      font-size: 48px;
      line-height: 62px;
      font-weight: 900;
      color: #ff3f3a;
      @include breakpoint(md) {
        font-weight: 600;
      }
      @include breakpoint(md) {
        font-size: 38px;
        line-height: 42px;
      }
    }
    &__month {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
      @include breakpoint(sm) {
        font-size: 16px;
        line-height: 18px;
      }
    }
    &__clock {
      white-space: nowrap;
      line-height: 25px;
      color: #787a80;
      @include breakpoint(md) {
        font-size: 14px;
      }
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 700px;
    &__text {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      color: #1e212c;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
        gap: 0px;
      }
      @include breakpoint(sm) {
        font-size: 16px;
        line-height: 22px;
        gap: 0px;
      }
      
    }
    &__category {
      line-height: 25px;
      color: #787a80;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
</style>