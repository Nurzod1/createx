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
  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-about {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 392px;
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
    }
  }
  &-logos{
    display: flex;
    gap: 40px;
  }
  &-img{
    img{
      margin-bottom: -300px;
    }
  }
}
</style>