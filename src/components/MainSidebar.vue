<template>
  <div :class="['sidebar', { active: active }]">
    <div class="sidebar-wrapper">
      <div class="sidebar-intro">
        <div class="sidebar-logo">
          <img src="@/assets/img/logo.svg" alt="" />
        </div>
        <div class="sidebar-close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            />
          </svg>
        </div>
      </div>
      <div class="sidebar-menu">
        <div class="sidebar-menu__link">About Us</div>
        <router-link class="sidebar-menu__link" to="/course"
          >Courses</router-link
        >
        <div class="sidebar-menu__link">Events</div>
        <div class="sidebar-menu__link">Blog</div>
        <div class="sidebar-menu__link">Contacts</div>
      </div>
      <div class="sidebar-btn">
        <button class="sidebar-btn__consulting">Get consultation</button>
        <button class="sidebar-btn__signup">
          <img src="@/assets/img/Profile.svg" alt="" />
          <p>Log in / Register</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  background-color: #fedcd2;
  color: #fff;
  transform: translateX(-100%);
  transition: 0.3s;
  z-index: 1000;
  box-shadow: -3px 0 5px 0 #555;
  &.active {
    transform: translateX(0);
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
  }

  &-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-close{
    display: none;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 10px;
    @media screen and (max-width: 400px){
      display: flex;
    }
  }
  &-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;

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
    flex-direction: column;
    gap: 10px;
    text-align: center;
    justify-content: center;
    width: 100%;
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