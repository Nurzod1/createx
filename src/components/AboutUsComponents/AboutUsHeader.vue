<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-about__wrapper">
          <div class="header-about__intro">
            <div class="header-about__subtitle">About us</div>
            <div class="header-about__title">Createx Online School</div>
          </div>
          <div class="header-about__autro">
            <div class="header-about__subtext">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts.
            </div>
            <div class="header-about__text">
              We provide relevant approaches to online learning, internships and
              employment in the largest companies in the country. Our
              educational programs help you get a new specialty from scratch.
              During your studies, we will help you find a job. Check the
              courses and online events that we organise.
            </div>
          </div>
          <div class="header-btns">
            <Button title="Explore events" />
            <Button title="Browse courses" />
          </div>
        </div>
        <div class="header-img">
          <img src="@/assets/img/illustration8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "AboutusHeader",
};
</script>

<style lang="scss" scoped>
.header {
  margin: 150px 0;
  @include breakpoint(lg) {
    margin: 100px 0;
  }
  @include breakpoint(sm) {
    margin: 70px 0;
  }
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include breakpoint(lg) {
      gap: 40px;
    }
    @include breakpoint(sm) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  }
  &-img {
    img {
      width: 100%;
      height: 100%;
      @include breakpoint(sm) {
        width: 60%;
      }
    }
  }
  &-about {
    &__wrapper {
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 50px;
      @include breakpoint(lg) {
        max-width: 49%;
      }
      @include breakpoint(md) {
        gap: 24px;
      }
      @include breakpoint(sm) {
        max-width: 100%;
      }
      @include breakpoint(xs) {
        gap: 15px;
      }
    }
    &__intro {
      display: flex;
      flex-direction: column;
      gap: 8px;
      @include breakpoint(md) {
        gap: 0px;
      }
    }
    &__autro {
      display: flex;
      flex-direction: column;
      gap: 24px;
      @include breakpoint(md) {
        gap: 15px;
      }
      @include breakpoint(xs) {
        gap: 8px;
      }
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding-left: 5px;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(xs) {
        font-size: 12px;
        line-height: 16px;
      }
      @media screen and (max-width: 450px) {
        font-size: 10px;
        line-height: 12px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 40px;
        line-height: 46px;
      }
      @include breakpoint(xs) {
        font-size: 34px;
        line-height: 36px;
      }
      @media screen and (max-width: 450px) {
        font-size: 28px;
        line-height: 32px;
      }
    }
    &__subtext {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 26px;
      }
      @include breakpoint(xs) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (max-width: 450px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__text {
      line-height: 25px;
      color: #424551;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 20px;
      }
      @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  &-btns {
    display: flex;
    gap: 24px;
    @include breakpoint(sm) {
      justify-content: center;
    }
    @media screen and (max-width: 450px) {
      gap: 15px;
    }
  }
}
</style>