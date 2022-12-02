<template>
  <div class="jobs">
    <div class="container">
      <div class="jobs-wrapper">
        <div class="jobs-intro">
          <div class="jobs-intro__subtitle">best jobs for you</div>
          <div class="jobs-intro__title">Our students work here</div>
        </div>
        <div class="jobs-icon__wrapper">
          <div class="jobs-icon">
            <img src="@/assets/img/logo4.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo5.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo6.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo7.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo8.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo9.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo10.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo11.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo12.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo13.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo14.png" alt="" />
          </div>
          <div class="jobs-icon">
            <img src="@/assets/img/logo15.png" alt="" />
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
.jobs {
  margin: 40px 0;
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
    @include breakpoint(md) {
      gap: 40px;
    }
    @include breakpoint(sm) {
      gap: 20px;
    }
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
    @include breakpoint(xs){
      gap: 0px;
    }
    &__subtitle {
      line-height: 25px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(sm) {
        font-size: 12px;
        line-height: 15px;
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
      @include breakpoint(md) {
        font-size: 40px;
        line-height: 52px;
      }
      @include breakpoint(sm) {
        font-size: 36px;
        line-height: 42px;
      }
      @media screen and (max-width: 500px) {
        font-size: 26px;
        line-height: 40px;
      }
    }
  }
  &-icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    img {
      width: 100px;
      height: 100%;
    }
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 10px;
      @include breakpoint(sm) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      @include breakpoint(xs) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media screen and (max-width: 500px) {
       grid-template-columns: 1fr 1fr; 
      }
    }
  }
}
</style>