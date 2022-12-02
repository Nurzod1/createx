<template>
  <div class="learn">
    <div class="container">
      <div class="learn-wrapper">
        <div class="learn-about">
          <div class="learn-about__wrapper">
            <div class="learn-about__title">About the course</div>
            <div class="learn-about__text">
              Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
              Leo aenean congue in sagittis, felis maecenas amet varius at.
              Pellentesque euismod in faucibus at elementum. Tellus maecenas
              libero est tempus sit cras at malesuada diam. Consequat senectus
              dictumst non hac dignissim montes, pretium, egestas molestie. Sed
              magna aliquet ornare nibh vel lectus diam eget pretium. Lorem
              risus nunc tincidunt tortor, mi nulla pellentesque
            </div>
          </div>
          <div class="learn-will">
            <div class="learn-will__title">You will learn:</div>
            <div class="learn-item">
              <div class="learn-item__text">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </div>
              <div class="learn-item__text">
                Vulputate placerat amet pulvinar lorem nisl.
              </div>
              <div class="learn-item__text">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </div>
              <div class="learn-item__text">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </div>
              <div class="learn-item__text">
                Fringilla in nec risus congue venenatis pretium posuere nec.
              </div>
              <div class="learn-item__text">
                Cursus eu pretium, vulputate tempus quam massa sed at.
              </div>
            </div>
          </div>
        </div>
        <div class="learn-card">
          <div class="learn-dates">
            <div class="learn-dates__title">Dates</div>
            <div class="learn-dates__data">Sept 7 – Nov 2</div>
            <div class="learn-dates__text">
              Metus turpis sit lorem lacus, in elit tellus lacus.
            </div>
          </div>
          <div class="learn-duration">
            <div class="learn-duration__title">Duration</div>
            <div class="learn-duration__data">2 months – 8 lessons</div>
            <div class="learn-duration__text">
              Rhoncus pellentesque auctor auctor orci vulputate faucibus quis
              ut.
            </div>
          </div>
          <div class="learn-price">
            <div class="learn-price__title">Price</div>
            <div class="learn-price__data">$120 per month</div>
            <div class="learn-price__text">
              Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
              quam ac elit tristique dis.
            </div>
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
};
</script>

<style lang="scss" scoped>
.learn {
  padding: 80px 0;

  &-wrapper {
    display: flex;
    justify-content: space-between;

    @include breakpoint(lg) {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    @include breakpoint(md) {
      flex-direction: row;
      align-items: center;
      gap: 40px;
    }
    @include breakpoint(sm) {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    @include breakpoint(sm) {
      flex-direction: row;
      align-items: center;
    }
    @include breakpoint(xs) {
      flex-direction: column;
      align-items: center;
    }
  }

  &-about {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    @include breakpoint(lg) {
      flex-direction: row;
      max-width: 100%;
    }
    @include breakpoint(md) {
      flex-direction: column;
      max-width: 50%;
    }
    @include breakpoint(sm) {
      flex-direction: row;
      max-width: 100%;
      gap: 25px;
    }
    @include breakpoint(sm) {
      flex-direction: column;
      max-width: 100%;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 490px;
      @include breakpoint(lg) {
        max-width: 450px;
      }
      @include breakpoint(md) {
        max-width: 100%;
      }
      @include breakpoint(sm) {
        max-width: 47%;
        gap: 20px;
      }
      @include breakpoint(sm) {
        max-width: 100%;
        gap: 15px;
      }
    }

    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 38px;
        line-height: 46px;
      }
      @include breakpoint(sm) {
        font-size: 30px;
        line-height: 35px;
      }
    }

    &__text {
      line-height: 25px;
      color: #424551;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 20px;
      }
      @include breakpoint(sm) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  &-will {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include breakpoint(sm) {
      gap: 20px;
    }

    &__title {
      font-size: 28px;
      line-height: 42px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 24px;
        line-height: 28px;
      }
      @include breakpoint(sm) {
        font-size: 22px;
        line-height: 26px;
        line-height: 32px;
      }
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include breakpoint(xs) {
      gap: 3px;
    }

    &__text {
      line-height: 25px;
      color: #424551;
      display: flex;
      gap: 10px;
      align-items: center;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(sm) {
        font-size: 12px;
        line-height: 14px;
      }
      &::before {
        content: url("@/assets/img/check.svg");
        padding-top: 5px;
      }
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
      0px 30px 24px -10px rgba(154, 156, 165, 0.05),
      0px 12px 10px -6px rgba(154, 156, 165, 0.04),
      0px 4px 4px -4px rgba(30, 33, 44, 0.03);
    padding: 40px 32px;
    border: 1px solid #e5e8ed;
    border-radius: 4px;

    @include breakpoint(lg) {
      width: fit-content;
      flex-direction: row;
      align-items: center;
    }
    @include breakpoint(md) {
      flex-direction: column;
      align-items: start;
      gap: 10px;
      padding: 25px 25px;
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

  &-duration {
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
        font-size: 12px;
        line-height: 16px;
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
    margin-bottom: 100px;

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