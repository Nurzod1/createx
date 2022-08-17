<template>
  <div class="for">
    <div class="container">
      <div class="for-wrapper">
        <div class="for-intro">
          <div class="for-intro__subtitle">For whom?</div>
          <div class="for-intro__title">Who will benefit from the course:</div>
        </div>
        <div class="for-about">
          <div class="for-about__text">Specialists with more than 1 year of active work experience</div>
          <div class="for-about__text">Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</div>
          <div class="for-about__text">Professional designers who want to feel more confident in UX</div>
          <div class="for-about__text">Specialists who would like to structure their knowledge, fill in the gaps</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'For'
}
</script>

<style lang="scss" scoped>
.for{
  margin: 40px 0;
  &-wrapper{
    display: flex;
    justify-content: center;
    gap: 135px;
  }
  &-intro{
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 492px;
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
  &-about{
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 540px;
    &__text{
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      display: flex;
      gap: 10px;
      &::before{
        content: url('@/assets/img/check.svg');
      }
    }
  }
}
</style>