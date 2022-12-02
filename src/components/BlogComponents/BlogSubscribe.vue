<template>
  <div class="subscribe" >
    <div class="container">
      <div class="subscribe-wrapper">
        <div class="subscribe-img">
          <img src="@/assets/img/illustration10.png" alt="" />
        </div>
        <div class="subscribe-about">
          <div class="subscribe-about__title">
            Want to get the best articles weekly? Subscribe to our newsletter!
          </div>
          <div class="subscribe-about__input">
            <input type="text" placeholder="Your working email" />
            <Button title="Subscribe" />
          </div>
          <div class="subscribe-about__check">
            <input type="checkbox" id="subscription" />
            <label for="subscription"
              >I agree to receive communications from Createx Online
              School</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "BlogSubscribe",
};
</script>

<style lang="scss" scoped>
.subscribe {
  background-color: #f4f5f6;
  padding: 20px 0;
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include breakpoint(lg) {
      gap: 40px;
    }
    @include breakpoint(sm) {
      flex-direction: column;
      text-align: center;
    }
    @include breakpoint(xs) {
      gap: 20px;
    }
  }
  &-img {
    img {
      width: 100%;
      @include breakpoint(sm) {
        width: 70%;
      }
      @include breakpoint(xs) {
        width: 60%;
      }
    }
  }
  &-about {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__title {
      font-size: 32px;
      line-height: 41px;
      font-weight: 900;
      max-width: 600px;
      @include breakpoint(md) {
        font-size: 28px;
        line-height: 34px;
        max-width: 500px;
      }
      @include breakpoint(md) {
        font-size: 24px;
        line-height: 30px;
        max-width: 400px;
      }
      @media screen and (max-width: 400px) {
        font-size: 22px;
        line-height: 26px;
      }
    }
    &__input {
      display: flex;
      gap: 24px;
      @include breakpoint(lg) {
        flex-direction: column;
      }
      @include breakpoint(sm) {
        align-items: center;
      }
      @media screen and (max-width: 453px) {
        gap: 15px;
      }
      input {
        padding: 15px 15px;
        width: 422px;
        border: 1px solid #d7dadd;
        border-radius: 4px;
        background-color: #fff;
        @include breakpoint(md) {
          width: 322px;
        }
        @media screen and (max-width: 453px) {
          padding: 7px 10px;
        }
        @media screen and (max-width: 400px) {
          width: 222px;
        }
      }
    }
    &__check {
      display: flex;
      gap: 8px;
      align-items: center;
      label {
        line-height: 24px;
        color: #424551;
        @include breakpoint(xs) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>