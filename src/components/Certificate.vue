<template>
  <div class="certificate">
    <div class="container">
      <div class="certificate-wrapper">
        <div class="certificate-about">
          <div class="certificate-about__subtitle">CREATEX CERTIFICATE</div>
          <div class="certificate-about__title">
            Your expertise will be confirmed
          </div>
          <div class="certificate-about__text">
            We are accredited by international professional organizations and
            institutes:
          </div>
          <div class="certificate-logos">
            <div class="certificate-logos__image">
              <img src="@/assets/img/logo1.png" alt="" />
            </div>
            <div class="certificate-logos__image">
              <img src="@/assets/img/logo2.png" alt="" />
            </div>
            <div class="certificate-logos__image">
              <img src="@/assets/img/logo3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="certificate-img">
          <img src="@/assets/img/certificate.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificate",
};
</script>

<style lang="scss" scoped>
.certificate {
  margin: 80px 0;
  @include breakpoint(md) {
    margin: 60px 0;
  }
  @include breakpoint(sm) {
    margin: 30px 0;
  }
  @include breakpoint(xs) {
    margin: 20px 0;
  }
  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    @include breakpoint(sm) {
      flex-direction: column;
      gap: 30px;
    }
    @media screen and (max-width: 390px) {
      text-align: center;
    }
  }
  &-about {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 392px;
    @include breakpoint(md) {
      gap: 10px;
    }
    @media screen and (max-width: 430px) {
      gap: 5px;
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      @include breakpoint(md) {
        font-size: 16px;
      }
      @include breakpoint(xs) {
        font-size: 14px;
      }
      @media screen and (max-width: 430px) {
        font-size: 12px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(md) {
        font-size: 34px;
        line-height: 40px;
      }
      @include breakpoint(xs) {
        font-size: 28px;
        line-height: 36px;
      }
      @media screen and (max-width: 430px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
    &__text {
      @media screen and (max-width: 430px) {
        font-size: 14px;
        max-width: 300px;
      }
    }
  }
  &-logos {
    display: flex;
    justify-content: center;
    gap: 40px;
    @include breakpoint(md) {
      gap: 20px;
    }
    @media screen and (max-width: 430px) {
      gap: 10px;
    }
    @media screen and (max-width: 390px) {
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  &-img {
    display: flex;
    img {
      margin-bottom: -300px;
      width: 100%;
      height: 100%;
      @include breakpoint(lg) {
        margin-bottom: -200px;
      }
      @include breakpoint(md) {
        margin-bottom: -130px;
      }
      @include breakpoint(md) {
        margin-bottom: 0px;
      }
    }
  }
}
</style>