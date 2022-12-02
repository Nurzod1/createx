<template>
  <div class="subfooter">
    <div class="container">
      <div class="subfooter-wrapper">
        <div class="subfooter-illustration1">
          <img src="@/assets/img/illustration2.png" alt="" />
        </div>
        <div class="subfooter-text">
          <div class="subfooter-text__subtitle">Don’t miss anything</div>
          <div class="subfooter-text__title">
            Subscribe to the Createx School announcements
          </div>
        </div>
        <div class="subfooter-input">
          <input type="text" placeholder="Your working email" />
          <Button title="Subscribe" />
        </div>
        <div class="subfooter-illustration2">
          <img src="@/assets/img/illustration3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.subfooter {
  background-color: #fddcd0;
  padding: 100px 0;
  margin-top: 80px;
  position: relative;
  @include breakpoint(md) {
    padding: 70px 0 120px 0;
    margin-top: 50px;
  }
  @include breakpoint(sm) {
    padding: 40px 0;
    margin-top: 30px;
  }
  @include breakpoint(xs) {
    padding: 20px 0;
    margin-top: 20px;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    text-align: center;
    @include breakpoint(md) {
      gap: 40px;
      margin-bottom: 10px;
    }
    @include breakpoint(sm) {
      gap: 20px;
    }
    @media screen and (max-width: 400px) {
        margin-bottom: 0;
      }
  }
  &-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      @include breakpoint(sm) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(xs) {
        font-size: 12px;
        line-height: 16px;
      }
      @media screen and (max-width: 360px) {
        font-size: 10px;
        line-height: 16px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      max-width: 810px;
      @include breakpoint(md) {
        font-size: 38px;
        line-height: 46px;
      }
      @include breakpoint(sm) {
        font-size: 32px;
        line-height: 40px;
      }
      @include breakpoint(xs) {
        font-size: 26px;
        line-height: 32px;
      }
      @media screen and (max-width: 530px) {
        font-size: 22px;
        line-height: 28px;
        max-width: 330px;
      }
      @media screen and (max-width: 360px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  &-input {
    display: flex;
    gap: 24px;
    margin-bottom: 60px;
    @media screen and (max-width: 450px) {
      gap: 15px;
    }
    @media screen and (max-width: 360px) {
      flex-direction: column;
      align-items: center;
    }
    input {
      width: 360px;
      height: 50px;
      border: none;
      border-radius: 4px;
      padding: 10px;
      outline: none;
      @include breakpoint(md) {
        height: 39.3px;
        width: 330px;
      }
      @include breakpoint(xs) {
        height: 39.3px;
        width: 280px;
      }
      @media screen and (max-width: 450px) {
        height: 26px;
        width: 200px;
      }
    }
  }
  &-illustration1 {
    position: absolute;
    bottom: 0;
    left: 0;
    img {
      width: 90%;
      height: 90%;
      @include breakpoint(lg) {
        width: 70%;
        height: 70%;
      }
      @include breakpoint(md) {
        width: 60%;
        height: 60%;
      }
      @include breakpoint(sm) {
        display: none;
      }
    }
  }
  &-illustration2 {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 90%;
      height: 90%;
      @include breakpoint(lg) {
        width: 70%;
        height: 70%;
      }
      @include breakpoint(md) {
        width: 60%;
        height: 60%;
      }
      @include breakpoint(sm) {
        display: none;
      }
    }
  }
}
</style>