<template>
  <div class="question">
    <div class="container">
      <div class="question-wrapper">
        <div class="question-img">
          <img src="@/assets/img/illustration11.png" alt="" />
        </div>
        <div class="question-inputs">
          <div class="question-intro">
            <div class="question-intro__subtitle">Any questions?</div>
            <div class="question-intro__title">Drop us a line</div>
          </div>
          <div class="question-inputs__wrapper">
            <div class="question-input__wrapper">
              <div class="question-input">
                <p class="question-input__title">First Name*</p>
                <input type="text" placeholder="Your first name" />
              </div>
              <div class="question-input">
                <p class="question-input__title">Last Name*</p>
                <input type="text" placeholder="Your last name" />
              </div>
              <div class="question-input">
                <p class="question-input__title">Email*</p>
                <input type="text" placeholder="Your working email" />
              </div>
              <div class="question-input">
                <p class="question-input__title">Phone</p>
                <input type="text" placeholder="Your phone number" />
              </div>
            </div>
            <div class="question-input__message">
              <p>Message*</p>
              <input type="text" placeholder="Your message" />
            </div>
          </div>
          <div class="question-input__agree">
            <div class="question-checkbox">
              <input type="checkbox" id="agree" />
              <label for="agree"
                >I agree to receive communications from Createx Online School
              </label>
            </div>
            <Button title="Send message" />
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
  name: "Questions",
};
</script>

<style lang="scss" scoped>
.question {
  margin: 40px 0;
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include breakpoint(xl) {
      gap: 40px;
    }
    @include breakpoint(sm) {
      flex-direction: column-reverse;
    }
  }
  &-img {
    max-height: 481px;
    @include breakpoint(xs) {
      width: 60%;
      height: 60%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include breakpoint(lg) {
      gap: 0px;
    }
    &__subtitle {
      line-height: 25px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 15px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 40px;
        line-height: 54px;
      }
      @media screen and (max-width: 500px) {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }
  &-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 340px;
    @media screen and (max-width: 500px) {
      max-width: 100%;
    }
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
      @include breakpoint(lg) {
        gap: 18px;
      }
      @include breakpoint(md) {
        gap: 10px;
      }
      @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
    &__title {
      line-height: 25px;
      color: #424551;
    }
    input {
      width: 100%;
      height: 52px;
      border: 1px solid #d7dadd;
      border-radius: 4px;
      padding: 5px 15px;
      @include breakpoint(lg) {
        height: 42px;
      }
    }
    &__message {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: 705px;
      input {
        width: 100%;
        height: 128px;
        border: 1px solid #d7dadd;
        border-radius: 4px;
        padding: 15px 20px;
        position: relative;

        @include breakpoint(lg) {
          height: 100px;
        }
        &::placeholder {
          position: absolute;
          top: 15px;
        }
      }
    }
    &__agree {
      display: flex;
      gap: 25px;
      align-items: center;
      @include breakpoint(md) {
        flex-direction: column;
        gap: 8px;
        align-items: start;
      }
    }
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    gap: 45px;

    @include breakpoint(lg) {
      gap: 30px;
    }
    @include breakpoint(md) {
      gap: 20px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;
      @include breakpoint(lg) {
        gap: 18px;
      }
      @include breakpoint(md) {
        gap: 10px;
      }
    }
  }
  &-checkbox {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}
</style>