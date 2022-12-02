<template>
  <div class="event-card">
    <div class="event-wrapper">
      <div class="event-time__wrapper">
        <div class="event-time__date">{{ post.data }}</div>
        <div class="event-time__clock">{{ post.time }}</div>
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
    <div
      @click="$router.push(`/EventView/${post.slug}`)"
      class="event-card__btn"
    >
      <Button title="View more" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "EventColumnCard",
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 35px;
    max-width: 390px;
    background-color: #fff;
    border: 1px solid #e5e8ed;
    border-radius: 4px;
    align-items: flex-start;
    transition: 0.3s;
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
      0px 30px 24px -10px rgba(154, 156, 165, 0.05),
      0px 12px 10px -6px rgba(154, 156, 165, 0.04),
      0px 4px 4px -4px rgba(30, 33, 44, 0.03);
    &:hover {
      box-shadow: 0px 80px 80px -20px rgba(255, 63, 58, 0.16),
        0px 30px 24px -10px rgba(255, 63, 58, 0.1),
        0px 12px 10px -6px rgba(255, 63, 58, 0.08),
        0px 4px 4px -4px rgba(30, 33, 44, 0.05);
    }

    @include breakpoint(lg) {
      padding: 25px;
    }
    @include breakpoint(md) {
      padding: 15px;
    }
    &__btn {
      margin-top: auto;
      width: 100%;
      button{
        width: 100%;
      }
    }
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    width: 100%;
    @include breakpoint(lg) {
      gap: 15px;
    }
    @include breakpoint(md) {
      gap: 10px;
    }
  }
  &-time {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
      @include breakpoint(lg) {
        gap: 3px;
      }
    }
    &__date {
      font-size: 48px;
      line-height: 62px;
      font-weight: 900;
      color: #ff3f3a;
      @include breakpoint(lg) {
        font-size: 38px;
        line-height: 42px;
      }
      @include breakpoint(md) {
        font-size: 34px;
        line-height: 40px;
      }
      @include breakpoint(xs) {
        font-size: 28px;
        line-height: 34px;
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
      @include breakpoint(lg) {
        font-size: 18px;
        line-height: 22px;
      }
      @include breakpoint(sm) {
        font-size: 16px;
        line-height: 22px;
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