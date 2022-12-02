<template>
  <div class="program">
    <div class="container">
      <div class="program-wrapper">
        <div class="program-intro">
          <div class="program-intro__subtitle">Course program</div>
          <div class="program-intro__title">What will you learn</div>
        </div>
        <div class="program-about">
          <div class="program-about__items">
            <LessonCard
              v-for="(card, idx) in cards"
              :key="card.title"
              :active="activeCardIdx === idx"
              @active:update="setActiveCard(idx)"
            />
          </div>
          <div class="program-about__img">
            <img src="@/assets/img/illustration4.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LessonCard from './LessonCard.vue';
export default {
  name: "Program",
  components: { LessonCard },
  data() {
    return {
      activeCardIdx: null,
      cards: [
        {
          title: '1'
        },
        {
          title: '2'
        },
        {
          title: '3'
        },
        {
          title: '4'
        },
        {
          title: '5'
        }
      ]
    }
  },
  methods: {
    setActiveCard(index) {
      if (this.activeCardIdx === index) this.activeCardIdx = null
      else this.activeCardIdx = index
    }
  }
};
</script>

<style lang="scss" scoped>
.program{
  &-intro{
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-self: center;

    @include breakpoint(sm){
      text-align: center;
    }
    &__subtitle{
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      @include breakpoint(sm){
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__title{
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(lg){
        font-size: 38px;
        line-height: 50px;
      }
      @include breakpoint(sm){
        font-size: 28px;
        line-height: 40px;
      }
      @media screen and (max-width: 450px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
  &-about{
    display: flex;
    justify-content: space-between;

    @include breakpoint(sm){
      flex-direction: column;
      gap: 20px;
    }
    &__items{
      margin-top: 60px;
      @include breakpoint(lg){
        margin-top: 20px;
      }
    }
    &__img{
      display: flex;
      justify-content: center;
      img{
        width: 100%;
        height: 100%;
        @include breakpoint(lg){
          width: 90%;
          height: 90%;
        }
        @include breakpoint(lg){
          display: none;
        }
      }
    }
  }
}
</style>