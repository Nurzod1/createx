<template>
  <button class="btn">{{title}}</button>
</template>

<script>
export default {
  name: "Button",
  props:{
    title: String,
  }
};
</script>

<style lang="scss" scoped>
button{
  border: 2px solid #ff3f3a;
  background-color: transparent;
  color: #ff3f3a;
  border-radius: 4px;
  padding: 15px 40px;
  transition: 0.3s;
  font-weight: 700;
  letter-spacing: 0.5px;
  width: fit-content;
  height: fit-content;
  &:hover{
    background-color: #ff3f3a;
    color: #fff;
    cursor: pointer;
  }
}
</style>