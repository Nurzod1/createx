<template>
  <div id="navbar" class="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="navbar-intro">
          <router-link  to="/" class="navbar-logo">
            <img src="@/assets/img/logo.svg" alt="" />
          </router-link>
          <div class="navbar-menu">
            <router-link 
            class="navbar-menu__link"
            to="/AboutUsView"
            >About Us
            </router-link>
            <router-link 
            class="navbar-menu__link" 
            to="/course"
            >
            Courses
            </router-link>
            <router-link 
            class="navbar-menu__link"
            to="/EventsList"
            >
            Events
            </router-link>
            <router-link 
            class="navbar-menu__link"
            to="/BlogView"
            >
            Blog
            </router-link>
            <router-link to="/ContactsView" class="navbar-menu__link">Contacts</router-link>
          </div>
        </div>
        <div class="navbar-btn">
          <button class="navbar-btn__consulting">Get consultation</button>
          <div @click="$emit('showLoginModal')" class="navbar-btn__signup">
            <img src="@/assets/img/Profile.svg" alt="" />
            <p>Log in / Register</p>
          </div>
        </div>
        <BurgerMenu :value="value" @input="$emit('input', $event)" />
      </div>
    </div>
  </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu.vue";
export default {
  name: "Navbar",
  components: { BurgerMenu,  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data(){
    return{
      showin: false,
    }
  },
  methods: {
    setNavbarStatus(event) {
      const scrollYPos = window.scrollY;
      const navbar = document.querySelector(".navbar");

      if (scrollYPos > 10) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.setNavbarStatus);
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  padding: 10px 0;
  transition: 0.3s;
  z-index: 3;

  &.active {
    background: #fedad5;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.3);
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-intro {
    display: flex;
    gap: 60px;
  }

  &-menu {
    display: flex;
    gap: 40px;

    @include breakpoint(lg) {
      display: none;
    }

    &__link {
      font-size: 16px;
      line-height: 25px;
      font-weight: 700;
      color: #424551;
      transition: all 0.3s;
      text-decoration: none;
      &:hover {
        color: #ff3f3a;
        cursor: pointer;
      }
    }
  }
  &-btn {
    display: flex;

    @include breakpoint(lg) {
      display: none;
    }
    &__consulting {
      line-height: 25px;
      font-weight: 700;
      width: 206px;
      height: 52px;
      border: none;
      border-radius: 5px;
      background-color: #ff3f3a;
      color: #fff;
      transition: 0.3s;
      &:hover {
        background-color: #e10700;
        cursor: pointer;
      }
    }
    &__signup {
      line-height: 25px;
      font-weight: 700;
      color: #424551;
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      width: 206px;
      height: 52px;
      border: none;
      background-color: transparent;
      transition: 0.3s;
      &:hover {
        color: #ff3f3a;
        cursor: pointer;
      }
    }
  }
}
</style>