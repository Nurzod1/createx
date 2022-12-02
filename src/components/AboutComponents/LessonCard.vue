<template>
  <div :class="['card', { open: active }]">
    <div class="card-intro__wrapper">
      <div class="card-about">
        <div class="card-intro" @click="$emit('active:update')">
          <div class="card-btn">
            <span></span>
            <span></span>
          </div>
          <div class="card-intro__lesson">Lesson 1.</div>
          <div class="card-intro__title">
            Aliquet lectus urna viverra in odio.
          </div>
        </div>
        <div class="card-content">
          Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
          aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
          mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
          porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
          vitae accumsan id.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonCard",
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  gap: 20px;
  max-width: 600px;
  margin-top: 20px;
  @include breakpoint(lg) {
    max-width: 540px;
  }
  &.open {
    .card-btn span {
      transform: translateY(-50%);
    }

    .card-content {
      max-height: 150px;
    }
  }

  &-btn {
    position: relative;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;

    span {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      border-radius: 33px;
      background: #ff3f3a;
      transform: translateY(-50%);
      transition: 0.3s;

      &:first-child {
        transform: translateY(-50%) rotate(90deg);
      }

      &:last-child {
        height: 1.5px;
      }
    }
  }
  &-intro {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
    cursor: pointer;

    @include breakpoint(lg) {
      padding: 6px 10px;
    }
    @include breakpoint(sm) {
      justify-content: center;
    }
    @media screen and (max-width: 400px) {
      padding: 3px 5px;
    }
    &__wrapper {
      display: flex;
      gap: 20px;
      border: 1px solid transparent;
      border-radius: 12px;
      transition: 0.3s;

      &:hover {
        border: 1px solid #c1c1c1;
      }
    }

    &__lesson {
      font-size: 20px;
      line-height: 30px;
      color: #ff3f3a;
      @include breakpoint(lg) {
        font-size: 18px;
        line-height: 25px;
      }
      @include breakpoint(md) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (max-width: 400px) {
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 350px) {
        font-size: 12px;
        line-height: 14px;
      }
    }

    &__title {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      @include breakpoint(lg) {
        font-size: 18px;
        line-height: 25px;
      }
      @include breakpoint(md) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (max-width: 400px) {
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 350px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  &-content {
    max-height: 0px;
    margin-left: 32px;
    color: #424551;
    line-height: 25px;
    overflow: hidden;
    transition: 0.3s;
    @include breakpoint(lg) {
      font-size: 14px;
      line-height: 18px;
    }
    @media screen and (max-width: 400px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>