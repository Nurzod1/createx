<template>
  <div class="values">
    <div class="container">
      <div class="values-wrapper">
        <div class="values-intro">
          <div class="values-intro__subtitle">We always stand for</div>
          <div class="values-intro__title">Our core values</div>
        </div>
        <div class="values-item__wrapper">
          <div class="values-item">
            <div class="values-item__icon">
              <img src="@/assets/img/structure.png" alt="" />
            </div>
            <div class="values-item__title">Structured Approach</div>
            <div class="values-item__text">
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
            </div>
          </div>
          <div class="values-item">
            <div class="values-item__icon">
              <img src="@/assets/img/chat.png" alt="" />
            </div>
            <div class="values-item__title">Professional Feedbacks</div>
            <div class="values-item__text">
              Culpa nostrud commodo ea consequat reprehenderit aliquip.
            </div>
          </div>

          <div class="values-item">
            <div class="values-item__icon">
              <img src="@/assets/img/target.png" alt="" />
            </div>
            <div class="values-item__title">Efficiency</div>
            <div class="values-item__text">
              Viverra scelerisque consequat net. Adipisicing esse consequat.
            </div>
          </div>
          <div class="values-item">
            <div class="values-item__icon">
              <img src="@/assets/img/calendar.png" alt="" />
            </div>
            <div class="values-item__title">Flexible Shedule</div>
            <div class="values-item__text">
              Aute eiusmod dolore dolore deserunt veniam ad deserunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.values {
  margin: 50px 0;
  &-wrapper{
    display: flex;
    flex-direction: column;
    gap: 60px;
    @include breakpoint(sm){
      gap: 40px;
    }
    @include breakpoint(xs){
      gap: 20px;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 15px;
    max-width: 244px;
    @include breakpoint(xs){
      gap: 2px;
    }
    &__wrapper {
      display: flex;
      justify-content: space-between;
      @include breakpoint(lg){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-items: center;
      }
      @include breakpoint(xs){
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
      }
    }
    &__title{
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
    }
    &__text{
      line-height: 25px;
      text-align: center;
      @include breakpoint(xs){
        line-height: 20px;
      }
    }
  }
  &-intro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    &__subtitle{
      line-height: 24px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      @include breakpoint(sm){
        font-size: 14px;
        line-height: 16px;
      }
      @media screen and (max-width:450px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__title{
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(sm){
        font-size: 40px;
        line-height: 54px;
      }
      @media screen and (max-width:450px) {
        font-size: 34px;
        line-height: 38px;
      }
    }
  }
}
</style>