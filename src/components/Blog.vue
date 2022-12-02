<template>
  <div class="blog">
    <div class="container">
      <div class="blog-wrapper">
        <div class="blog-intro">
          <div class="blog-intro__text">
            <div class="blog-intro__subtitle">OUR BLOG</div>
            <div class="blog-intro__title">Latest posts</div>
          </div>
          <Button title="Go to blog" />
        </div>
        <div class="blogcard-wrapper">
          <BlogCard v-for="item in items" :key="item.imgUrl" :post="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
import Button from "./Button.vue";
export default {
  components: { Button, BlogCard },
  data() {
    return {
      items: [
        {
          imgUrl: require("@/assets/img/item.png"),
          icon: require("@/assets/img/mic.svg"),
          type: "Podcast",
          category: "Marketing",
          data: "September 4, 2020",
          time: "36 min",
          title: "What is traffic arbitrage and does it really make money?",
          text: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
          btn: "Listen",
        },
        {
          imgUrl: require("@/assets/img/item2.png"),
          icon: require("@/assets/img/Play.svg"),
          type: "Video",
          category: "Management",
          data: "August 25, 2020",
          time: "45 min",
          title:
            "What to do and who to talk to if you want to get feedback on the product",
          text: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
          btn: "Watch",
        },
        {
          imgUrl: require("@/assets/img/item3.png"),
          icon: require("@/assets/img/Files.svg"),
          type: "Article",
          category: "Design",
          data: "August 8, 2020",
          title:
            "Should you choose a creative profession if you are attracted to creativity?",
          text: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
          btn: "Read",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin: 80px 0;
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
    @include breakpoint(sm){
      gap: 40px;
    }
    @include breakpoint(xs){
      gap: 20px;
    }
  }
  &-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text {
      display: flex;
      flex-direction: column;
      gap: 8px;
      @include breakpoint(md) {
        gap: 0px;
      }
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      @include breakpoint(md) {
        font-size: 14px;
      }
      @include breakpoint(md) {
        font-size: 12px;
      }
      @media screen and (max-width: 450px) {
        font-size: 10px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 38px;
        line-height: 45px;
      }
      @include breakpoint(sm) {
        font-size: 32px;
        line-height: 40px;
      }
      @media screen and (max-width: 450px) {
        font-size: 26px;
        line-height: 32px;
      }
    }
  }
  .blogcard-wrapper {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    gap: 20px;
    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      gap: 20px;
    }
    @include breakpoint(sm) {
      grid-template-columns: 1fr;
    }
  }
}
</style>