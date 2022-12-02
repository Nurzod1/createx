<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-intro">
          <div class="header-about">
            <button class="header-about__play">
              <img src="@/assets/img/play.png" alt="" />
              <p>Play showreel</p>
            </button>
            <div class="header-about__text">
              Enjoy studying with Createx Online Courses
            </div>
            <div class="header-about__btns">
              <Button title="About Us" />
              <Button title="Explore courses" />
            </div>
          </div>
          <div class="header-img">
            <img src="@/assets/img/illustration.png" alt="" />
          </div>
        </div>
        <div class="header-achievement">
          <div class="header-achievement__item">
            <p>1200</p>
            <span>Students graduated</span>
          </div>
          <div class="header-achievement__dot"></div>
          <div class="header-achievement__item">
            <p>84</p>
            <span>Completed courses</span>
          </div>
          <div class="header-achievement__dot"></div>
          <div class="header-achievement__item">
            <p>16</p>
            <span>Qualified tutors</span>
          </div>
          <div class="header-achievement__dot"></div>
          <div class="header-achievement__item">
            <p>5</p>
            <span>Years of experience</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  padding: 80px 0;
  background-color: #fedad5;
  @include breakpoint(md) {
    padding: 60px 0;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 190px;
    @include breakpoint(lg) {
      gap: 90px;
    }
    @include breakpoint(md) {
      gap: 50px;
    }
  }
  &-intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include breakpoint(sm) {
      flex-direction: column;
      gap: 30px;
    }
    @include breakpoint(sm) {
      gap: 10px;
    }
  }
  &-about {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    &__play {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: center;
      max-width: 191px;
      @include breakpoint(xs) {
        gap: 4px;
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
    &__text {
      font-size: 64px;
      line-height: 83px;
      font-weight: 900;
      max-width: 496px;
      margin-bottom: 60px;
      @include breakpoint(lg) {
        font-size: 46px;
        line-height: 54px;
        margin-bottom: 30px;
      }
      @include breakpoint(sm) {
        font-size: 35px;
        line-height: 46px;
      }
      @media screen and (max-width: 415px) {
        font-size: 25px;
        line-height: 36px;
        margin-bottom: 20px;
      }
    }
    &__btns {
      display: flex;
      gap: 20px;
    }
  }
  &-achievement {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @include breakpoint(sm) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-self: center;
      gap: 40px;
    }
    @include breakpoint(xs){
      gap: 20px;
    }
    &__item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #1e212c;
      @include breakpoint(md) {
        flex-direction: column;
        gap: 4px;
      }
    }
    p {
      font-size: 46px;
      line-height: 130%;
      font-weight: 900;
      @media screen and (max-width: 450px){
        font-size: 35px;
        line-height: 46px;
        font-weight: 700;
      }
      @media screen and (max-width: 360px) {
        font-size: 24px;
        line-height: 36px;
        font-weight: 700;
      }
    }
    span {
      @media screen and (max-width: 360px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__dot {
      background-color: #ff3f3a;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      @include breakpoint(sm) {
        display: none;
      }
    }
  }
  &-img {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
      @include breakpoint(md) {
        width: 80%;
        height: 80%;
      }
      @include breakpoint(sm) {
        width: 60%;
        height: 60%;
      }
    }
  }
}
</style>