<template>
  <div class="for">
    <div class="container">
      <div class="for-wrapper">
        <div class="for-intro">
          <div class="for-intro__subtitle">For whom?</div>
          <div class="for-intro__title">Who will benefit from the course:</div>
        </div>
        <div class="for-about">
          <div class="for-about__text">
            Specialists with more than 1 year of active work experience
          </div>
          <div class="for-about__text">
            Mobile app designers who want to improve their skills in solving
            business problems, creating and testing human-centered interfaces
          </div>
          <div class="for-about__text">
            Professional designers who want to feel more confident in UX
          </div>
          <div class="for-about__text">
            Specialists who would like to structure their knowledge, fill in the
            gaps
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "For",
};
</script>

<style lang="scss" scoped>
.for {
  margin: 40px 0;
  &-wrapper {
    display: flex;
    justify-content: space-between;

    @include breakpoint(sm) {
      flex-direction: column;
      gap: 20px;
    }
    @media screen and (max-width: 430px) {
      justify-content: center;
      align-items: center;
    }
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 492px;

    @media screen and (max-width: 430px) {
      text-align: center;
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;

      @include breakpoint(lg) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(sm) {
        font-size: 12px;
        line-height: 16px;
      }
      @include breakpoint(xs) {
        font-size: 10px;
        line-height: 12px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;

      @include breakpoint(lg) {
        font-size: 40px;
        line-height: 54px;
      }
      @include breakpoint(md) {
        font-size: 36px;
        line-height: 42px;
      }
      @include breakpoint(sm) {
        font-size: 32px;
        line-height: 38px;
      }
      @include breakpoint(xs) {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
  &-about {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 50%;

    @include breakpoint(md) {
      gap: 10px;
    }
    @include breakpoint(sm) {
      max-width: 70%;
    }
    @media screen and (max-width: 430px) {
      text-align: center;
    }
    &__text {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      display: flex;
      gap: 10px;

      @include breakpoint(lg) {
        font-size: 18px;
        line-height: 24px;
      }
      @include breakpoint(md) {
        font-size: 16px;
        line-height: 22px;
      }
      @include breakpoint(sm) {
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 430px) {
        align-items: center;
      }
      &::before {
        content: url("@/assets/img/check.svg");
      }
    }
  }
}
</style>