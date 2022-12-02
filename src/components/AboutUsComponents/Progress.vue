<template>
  <div class="progress">
    <div class="container">
      <div class="progress-wrapper">
        <div class="progress-about">
          <div class="progress-about__intro">
            <div class="progress-about__subtitle">Studying process</div>
            <div class="progress-about__title">That’s how we do it</div>
          </div>
          <div class="progress-steps">
            <div class="progress-step">
              <div class="progress-border">
                <div class="progress-border__ellipse"></div>
                <div class="progress-border__line"></div>
              </div>
              <div class="progress-step__wrapper">
                <div class="progress-step__subtitle">STEP 1</div>
                <div class="progress-step__title">Watching online video lectures</div>
                <div class="progress-step__text">
                  Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.
                </div>
              </div>
            </div>
            <div class="progress-step">
              <div class="progress-border">
                <div class="progress-border__ellipse"></div>
                <div class="progress-border__line"></div>
              </div>
              <div class="progress-step__wrapper">
                <div class="progress-step__subtitle">STEP 2</div>
                <div class="progress-step__title">Passing test</div>
                <div class="progress-step__text">
                  Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. 
                </div>
              </div>
            </div>
            <div class="progress-step">
              <div class="progress-border">
                <div class="progress-border__ellipse"></div>
                <div class="progress-border__line"></div>
              </div>
              <div class="progress-step__wrapper">
                <div class="progress-step__subtitle">STEP 3</div>
                <div class="progress-step__title">Curator’s feedback</div>
                <div class="progress-step__text">
                  Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. 
                </div>
              </div>
            </div>
            <div class="progress-step">
              <div class="progress-border">
                <div class="progress-border__ellipse"></div>
                <div class="progress-border__line"></div>
              </div>
              <div class="progress-step__wrapper">
                <div class="progress-step__subtitle">STEP 4</div>
                <div class="progress-step__title">Corrections if needed</div>
                <div class="progress-step__text">
                  Non tempor pulvinar tincidunt aliquam. Placerat ultricies
                  malesuada dui auctor.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="progress-img">
          <img src="@/assets/img/illustration9.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
};
</script>

<style lang="scss" scoped>
.progress {
  margin: 80px 0;
  @include breakpoint(sm){
    margin: 60px 0;
  }
  @include breakpoint(xs){
    margin: 30px 0;
  }
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include breakpoint(md){
      flex-direction: column;
      gap: 30px;
    }
  }
  &-about {
    max-width: 40%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    @include breakpoint(lg){
      max-width: 47%;
      gap: 30px;
    }
    @include breakpoint(md){
      max-width: 100%;
    }
    &__intro {
      display: flex;
      flex-direction: column;
      gap: 8px;
      @include breakpoint(lg){
        gap: 0px;
      }
    }
    &__subtitle {
      line-height: 25px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      @include breakpoint(md){
        font-size: 14px;
        line-height: 18px;
      }
      @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md){
       font-size: 40px;
       line-height: 56px; 
      }
      @media screen and (max-width: 450px) {
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
  &-steps {
    display: flex;
    flex-direction: column;
    gap: 27px;
    @include breakpoint(lg){
      gap: 20px;
    }
    @include breakpoint(md){
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @include breakpoint(xs){
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  &-step {
    display: flex;
    gap: 10px;
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
      @include breakpoint(sm){
        gap: 3px;
      }
    }
    &__subtitle {
      font-size: 12px;
      line-height: 18px;
      font-weight: 900;
      color: #787a80;
      @include breakpoint(sm){
        font-size: 10px;
        line-height: 12px;
      }
    }
    &__title {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      @include breakpoint(sm){
        font-size: 18px;
        line-height: 22px;
      }
    }
    &__text {
      line-height: 25px;
      color: #787a80;
      @include breakpoint(sm){
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  &-border{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5px;
    align-items: center;
    gap: 10px;
    &__ellipse{
      width: 10px;
      height: 10px;
      background-color: #FF3F3A;
      border-radius: 50%;
    }
    &__line{
      width: 1px;
      height: 90%;
      background-color: #9A9CA5;
    }
  }
  &-img {
    max-width: 50%;
    @include breakpoint(md){
      max-width: 40%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>