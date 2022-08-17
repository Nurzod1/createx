<template>
  <div class="card">
    <div class="card-btn">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.833252 9.99935C0.833252 9.53911 1.20635 9.16602 1.66659 9.16602V9.99935V10.8327C1.20635 10.8327 0.833252 10.4596 0.833252 9.99935ZM18.3333 9.99935L18.3332 10.8327H1.66659V9.99935V9.16602H18.3327L18.3333 9.99935ZM18.3333 9.99935L18.3332 10.8327C18.7934 10.8327 19.1666 10.4596 19.1666 9.99935C19.1666 9.53911 18.793 9.16602 18.3327 9.16602L18.3333 9.99935Z"
          fill="#FF3F3A"
        />
      </svg>
    </div>
    <div class="card-intro__wrapper">
      <div class="card-intro">
        <div class="card-intro__lesson">Lesson 1.</div>
        <div class="card-intro__title">
          Aliquet lectus urna viverra in odio.
        </div>
      </div>
      <div class="card-intro__text">
        Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
        aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
        mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
        porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
        vitae accumsan id.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonCard",
};
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  gap: 20px;
  max-width: 600px;
  &-btn{
    padding-top: 5px;
    height: fit-content;
  }
  &-intro{
    display: flex;
    gap: 10px;
    &__wrapper{
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    &__lesson{
      font-size: 20px;
      line-height: 30px;
      color: #FF3F3A;
    }
    &__title{
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
    }
    &__text{
      line-height: 25px;
      color: #424551;
    }
  }
}
</style>