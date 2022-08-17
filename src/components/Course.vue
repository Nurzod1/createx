<template>
  <div class="course">
    <div class="container">
      <div class="course-wrapper">
        <div class="course-intro__wrapper">
          <div class="course-intro">
            <div class="course-intro__subtitle">Enjoy your studying!</div>
            <div class="course-intro__title">Our online courses</div>
          </div>
          <div class="course-filter">
            <div class="course-filter__wrapper">
              <button class="course-filter__btn">All</button>
              <button class="course-filter__btn">Marketing</button>
              <button class="course-filter__btn">Management</button>
              <button class="course-filter__btn">HR & Recruting</button>
              <button class="course-filter__btn">Design</button>
              <button class="course-filter__btn">Development</button>
            </div>
            <div class="course-search">
              <input type="text" placeholder="Search course..." />
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
        <div class="course-card">
          <CourseCard v-for="item in items" :key="item.imgUrl" :post="item" />
        </div>
        <div class="course-btn">
          <button>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.09961 0C1.65189 0 2.09961 0.447715 2.09961 1V5.43632C3.75764 2.20928 7.11959 0 10.9996 0C15.3552 0 19.058 2.78413 20.4303 6.66675C20.6144 7.18747 20.3414 7.75879 19.8207 7.94284C19.3 8.12689 18.7287 7.85396 18.5446 7.33325C17.4459 4.22472 14.4813 2 10.9996 2C8.03957 2 5.45326 3.60799 4.06955 6H7.09957C7.65186 6 8.09957 6.44772 8.09957 7C8.09957 7.55228 7.65186 8 7.09957 8H1.09961C0.547325 8 0.0996094 7.55228 0.0996094 7V1C0.0996094 0.447715 0.547325 0 1.09961 0Z"
                fill="#424551"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.17664 12.0572C2.69736 11.8731 3.26868 12.146 3.45273 12.6668C4.55144 15.7753 7.51608 18 10.9978 18C13.9578 18 16.5441 16.392 17.9278 14H14.8978C14.3455 14 13.8978 13.5523 13.8978 13C13.8978 12.4477 14.3455 12 14.8978 12H20.8977C21.45 12 21.8977 12.4477 21.8977 13V19C21.8977 19.5523 21.45 20 20.8977 20C20.3455 20 19.8977 19.5523 19.8977 19V14.5637C18.2397 17.7907 14.8778 20 10.9978 20C6.64215 20 2.93936 17.2159 1.56705 13.3332C1.383 12.8125 1.65593 12.2412 2.17664 12.0572Z"
                fill="#424551"
              />
            </svg>
            <p>Load more</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";
export default {
  components: { CourseCard },
  data() {
    return {
      items: [
        {
          imgUrl: require("@/assets/img/card1.png"),
          category: "Marketing",
          text: "The Ultimate Google Ads Training Course",
          price: "$100",
          autor: "by Jerome Bell",
          slug: 'design'
        },
        {
          imgUrl: require("@/assets/img/card2.png"),
          category: "Management",
          text: "Prduct Management Fundamentals",
          price: "$480",
          autor: "by Marvin McKinney",
        },
        {
          imgUrl: require("@/assets/img/card3.png"),
          category: "HR & Recruting",
          text: "HR  Management and Analytics",
          price: "$200",
          autor: "by Leslie Alexander Li",
        },
        {
          imgUrl: require("@/assets/img/card4.png"),
          category: "Marketing",
          text: "Brand Management & PR Communications",
          price: "$530",
          autor: "by Kristin Watson",
        },
        {
          imgUrl: require("@/assets/img/card5.png"),
          category: "Management",
          text: "The Ultimate Google Ads Training Course",
          price: "4100",
          autor: "by Dianne Russell",
        },
        {
          imgUrl: require("@/assets/img/card6.png"),
          category: "Design",
          text: "Graphic Design Basic",
          price: "$500",
          autor: "by Guy Hawkins",
        },
        {
          imgUrl: require("@/assets/img/card7.png"),
          category: "Marketing",
          text: "Brand Management & PR Communications",
          price: "$530",
          autor: "by Kristin Watson",
        },
        {
          imgUrl: require("@/assets/img/card8.png"),
          category: "Management",
          text: "The Ultimate Google Ads Training Course",
          price: "4100",
          autor: "by Dianne Russell",
        },
        {
          imgUrl: require("@/assets/img/card9.png"),
          category: "Design",
          text: "Graphic Design Basic",
          price: "$500",
          autor: "by Guy Hawkins",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.course {
  padding-top: 150px;
  &-btn {
    display: flex;
    justify-content: center;
    margin: 40px 0;
    button {
      display: flex;
      border: none;
      background: transparent;
      gap: 17px;
      align-items: center;
      line-height: 25px;
      font-weight: 700;
      padding: 7px 15px;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s;
      path {
        transition: 0.3s;
      }
      &:hover {
        color: #ff3f3a;
        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16),
          0px 30px 24px -10px rgba(154, 156, 165, 0.1),
          0px 12px 10px -6px rgba(154, 156, 165, 0.08),
          0px 4px 4px -4px rgba(30, 33, 44, 0.05);
        path {
          fill: #ff3f3a;
        }
      }
    }
  }
  &-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  &-intro {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
    }
  }
  &-filter {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &__wrapper {
      display: flex;
      gap: 12px;
      padding: 15px 0;
    }
    &__btn {
      border: 2px solid transparent;
      border-radius: 4px;
      background: transparent;
      line-height: 25px;
      font-weight: 700;
      color: #9a9ca5;
      padding: 8px 20px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        border: 2px solid #ff3f3a;
        border-radius: 4px;
        color: #ff3f3a;
      }
    }
  }
  &-search {
    display: flex;
    input {
      background: transparent;
      border: 1px solid #d7dadd;
      border-right: none;
      border-radius: 4px 0px 0px 4px;
      outline: none;
      padding: 12px;
      height: fit-content;
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
}
</style>