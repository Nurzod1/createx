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
  white-space: nowrap;
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
  @include breakpoint(md){
    padding: 10px 20px;
  }
  @media screen and (max-width: 453px){
    padding: 5px 10px;
    border: 1px solid #ff3f3a;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: normal;
  }
  &:hover{
    background-color: #ff3f3a;
    color: #fff;
    cursor: pointer;
  }
}
</style>