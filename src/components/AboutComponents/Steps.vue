<template>
  <div class="steps">
    <div class="container">
      <div class="steps-wrapper">
        <div class="steps-intro">
          <div class="steps-intro__subtitle">Main steps</div>
          <div class="steps-intro__title">Online learning process</div>
        </div>
        <div class="step">
          <div class="step-wrapper">
            <div class="step-progress">
              <div class="step-progress__num">01</div>
              <svg
                width="209"
                height="1"
                viewBox="0 0 209 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="208.5"
                  y2="0.499982"
                  stroke="#D7DADD"
                  stroke-linecap="round"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="step-about">
              <div class="step-about__title">
                Watching online video lectures
              </div>
              <div class="step-about__text">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </div>
            </div>
          </div>
          <div class="step-wrapper">
            <div class="step-progress">
              <div class="step-progress__num">02</div>
              <svg
                width="209"
                height="1"
                viewBox="0 0 209 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="208.5"
                  y2="0.499982"
                  stroke="#D7DADD"
                  stroke-linecap="round"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="step-about">
              <div class="step-about__title">
                Passing test
              </div>
              <div class="step-about__text">
                Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.
              </div>
            </div>
          </div>
          <div class="step-wrapper">
            <div class="step-progress">
              <div class="step-progress__num">03</div>
              <svg
                width="209"
                height="1"
                viewBox="0 0 209 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="208.5"
                  y2="0.499982"
                  stroke="#D7DADD"
                  stroke-linecap="round"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="step-about">
              <div class="step-about__title">
                Curator’s feedback
              </div>
              <div class="step-about__text">
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.
              </div>
            </div>
          </div>
          <div class="step-wrapper">
            <div class="step-progress">
              <div class="step-progress__num">04</div>
              <svg
                width="209"
                height="1"
                viewBox="0 0 209 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="208.5"
                  y2="0.499982"
                  stroke="#D7DADD"
                  stroke-linecap="round"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="step-about">
              <div class="step-about__title">
                Corrections if needed
              </div>
              <div class="step-about__text">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
};
</script>

<style lang="scss" scoped>
.steps{
  padding: 40px 0;
  &-wrapper{
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
  }
  &-intro{
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    &__subtitle{
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    &__title{
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
    }
  }
  .step{
    display: flex;
    gap: 30px;
    &-wrapper{
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 285px;
    }
    &-progress{
      display: flex;
      gap: 22px;
      align-items: center;
      &__num{
        font-size: 46px;
        line-height: 56px;
        font-weight: 900;
        color: #D7DADD;
        border: 15px solid transparent;
        border-radius: 50%;
        padding: 10px;
        transition: 0.3s;
        cursor: pointer;
        &:hover{
          border: 15px solid #FFF4F3;
          border-radius: 50%;
          background: #ffdedc;
          color: #ff3f3a;
        }
      }
    }
    &-about{
      display: flex;
      flex-direction: column;
      gap: 8px;
      &__title{
        font-size: 20px;
        line-height: 30px;
        font-weight: 700;
      }
      &__text{
        line-height: 25px;
        color: #787A80;
      }
    }
  }
}
</style>