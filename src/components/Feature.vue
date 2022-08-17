<template>
  <div class="feature">
    <div class="container">
      <div class="feature-wrapper">
        <div class="feature-intro">
          <div class="feature-intro__text">
            <div class="feature-intro__subtitle">READY TO LEARN?</div>
            <div class="feature-intro__title">Featured Courses</div>
          </div>
          <Button title="View all courses" />
        </div>
        <div class="feature-cards">
          <FeatureCard v-for="item in items" :key="item.imgUrl" :post="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import FeatureCard from "./FeatureCard.vue";
export default {
  components: { Button, FeatureCard },
  data() {
    return {
      items: [
        {
          imgUrl: require("@/assets/img/person.png"),
          category: "Marketing",
          text: "The Ultimate Google Ads Training Course",
          price: "$100",
          autor: "by Jerome Bell",
        },
        {
          imgUrl: require("@/assets/img/person1.png"),
          category: "Management",
          text: "Prduct Management Fundamentals",
          price: "$480",
          autor: "by Marvin McKinney",
        },
        {
          imgUrl: require("@/assets/img/person2.png"),
          category: "HR & Recruting",
          text: "HR  Management and Analytics",
          price: "$200",
          autor: "by Leslie Alexander Li",
        },
        {
          imgUrl: require("@/assets/img/person3.png"),
          category: "Marketing",
          text: "Brand Management & PR Communications",
          price: "$530",
          autor: "by Kristin Watson",
        },
        {
          imgUrl: require("@/assets/img/person4.png"),
          category: "Management",
          text: "The Ultimate Google Ads Training Course",
          price: "4100",
          autor: "by Dianne Russell",
        },
        {
          imgUrl: require("@/assets/img/person5.png"),
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
.feature {
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  &-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &__subtitle {
      line-height: 150%;
      font-weight: 700;
      letter-spacing: 1px;
      color: #1e212c;
    }
    &__title {
      font-size: 46px;
      line-height: 130%;
      font-weight: 900;
      color: #1e212c;
    }
  }
  &-cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-self: center;
    gap: 30px;
  }
}
</style>