<template>
  <div 
    :class="[
      'burger-menu', 
      { active: value }
    ]" 
    @click="$emit('input', !value)"
  >
    <span class="menu__item"></span>
    <span class="menu__item"></span>
    <span class="menu__item"></span>
  </div>
</template>

<script>
export default {
  name: "burger-menu",
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
  min-width: 40px;
  min-height: 30px;

  @media screen and (max-width:1199px){
    display: flex;
  }
  &.active {
    .menu__item {
      &:nth-child(1) { 
        width: 50px;
        transform: rotate(32deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }
      
      &:nth-child(3) {
        width: 50px;
        transform: rotate(-32deg);
      }
    }  
  }

  .menu__item {
    height: 4px;
    width: 100%;
    background: #000;
    border-radius: 34px;
    transition: 0.3s;

    &:nth-child(1),
    &:nth-child(3) {
      transform-origin: left;
    }
  }
}
</style>