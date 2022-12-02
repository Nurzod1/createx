<template>
  <div class="blog">
    <div class="container">
      <div class="blog-wrapper">
        <div class="blog-intro">
          <div class="blog-text">
            <div class="blog-text__subtitle">Our blog</div>
            <div class="blog-text__title">You may also like</div>
          </div>
          <div class="blog-arrows">
            <div class="blog-arrows__prev">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
                  fill="#424551"
                />
              </svg>
            </div>
            <div class="blog-arrows__next">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                  fill="#424551"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="blogcard-wrapper">
          <BlogCard v-for="item in items" :key="item.imgUrl" :post="item" />
        </div>
        <div class="blog-finish">
          <p>Do you want more articles, podcasts and videos?</p>
          <Button title="Go to blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import Button from "@/components/Button.vue";
export default {
  components: { Button, BlogCard },
  name: "SinglePostBlog",
  data() {
    return {
      items: [
        {
          imgUrl: require("@/assets/img/item6.png"),
          icon: require("@/assets/img/mic.svg"),
          type: "Podcast",
          category: "Design",
          data: "July 28, 2020",
          time: "36 min",
          title: "What are color profiles and how they work in graphic design",
          text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...",
          btn: "Listen",
          span: 1,
          slug: 'Design'
        },
        {
          imgUrl: require("@/assets/img/item5.jpg"),
          icon: require("@/assets/img/Files.svg"),
          type: "Article",
          category: "Development",
          data: "September 1, 2020",
          title: "How to choose the first programming language for a beginner",
          text: "Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...",
          btn: "Read",
          span: 1,
          slug: 'Development'
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
    @include breakpoint(sm) {
      gap: 40px;
    }
    @include breakpoint(xs) {
      gap: 20px;
    }
  }
  &-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-arrows {
    display: flex;
    gap: 12px;
    &__prev {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;

      @include breakpoint(xs) {
        width: 35px;
        height: 35px;
      }
      &:hover {
        background-color: #ff3f3a;
        path {
          fill: white;
        }
      }
    }
    &__next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      transition: 0.5s;
      cursor: pointer;

      @include breakpoint(xs) {
        width: 35px;
        height: 35px;
      }
      &:hover {
        background-color: #ff3f3a;
        path {
          fill: white;
        }
      }
    }
  }
  &-text {
    &__subtitle {
      line-height: 25px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 16px;
      }
      @include breakpoint(sm) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 40px;
        line-height: 50px;
      }
      @include breakpoint(sm) {
        font-size: 34px;
        line-height: 46px;
      }
      @media screen and (max-width: 490px) {
        font-size: 28px;
        line-height: 36px;
      }
      @media screen and (max-width: 400px) {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
  .blogcard-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
  &-finish {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    p {
      font-size: 28px;
      line-height: 42px;
      font-weight: 700;
      @include breakpoint(sm) {
        font-size: 24px;
        line-height: 30px;
      }
      @media screen and (max-width: 450px) {
        font-size: 20px;
      }
    }
  }
}
</style>