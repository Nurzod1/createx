<template>
  <div class="register">
    <div class="container">
      <div class="register-wrapper">
        <div class="register-img">
          <img src="@/assets/img/illustration5.png" alt="" />
        </div>
        <div class="register-forms">
          <div class="register-intro">
            <div class="register-intro__subtitle">
              Leave a request now and get 20% off!
            </div>
            <div class="register-intro__title">Register for the course</div>
          </div>
          <div class="register-forms__wrapper">
            <div class="register-input">
              <div class="register-input__title">Full Name</div>
              <input type="text" placeholder="Your full name" />
            </div>
            <div class="register-input">
              <div class="register-input__title">Email</div>
              <input type="text" placeholder="Your working email" />
            </div>
            <div class="register-input">
              <div class="register-input__title">Phone</div>
              <input type="text" placeholder="Your phone number" />
            </div>
            <Button title="Join the course" />
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
};
</script>

<style lang="scss" scoped>
.register {
  margin: 60px 0;
  @include breakpoint(sm) {
    margin: 30px 0;
  }
  &-wrapper {
    display: flex;
    justify-content: space-between;
    @include breakpoint(sm) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
  &-img {
    width: 50%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-forms {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include breakpoint(lg) {
      gap: 20px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;

      @include breakpoint(lg) {
        gap: 15px;
      }
      @include breakpoint(sm) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: end;
      }
      @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: start;
      }
    }
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include breakpoint(sm) {
      text-align: center;
    }
    &__subtitle {
      line-height: 24px;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
      @include breakpoint(lg) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(md) {
        font-size: 12px;
        line-height: 16px;
      }
      @media screen and (max-width: 500px) {
        font-size: 10px;
        line-height: 12px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(lg) {
        font-size: 39px;
        line-height: 50px;
      }
      @include breakpoint(md) {
        font-size: 30px;
        line-height: 40px;
      }
      @media screen and (max-width: 500px) {
        font-size: 28px;
        line-height: 28px;
      }
    }
  }
  &-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    &__title {
      line-height: 25px;
      color: #424551;

      @include breakpoint(lg) {
        font-size: 14px;
        line-height: 20px;
      }
      @include breakpoint(md) {
        font-size: 12px;
        line-height: 16px;
      }
    }
    input {
      width: 100%;
      height: 52px;
      padding: 10px 15px;
      border: 1px solid #d7dadd;
      border-radius: 4px;

      @include breakpoint(lg) {
        padding: 5px 10px;
        height: 39.3px;
      }

      @media screen and (max-width: 450px) {
        height: 35px;
      }
      &::placeholder {
        line-height: 25px;
        color: #424551;
      }
    }
  }
}
</style>