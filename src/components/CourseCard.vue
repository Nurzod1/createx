<template>
    <div class="card" @click="$router.push(`/course/${post.slug}`)">
      <div class="card-wrapper">
        <div class="card-img">
          <img :src="post.imgUrl" alt="" />
        </div>
        <div class="card-info">
          <div class="card-info__category">{{ post.category }}</div>
          <div class="card-info__text">
            {{ post.text }}
          </div>
          <div class="card-about">
            <div class="card-about__price">{{ post.price }}</div>
            <div class="card-about__line"></div>
            <div class="card-about__autor">{{ post.autor }}</div>
          </div>
        </div>
      </div>
    </div>
</template> 

<script>
export default {
  name: "FeatureCard",
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
  width: fit-content;
  height: 438px;
  transition: 0.3s;
  border: 1px solid #e5e8ed;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  &:hover {
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16),
      0px 30px 24px -10px rgba(154, 156, 165, 0.1),
      0px 12px 10px -6px rgba(154, 156, 165, 0.08),
      0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  &-img {
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px 0px 0px 4px;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 30px;
    &__category {
      font-size: 14px;
      line-height: 21px;
      background-color: #03cea4;
      width: fit-content;
      padding: 1px 8px;
      border-radius: 4px;
      color: #fff;
    }
    &__text {
      font-size: 20px;
      line-height: 150%;
      font-weight: 700;
      max-width: 322px;
    }
  }
  &-about {
    display: flex;
    gap: 8px;
    align-items: center;
    &__line {
      height: 16px;
      width: 1px;
      background-color: #787a80;
    }
    &__price {
      font-size: 18px;
      line-height: 150%;
      font-weight: 700;
      color: #ff4242;
    }
    &__autor {
      font-size: 18px;
      line-height: 150%;
      color: #787a80;
    }
  }
}
</style>