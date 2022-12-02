<template>
  <div class="blog">
    <div class="container">
      <div class="blog-wrapper">
        <div class="blog-intro">
          <div class="blog-intro__subtitle">Our blog</div>
          <div class="blog-intro__title">Createx School Journal</div>
        </div>
        <div class="blog-filter">
          <div class="blog-type">
            <div class="blog-type__btn">All</div>
            <div class="blog-type__btn">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.3335 8.99967C3.3335 8.63148 3.63197 8.33301 4.00016 8.33301H8.00016C8.36835 8.33301 8.66683 8.63148 8.66683 8.99967C8.66683 9.36786 8.36835 9.66634 8.00016 9.66634H4.00016C3.63197 9.66634 3.3335 9.36786 3.3335 8.99967Z"
                  fill="#9A9CA5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.3335 11.4997C3.3335 11.1315 3.63197 10.833 4.00016 10.833H6.00016C6.36835 10.833 6.66683 11.1315 6.66683 11.4997C6.66683 11.8679 6.36835 12.1663 6.00016 12.1663H4.00016C3.63197 12.1663 3.3335 11.8679 3.3335 11.4997Z"
                  fill="#9A9CA5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.02877 1.02827C4.1538 0.903246 4.32337 0.833008 4.50018 0.833008H9.00018C10.4729 0.833008 11.6668 2.02692 11.6668 3.49967L11.6668 12.4997C11.6668 13.9724 10.4729 15.1663 9.00018 15.1663H3.00016C1.5274 15.1663 0.333492 13.9724 0.333496 12.4997L0.333513 4.99967C0.333513 4.82286 0.403751 4.65329 0.528775 4.52827L4.02877 1.02827ZM4.33349 2.60917V4.83301H2.10965L4.33349 2.60917ZM1.66684 6.16634L1.66683 12.4997C1.66683 13.2361 2.26378 13.833 3.00016 13.833H9.00018C9.73656 13.833 10.3335 13.2361 10.3335 12.4997L10.3335 3.49967C10.3335 2.76329 9.73656 2.16634 9.00018 2.16634H5.66682V5.49967C5.66682 5.86786 5.36835 6.16634 5.00016 6.16634H1.66684Z"
                  fill="#9A9CA5"
                />
              </svg>
              <p>Articles</p>
            </div>
            <div class="blog-type__btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7117 6.941C11.4099 7.47465 11.4099 8.52605 10.7117 9.0597L7.65841 11.3933C6.78101 12.0639 5.51541 11.4383 5.51541 10.334V5.66673C5.51541 4.56241 6.78101 3.93678 7.65841 4.60738L10.7117 6.941ZM9.90204 8.00035L6.84875 5.66673L6.84875 10.334L9.90204 8.00035Z"
                  fill="#9A9CA5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99984 2.00033C4.68613 2.00033 1.99984 4.68662 1.99984 8.00033C1.99984 11.314 4.68613 14.0003 7.99984 14.0003C11.3135 14.0003 13.9998 11.314 13.9998 8.00033C13.9998 4.68662 11.3135 2.00033 7.99984 2.00033ZM0.666504 8.00033C0.666504 3.95024 3.94975 0.666992 7.99984 0.666992C12.0499 0.666992 15.3332 3.95024 15.3332 8.00033C15.3332 12.0504 12.0499 15.3337 7.99984 15.3337C3.94975 15.3337 0.666504 12.0504 0.666504 8.00033Z"
                  fill="#9A9CA5"
                />
              </svg>
              <p>Videos</p>
            </div>
            <div class="blog-type__btn">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.13333 4.26706C2.13333 2.13156 3.8645 0.400391 6 0.400391C8.1355 0.400391 9.86667 2.13156 9.86667 4.26706V7.46706C9.86667 9.60256 8.1355 11.3337 6 11.3337C3.8645 11.3337 2.13333 9.60256 2.13333 7.46706V4.26706ZM6 1.73372C4.60088 1.73372 3.46667 2.86794 3.46667 4.26706V7.46706C3.46667 8.86618 4.60088 10.0004 6 10.0004C7.39912 10.0004 8.53333 8.86618 8.53333 7.46706V4.26706C8.53333 2.86794 7.39912 1.73372 6 1.73372Z"
                  fill="#9A9CA5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.666667 5.73372C1.03486 5.73372 1.33333 6.0322 1.33333 6.40039V7.46706C1.33333 10.0444 3.42267 12.1337 6 12.1337C8.57733 12.1337 10.6667 10.0444 10.6667 7.46706V6.40039C10.6667 6.0322 10.9651 5.73372 11.3333 5.73372C11.7015 5.73372 12 6.0322 12 6.40039V7.46706C12 10.7808 9.31371 13.4671 6 13.4671C2.68629 13.4671 0 10.7808 0 7.46706V6.40039C0 6.0322 0.298477 5.73372 0.666667 5.73372Z"
                  fill="#9A9CA5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 12.6671C6.36819 12.6671 6.66667 12.9655 6.66667 13.3337V14.2671H8.13333C8.50152 14.2671 8.8 14.5655 8.8 14.9337C8.8 15.3019 8.50152 15.6004 8.13333 15.6004H3.86667C3.49848 15.6004 3.2 15.3019 3.2 14.9337C3.2 14.5655 3.49848 14.2671 3.86667 14.2671H5.33333V13.3337C5.33333 12.9655 5.63181 12.6671 6 12.6671Z"
                  fill="#9A9CA5"
                />
              </svg>
              <p>Podcasts</p>
            </div>
          </div>
          <div class="blog-category">
            <div class="blog-category__select">
              <p>Blog category</p>
              <select name="" id="">
                <option value="">all themes</option>
              </select>
            </div>
            <div class="blog-category__search">
              <input type="text" placeholder="Search blog..." />
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.25016 2.16634C4.44272 2.16634 2.16683 4.44223 2.16683 7.24967C2.16683 10.0571 4.44272 12.333 7.25016 12.333C8.65276 12.333 9.92161 11.7658 10.842 10.8467C11.7642 9.92589 12.3335 8.6549 12.3335 7.24967C12.3335 4.44223 10.0576 2.16634 7.25016 2.16634ZM0.833496 7.24967C0.833496 3.70585 3.70634 0.833008 7.25016 0.833008C10.794 0.833008 13.6668 3.70585 13.6668 7.24967C13.6668 8.78248 13.1287 10.1905 12.2321 11.2939L14.9711 14.0278C15.2317 14.2879 15.2321 14.7101 14.972 14.9706C14.7119 15.2312 14.2898 15.2316 14.0292 14.9715L11.2888 12.2362C10.1863 13.13 8.78039 13.6663 7.25016 13.6663C3.70634 13.6663 0.833496 10.7935 0.833496 7.24967Z"
                    fill="#9A9CA5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="blog-cards">
          <BlogCard v-for="item in items" :key="item.imgUrl" :post="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../BlogCard.vue";
export default {
  components: { BlogCard },
  name: "OurBlog",
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
          span: 1,
          slug: 'Marketing'
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
          btn: "Watch",
          span: 1,
          slug: 'Design'
        },
        {
          imgUrl: require("@/assets/img/item4.jpg"),
          icon: require("@/assets/img/Files.svg"),
          type: "Article",
          category: "HR & Recruting",
          data: "August 3, 2020",
          title:
            "HR statistics: job search,  interviews, hiring and recruiting",
          text: "Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...",
          btn: "Read",
          span: 2,
          slug: 'HR & Recruting'
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
          span: 1,
          slug: 'Management'
        },
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
          imgUrl: require("@/assets/img/item7.png"),
          icon: require("@/assets/img/Play.svg"),
          type: "Video",
          category: "Management",
          data: "July 15, 2020",
          time: "45 min",
          title:
            "Startup: how to build a team that will live longer than a year",
          text: "Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...",
          btn: "Watch",
          span: 1,
          slug: 'Management'
        },
        {
          imgUrl: require("@/assets/img/item8.jpg"),
          icon: require("@/assets/img/Files.svg"),
          type: "Article",
          category: "Marketing",
          data: "July 9, 2020",
          title: "How to get customers to love your business from the start",
          text: "Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...",
          btn: "Read",
          span: 1,
          slug: 'Marketing'
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.blog {
  margin: 150px 0;
  margin-bottom: 40px;
  @include breakpoint(lg){
    margin: 100px 0;
  }
  @include breakpoint(md){
    margin: 70px 0;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include breakpoint(sm){
      gap: 20px;
    }
  }
  &-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &__subtitle {
      line-height: 25px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      @include breakpoint(sm){
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(xs){
        font-size: 12px;
        line-height: 15px;
      }
      @media screen and (max-width: 450px) {
        font-size: 10px;
        line-height: 12px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(sm){
        font-size: 40px;
        line-height: 52px;
      }
      @include breakpoint(xs){
        font-size: 34px;
        line-height: 40px;
      }
      @media screen and (max-width: 450px) {
        font-size: 28px;
        line-height: 34px;
      }
    }
  }
  &-filter {
    display: flex;
    justify-content: space-between;
    @include breakpoint(lg){
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
  }
  &-type {
    display: flex;
    gap: 12px;
    @media screen and (max-width: 440px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
    }
    &__btn {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 2px 10px;
      border: 1px solid transparent;
      border-radius: 4px;
      line-height: 25px;
      font-weight: 700;
      justify-content: center;
      color: #9a9ca5;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        border: 1px solid #ff3f3a;
        color: #ff3f3a;
        path {
          transition: 0.3s;
          fill: #ff3f3a;
        }
      }
    }
  }
  &-category {
    display: flex;
    align-items: center;
    gap: 42px;
    @include breakpoint(sm){
      flex-direction: column;
      gap: 10px;
    }
    &__search {
      display: flex;
      input {
        background: transparent;
        border: 1px solid #d7dadd;
        border-right: none;
        border-radius: 4px 0px 0px 4px;
        outline: none;
        padding: 12px;
        height: fit-content;
        width: 282px;
        @include breakpoint(lg) {
          width: 250px;
        }
        @include breakpoint(md) {
          width: 200px;
        }
        @include breakpoint(xs) {
          padding: 8px;
          width: 150px;
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        background-color: transparent;
        border: 1px solid #d7dadd;
        border-left: none;
        border-radius: 0px 4px 4px 0px;
        padding: 12px 8px 12px 12px;
        @include breakpoint(xs) {
          padding: 8px 14px 7px 8px;
        }
        path {
          transition: 0.3s;
        }
        &:hover {
          cursor: pointer;
          path {
            fill: black;
          }
        }
      }
    }
    &__select {
      display: flex;
      gap: 12px;
      line-height: 25px;
      font-weight: 700;
      color: #424551;
      align-items: center;
      select {
        border: 1px solid #d7dadd;
        border-radius: 4px;
        padding: 11px 80px;
        padding-left: 20px;
        color: #424551;
        // @include breakpoint(sm){
        //   width: 100%;
        // }
      }
    }
  }
  &-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @include breakpoint(xl) {
      grid-template-columns: 1fr 1fr;
    }
    @include breakpoint(md) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;

    }
  }
}
</style>