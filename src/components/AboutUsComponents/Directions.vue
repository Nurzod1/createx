<template>
  <div class="directions">
    <div class="container">
      <div class="directions-wrapper">
        <div class="directions-intro">
          <div class="directions-intro__subtitle">our main directions</div>
          <div class="directions-intro__title">What do we teach</div>
        </div>
        <div class="directions-cards">
          <DirectionCard
            v-for="item in items"
            :key="item.imgUrl"
            :post="item"
          />
          <div class="directions-cards__new">
            <p>New studying program coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DirectionCard from "./DirectionCard.vue";
export default {
  components: { DirectionCard },
  name: "Directions",
  data() {
    return {
      items: [
        {
          imgUrl: require("@/assets/img/image2.png"),
          text: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
          btn: "Check courses",
          category: "Marketing ",
        },
        {
          imgUrl: require("@/assets/img/image3.png"),
          text: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
          btn: "Check courses",
          category: "Management",
        },
        {
          imgUrl: require("@/assets/img/image4.png"),
          text: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
          btn: "Check courses",
          category: "HR & Recruting",
        },
        {
          imgUrl: require("@/assets/img/image5.png"),
          text: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
          btn: "Check courses",
          category: "Design",
        },
        {
          imgUrl: require("@/assets/img/imag6.png"),
          text: "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
          btn: "Check courses",
          category: "Development",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.directions {
  margin: 60px 0;
  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
  &-intro {
    display: flex;
    flex-direction: column;
    text-align: center;
    &__subtitle {
      line-height: 25px;
      font-weight: 700;
      text-transform: uppercase;
      @include breakpoint(md){
        font-size: 14px;
        line-height: 20px;
      }
      @include breakpoint(xs){
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md){
        font-size: 42px;
        line-height: 54px;
      }
      @include breakpoint(xs){
        font-size: 42px;
        line-height: 50px;
      }
      @media screen and (max-width:450px) {
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
  &-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @include breakpoint(lg) {
      gap: 20px;
    }
    @include breakpoint(md) {
      gap: 10px;
    }
    @include breakpoint(sm) {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @include breakpoint(xs) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__new {
      background-color: #f4f5f6;
      display: flex;
      justify-content: center;
      align-items: center;
      @include breakpoint(xs){
        display: none;
      }
      p {
        color: #424551;
        font-size: 20px;
        line-height: 30px;
        font-weight: 700;
        text-align: center;
        max-width: 242px;
      }
    }
  }
}
</style>