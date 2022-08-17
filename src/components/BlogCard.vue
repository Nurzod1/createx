<template>
  <div class="blogcard">
    <div class="blogcard-wrapper">
      <div class="blogcard-img">
        <div class="blogcard-type">
          <img :src="post.icon" alt="">
          <p>{{post.type}}</p>
        </div>
        <img :src="post.imgUrl" alt="" />
      </div>
      <div class="blogcard-about">
        <div class="blogcard-info">
          <div class="blogcard-info__text">
            <p>{{post.category}}</p>
          </div>
          <div class="blogcard-info__line"></div>
          <div class="blogcard-info__text">
            <img src="@/assets/img/Calendar.svg" alt="" />
            <p>{{post.data}}</p>
          </div>
          <div class="blogcard-info__line"></div>
          <div class="blogcard-info__text">
            <img src="@/assets/img/Union.svg" alt="" />
            <p>{{post.time}}</p>
          </div>
        </div>
        <div class="blogcard-about__title">
          {{post.title}}
        </div>
        <div class="blogcard-about__text">
          {{post.text}}
        </div>
      </div>
      <button class="blogcard-btn">
        <p>{{post.btn}}</p>
        <img src="@/assets/img/Line.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blogcard {
  max-width: 390px;
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &-img{
    position: relative;
  }
  &-about {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__title {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
    }
    &__text{
      line-height: 25px;
      color: #424551;
    }
  }
  &-info {
    display: flex;
    gap: 12px;
    align-items: center;
    &__line {
      height: 12px;
      width: 1px;
      background-color: #787a80;
    }
    &__text {
      display: flex;
      gap: 8px;
      font-size: 14px;
      line-height: 21px;
      color: #787a80;
    }
  }
  &-btn{
    border: none;
    background: transparent;
    width: fit-content;
    display: flex;
    gap: 8px;
    align-items: center;
    line-height: 25px;
    font-weight: 700;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
      color: #FF3F3A;
    }
  }
  &-type{
    display: flex;
    gap: 5px;
    background-color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 4px;
    padding: 0 10px;
    align-items: center;
    height: fit-content;
    width: fit-content;
  }
}
</style>