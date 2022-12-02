<template>
  <div class="join">
    <div class="container">
      <div class="join-wrapper">
        <div class="join-intro">
          <div class="join-intro__title">20% discount for early birds!</div>
          <div class="join-time-wrapper">
            <div class="join-day">
              <div class="join-day__num">06</div>
              <div class="join-day__text">Days</div>
            </div>
            <div class="join-hours">
              <div class="join-hours__num">18</div>
              <div class="join-hours__text">Hours</div>
            </div>
            <div class="join-min">
              <div class="join-min__num">24</div>
              <div class="join-min__text">Mins</div>
            </div>
            <div class="join-sec">
              <div class="join-sec__num">12</div>
              <div class="join-sec__text">Sec</div>
            </div>
          </div>
        </div>
        <div class="join-input">
          <div class="join-input__wrapper">
            <div class="join-input__title">Full name</div>
            <input type="text" placeholder="Your full name" />
          </div>
          <div class="join-input__wrapper">
            <div class="join-input__title">Full name</div>
            <input type="text" placeholder="Your full name" />
          </div>
          <div class="join-input__wrapper">
            <div class="join-input__title">Full name</div>
            <input type="text" placeholder="Your full name" />
          </div>
          <Button title="Join the course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  name: "Join",
};
</script>

<style lang="scss" scoped>
.join {
  margin: 100px 0;

  @include breakpoint(lg) {
    margin: 70px 0;
  }
  @include breakpoint(md) {
    margin: 50px 0;
  }
  @include breakpoint(sm) {
    margin: 30px 0;
  }
  &-wrapper {
    background-color: #fedcd2;
    padding: 50px 65px;
    @include breakpoint(lg) {
      padding: 25px 35px;
    }
  }
  &-intro {
    display: flex;
    justify-content: space-between;

    @include breakpoint(xs) {
      flex-direction: column;
      gap: 10px;
    }
    &__title {
      font-size: 32px;
      line-height: 41px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 28px;
        line-height: 36px;
      }
      @include breakpoint(md) {
        text-align: center;
      }
      @media screen and (max-width: 430px) {
        font-size: 22px;
        line-height: 26px;
      }
    }
  }
  &-time {
    &-wrapper {
      display: flex;
      gap: 24px;
      align-items: center;
      @include breakpoint(md) {
        gap: 15px;
      }
      @include breakpoint(xs) {
        justify-content: flex-end;
      }
      @media screen and (max-width: 470px) {
        justify-content: center;
      }
    }
  }
  &-day {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    &__num {
      font-size: 20px;
      line-height: 26px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__text {
      font-size: 12px;
      line-height: 18px;
    }
  }
  &-hours {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    &__num {
      font-size: 20px;
      line-height: 26px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__text {
      font-size: 12px;
      line-height: 18px;
    }
  }
  &-min {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    &__num {
      font-size: 20px;
      line-height: 26px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__text {
      font-size: 12px;
      line-height: 18px;
    }
  }
  &-sec {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    &__num {
      font-size: 20px;
      line-height: 26px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__text {
      font-size: 12px;
      line-height: 18px;
    }
  }
  &-input {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @include breakpoint(md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 20px;
    }
    @include breakpoint(xs) {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-bottom: 20px;
      width: 240px;
      @include breakpoint(sm) {
        width: 200px;
        padding: 9px 10px;
      }
      @include breakpoint(xs) {
        width: 100%;
        padding: 5px 5px;
      }
      input {
        background-color: #fff;
        border: 1px solid #d7dadd;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 21px;
        color: #9a9ca5;
        outline: none;
        border-radius: 4px;

        @include breakpoint(xs){
          padding: 5px 10px;
        }
      }
    }
    &__title {
      font-size: 14px;
      line-height: 21px;
      @include breakpoint(sm){
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
</style>