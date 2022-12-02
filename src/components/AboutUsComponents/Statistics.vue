<template>
  <div class="statistics">
    <div class="container">
      <div class="statistics-wrapper">
        <div class="statistics-media">
          <div class="statistics-media__btn">
            <button class="statistics-media__play">
              <img src="@/assets/img/play.png" alt="" />
              <p>Play showreel</p>
            </button>
          </div>
          <div class="statistics-media__img">
            <img src="@/assets/img/image1.png" alt="" />
          </div>
        </div>
        <div class="statistics-item__wrapper">
          <div class="statistics-item">
            <div class="statistics-item__num">1200</div>
            <div class="statistics-item__text">students graduated</div>
          </div>
          <div class="statistics-item">
            <div class="statistics-item__num">84</div>
            <div class="statistics-item__text">completed courses</div>
          </div>
          <div class="statistics-item">
            <div class="statistics-item__num">16</div>
            <div class="statistics-item__text">qualified tutors</div>
          </div>
          <div class="statistics-item">
            <div class="statistics-item__num">5</div>
            <div class="statistics-item__text">years of experience</div>
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
.statistics {
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include breakpoint(sm){
      flex-direction: column;
      gap: 20px;
      text-align: center;
      justify-content: center;
    }
  }
  &-media {
    max-width: 65%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @include breakpoint(md){
      max-width: 55%;
      gap: 15px;
    }
    @include breakpoint(sm){
      max-width: 100%;
    }
    &__play {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: center;
      max-width: 191px;
      @include breakpoint(md) {
        gap: 0px;
      }
      img {
        border: 12px solid transparent;
        border-radius: 50%;
        transition: 0.3s;
      }
      &:hover {
        img {
          border: 12px solid #fec8c0;
        }
      }
      p {
        font-size: 12px;
        line-height: 21px;
        font-weight: 700;
      }
    }
    &__img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &-item{
    display: flex;
    gap: 16px;
    align-items: center;
    @include breakpoint(sm){
      justify-content: center;
      gap: 10px;
    }
    &__wrapper{
      display: flex;
      flex-direction: column;
      gap: 20px;
      @include breakpoint(md){
        gap: 10px;
      }
      @include breakpoint(sm){
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        align-items: center;
      }
      @include breakpoint(xs){
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
    &__num{
      font-size: 48px;
      line-height: 62px;
      font-weight: 900;
      color: #FF3F3A;
      @include breakpoint(md){
        font-size: 36px;
        line-height: 42px;
      }
      @media screen and (max-width:450px) {
        font-size: 28px;
        line-height: 34px;  
      }
    }
    &__text{
      font-size: 18px;
      line-height: 27px;
      font-weight: 700;
      @media screen and (max-width:450px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
}
</style>