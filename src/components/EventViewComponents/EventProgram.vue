<template>
  <div class="program">
    <div class="container">
      <div class="program-wrapper">
        <div class="program-about">
          <div class="program-intro">
            <div class="program-intro__subtitle">Course program</div>
            <div class="program-intro__title">What will you learn</div>
          </div>
          <div class="program-about__items">
            <LessonCard
              v-for="(card, idx) in cards"
              :key="card.title"
              :active="activeCardIdx === idx"
              @active:update="setActiveCard(idx)"
            />
          </div>
        </div>
        <div class="program-card">
          <div class="program-dates">
            <div class="program-dates__title">Time</div>
            <div class="program-dates__data">August 5, 11:00 – 14:00</div>
            <div class="program-dates__text">
              Metus turpis sit lorem lacus, in elit tellus lacus.
            </div>
          </div>
          <div class="program-price">
            <div class="program-price__title">Price</div>
            <div class="program-price__data">Free</div>
            <div class="program-price__text">
              Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
              quam ac elit tristique dis.
            </div>
          </div>
          <button class="program-btn">Event on Facebook</button>
          <Button title="Join the course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LessonCard from "@/components/AboutComponents/LessonCard.vue";
import Button from "../Button.vue";
export default {
  name: "Program",
  components: { LessonCard, Button },
  data() {
    return {
      activeCardIdx: null,
      cards: [
        {
          title: "1",
        },
        {
          title: "2",
        },
        {
          title: "3",
        },
        {
          title: "4",
        },
        {
          title: "5",
        },
      ],
    };
  },
  methods: {
    setActiveCard(index) {
      if (this.activeCardIdx === index) this.activeCardIdx = null;
      else this.activeCardIdx = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.program {
  margin: 40px 0;
  &-wrapper {
    display: flex;
    justify-content: space-between;
    @include breakpoint(md){
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
  &-btn{
    border: none;
    background-color: transparent;
    display: flex;
    text-transform: uppercase;
    text-decoration: underline;
    color: #ff3f3a;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include breakpoint(md) {
      text-align: center;
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      @include breakpoint(sm) {
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(lg) {
        font-size: 38px;
        line-height: 50px;
      }
      @include breakpoint(sm) {
        font-size: 28px;
        line-height: 40px;
      }
      @media screen and (max-width: 450px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
  &-about {
    display: flex;
    flex-direction: column;

    @include breakpoint(sm) {
      flex-direction: column;
      gap: 20px;
    }
    &__img {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        @include breakpoint(lg) {
          width: 90%;
          height: 90%;
        }
        @include breakpoint(lg) {
          display: none;
        }
      }
    }
  }
  &-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: fit-content;
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
      0px 30px 24px -10px rgba(154, 156, 165, 0.05),
      0px 12px 10px -6px rgba(154, 156, 165, 0.04),
      0px 4px 4px -4px rgba(30, 33, 44, 0.03);
    padding: 40px 32px;
    border: 1px solid #e5e8ed;
    border-radius: 4px;

    @include breakpoint(md){

    }
  }
  &-dates {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 431px;

    @include breakpoint(sm) {
      gap: 0px;
    }
    &__title {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
      @include breakpoint(lg) {
        font-size: 12px;
        line-height: 16px;
      }
      @include breakpoint(sm) {
        font-size: 10px;
        line-height: 14px;
      }
    }

    &__data {
      font-size: 24px;
      line-height: 130%;
      font-weight: 700;
      color: #ff3f3a;
      @include breakpoint(lg) {
        font-size: 22px;
        line-height: 26px;
      }
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
      @include breakpoint(sm) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &__text {
      line-height: 160%;
      color: #787a80;
      @include breakpoint(lg) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(sm) {
        font-size: 10px;
        line-height: 14px;
      }
    }
  }

  &-price {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 431px;
    margin-bottom: 70px;

    @include breakpoint(lg) {
      margin-bottom: 0px;
    }
    @include breakpoint(md) {
      margin-bottom: 60px;
    }
    @include breakpoint(sm) {
      margin-bottom: 30px;
      gap: 0px;
    }

    &__title {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
      @include breakpoint(lg) {
        font-size: 12px;
        line-height: 16px;
      }
      @include breakpoint(sm) {
        font-size: 10px;
        line-height: 14px;
      }
    }

    &__data {
      font-size: 24px;
      line-height: 130%;
      font-weight: 700;
      color: #ff3f3a;
      @include breakpoint(lg) {
        font-size: 22px;
        line-height: 26px;
      }
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 22px;
      }
      @include breakpoint(sm) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &__text {
      line-height: 160%;
      color: #787a80;
      @include breakpoint(lg) {
        font-size: 12px;
        line-height: 16px;
      }
      @include breakpoint(sm) {
        font-size: 10px;
        line-height: 14px;
      }
    }
  }
}
</style>