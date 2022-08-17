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
  &-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  &-subtitle{
    line-height: 150%;
    font-weight: 700;
    text-transform: uppercase;
    color: #FF3F3A;
  }
  &-title{
    font-size: 46px;
    line-height: 60px;
    font-weight: 900;
    max-width: 1020px;
  }
}
</style>