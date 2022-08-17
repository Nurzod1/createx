<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="navbar-intro">
          <div class="navbar-logo">
            <img src="@/assets/img/logo.svg" alt="" />
          </div>
          <div class="navbar-menu">
            <div class="navbar-menu__link">About Us</div>
            <router-link class="navbar-menu__link" to="/course">Courses</router-link>
            <div class="navbar-menu__link">Events</div>
            <div class="navbar-menu__link">Blog</div>
            <div class="navbar-menu__link">Contacts</div>
          </div>
        </div>
        <div class="navbar-btn">
          <button class="navbar-btn__consulting">Get consultation</button>
          <button class="navbar-btn__signup">
            <img src="@/assets/img/Profile.svg" alt="" />
            <p>Log in / Register</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: transparent;
    position: fixed;
    padding: 10px 0;
    z-index: 3;
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
    &__link {
      font-size: 16px;
      line-height: 25px;
      font-weight: 700;
      color: #424551;
      transition: all 0.3s;
      text-decoration: none;
      &:hover{
        color: #ff3f3a;
        cursor: pointer;
      }
    }
  }
  &-btn {
    display: flex;
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
      &:hover{
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
      &:hover{
        color: #ff3f3a;
        cursor: pointer;
      }
    }
  }
}
</style>