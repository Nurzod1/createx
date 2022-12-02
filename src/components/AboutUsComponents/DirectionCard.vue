<template>
  <div class="card">
    <div class="card-img">
      <img :src="post.imgUrl" alt="" />
    </div>
    <div class="card-about">
      <div class="card-about__category">{{ post.category }}</div>
      <div class="card-about__title">{{ post.title }}</div>
      <div class="card-about__text">{{ post.text }}</div>
      <div class="card-about__btn">
        <p>{{ post.btn }}</p>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
            fill="#FF3F3A"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: { Button },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 390px;
  border: 1px solid #e5e8ed;
  border-radius: 4px;
  @include breakpoint(lg) {
    gap: 20px;
  }
  &-img {
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-about {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    padding-top: 0;
    @include breakpoint(lg) {
      gap: 5px;
      padding: 10px;
      padding-top: 0px;
    }
    @include breakpoint(xs) {
      gap: 10px;
      padding: 20px;
      padding-top: 0px;
    }
    &__category {
      width: fit-content;
      color: #fff;
      padding: 1px 8px;
      line-height: 25px;
      font-weight: 700;
      background-color: #03cea4;
      border-radius: 4px;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
      }
    }
    &__text {
      line-height: 24px;
      color: #787a80;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 17px;
      }
    }
    &__btn {
      display: flex;
      gap: 10px;
      align-items: center;
      padding-top: 4px;
      p {
        line-height: 24px;
        font-weight: 700;
        @include breakpoint(md) {
          font-size: 14px;
          line-height: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>