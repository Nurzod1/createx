<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-subtitle">course</div>
        <div class="header-title">User Experience. Principles of Human-Centered Design</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHeader'
}
</script>

<style lang="scss" scoped>
.header{
  padding: 150px 0;
  text-align: center;
  background-color: #fedcd2;
  @include breakpoint(lg){
    padding: 120px 0;
  }
  @include breakpoint(md){
    padding: 100px 0;
  }
  @include breakpoint(sm){
    padding: 80px 0;
  }
  &-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @include breakpoint(xs){
      gap: 5px;
    }
  }
  &-subtitle{
    line-height: 150%;
    font-weight: 700;
    text-transform: uppercase;
    color: #FF3F3A;
    @include breakpoint(sm){
      font-size: 14px;
      line-height: 18px;
    }
    @include breakpoint(xs){
      font-size: 12px;
      line-height: 16px;
    }
  }
  &-title{
    font-size: 46px;
    line-height: 60px;
    font-weight: 900;
    max-width: 1020px;
    @include breakpoint(sm){
      font-size: 38px;
      line-height: 50px;
    }
    @include breakpoint(xs){
      font-size: 24px;
      line-height: 28px;
    }
  }
}
</style>