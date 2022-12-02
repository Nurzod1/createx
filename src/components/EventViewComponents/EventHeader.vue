<template>
  <div class="event">
    <div class="container">
      <div class="event-intro">
        <div class="event-intro__subtitle">Enjoy your studying!</div>
        <div class="event-intro__title">Our online courses</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.event {
  padding: 150px 0 100px 0;
  background: #FFDAD5;
  @include breakpoint(md) {
    padding: 100px 0 60px 0;
  }
  @include breakpoint(sm) {
    padding: 60px 0 50px 0;
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    @include breakpoint(xs) {
      gap: 0px;
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      text-transform: uppercase;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(xs) {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 38px;
        line-height: 50px;
      }
      @include breakpoint(xs) {
        font-size: 28px;
        line-height: 40px;
      }
    }
  }
}
</style>