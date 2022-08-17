<template>
  <div class="subfooter">
    <div class="container">
      <div class="subfooter-wrapper">
        <div class="subfooter-illustration1">
          <img src="@/assets/img/illustration2.png" alt="">
        </div>
        <div class="subfooter-text">
          <div class="subfooter-text__subtitle">Don’t miss anything</div>
          <div class="subfooter-text__title">
            Subscribe to the Createx School announcements
          </div>
        </div>
        <div class="subfooter-input">
          <input type="text" placeholder="Your working email" />
          <Button title="Subscribe" />
        </div>
        <div class="subfooter-illustration2">
          <img src="@/assets/img/illustration3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.subfooter {
  background-color: #fddcd0;
  padding: 120px 0;
  margin-top: 180px;
  position: relative;
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    text-align: center;
  }
  &-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      max-width: 810px;
    }
  }
  &-input {
    display: flex;
    gap: 24px;
    margin-bottom: 60px;
    input {
      width: 422px;
      height: 50px;
      border: none;
      border-radius: 4px;
      padding: 10px;
      outline: none;
    }
  }
  &-illustration1{
    position: absolute;
    bottom: 0;
    left: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  &-illustration2{
    position: absolute;
    bottom: 0;
    right: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>