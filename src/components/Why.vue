<template>
  <div class="why">
    <div class="container">
      <div class="why-wrapper">
        <div class="why-img">
          <img src="@/assets/img/image.png" alt="">
        </div>
        <div class="why-about">
          <div class="why-about__subtitle">WHO WE ARE</div>
          <div class="why-about__title">Why Createx?</div>
          <div class="why-info">
            <div class="why-info__text">A fermentum in morbi pretium aliquam adipiscing donec tempus.</div>
            <div class="why-info__text">Vulputate placerat amet pulvinar lorem nisl.</div>
            <div class="why-info__text">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</div>
            <div class="why-info__text">Etiam duis lobortis in fames ultrices commodo nibh.</div>
            <div class="why-info__text">Tincidunt sagittis neque sem ac eget.</div>
            <div class="why-info__text">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</div>
          </div>
          <Button title="More about us"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
  name: 'Why'
}
</script>

<style lang="scss" scoped>
.why{
  padding: 80px;
  &-wrapper{
    display: flex;
    gap: 135px;
  }
  &-about{
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__subtitle{
      font-weight: 700;
      line-height: 24px;
    }
    &__title{
      font-size: 46px;
      line-height: 56px;
      font-weight: 900;
    }
  }
  &-info{
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 32px 0;
    &__text{
      display: flex;
      gap: 12px;
      max-width: 420px;
      line-height: 25px;
      align-items: center;
      &::before{
        content: url('@/assets/img/check.svg');
      }
    }
  }
}
</style>