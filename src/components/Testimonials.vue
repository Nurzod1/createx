<template>
  <div class="comment">
    <div class="container">
      <div class="comment-wrapper">
        <div class="comment-intro">
          <div class="comment-intro__text">
            <div class="comment-intro__subtitle">TESTIMONIALS</div>
            <div class="comment-intro__title">What our students say</div>
          </div>
          <div class="comment-arrows">
            <div class="comment-arrows__prev">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
                  fill="#424551"
                />
              </svg>
            </div>
            <div class="comment-arrows__next">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                  fill="#424551"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="comment-slider">
          <div class="comment-prev">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
                fill="#424551"
              />
            </svg>
          </div>
          <div class="comment-item__wrapper">
            <div class="comment-item">
              <div class="comment-item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </div>
              <div class="comment-autor__wrapper">
                <div class="comment-autor__img">
                  <img src="@/assets/img/person10.png" alt="" />
                </div>
                <div class="comment-autor">
                  <p class="comment-autor__name">Eleanor Pena</p>
                  <p class="comment-autor__position">Position, Course</p>
                </div>
              </div>
            </div>
          </div>
          <div class="comment-next">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                fill="#424551"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.comment {
  margin: 80px 0;
  @include breakpoint(md) {
    margin: 50px 0;
  }
  @include breakpoint(sm) {
    margin: 30px 0;
  }
  @include breakpoint(xs) {
    margin: 10px 0;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
    @include breakpoint(md) {
      gap: 20px;
    }
    @include breakpoint(sm) {
      gap: 10px;
    }
    @include breakpoint(xs) {
      gap: 5px;
    }
  }
  &-intro {
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__subtitle {
      line-height: 24px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(sm) {
        font-size: 12px;
        line-height: 16px;
      }
      @media screen and (max-width: 500px) {
        font-size: 10px;
        line-height: 14px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      @include breakpoint(md) {
        font-size: 42px;
        line-height: 54px;
      }
      @include breakpoint(sm) {
        font-size: 34px;
        line-height: 48px;
      }
      @media screen and (max-width: 500px) {
        font-size: 28px;
        line-height: 34px;
      }
    }
  }
  &-arrows {
    display: none;
    justify-content: center;
    @include breakpoint(md){
      display: flex;
    }
    &__prev {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;

      @include breakpoint(xs) {
      width: 40px;
      height: 40px;
    }
      path {
        transition: 0.3s;
      }
      &:hover {
        background-color: #ff3f3a;
        path {
          fill: white;
        }
      }
    }
    &__next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;

      @include breakpoint(xs) {
      width: 40px;
      height: 40px;
    }
      path {
        transition: 0.3s;
      }
      &:hover {
        background-color: #ff3f3a;
        path {
          fill: white;
        }
      }
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    &::before {
      content: url("@/assets/img/braces.svg");
      position: absolute;
      left: -55px;
      top: 4px;
      @media screen and (max-width: 440px) {
        display: none;
      }
    }
    &__wrapper {
      padding: 65px 105px;
      width: fit-content;
      box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08),
        0px 30px 24px -10px rgba(154, 156, 165, 0.05),
        0px 12px 10px -6px rgba(154, 156, 165, 0.04),
        0px 4px 4px -4px rgba(30, 33, 44, 0.03);

      @include breakpoint(md) {
        padding: 45px 75px;
      }
      @include breakpoint(sm) {
        padding: 25px 45px;
      }
      @include breakpoint(xs) {
        padding: 10px 15px;
      }
    }
    &__text {
      max-width: 752px;
      font-size: 20px;
      line-height: 30px;
      @include breakpoint(md) {
        font-size: 18px;
        line-height: 25px;
      }
      @include breakpoint(sm) {
        font-size: 14px;
        line-height: 20px;
        max-width: 400px;
      }
      @media screen and (max-width: 550px) {
        font-size: 12px;
        line-height: 16px;
        max-width: 300px;
      }
    }
  }
  &-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  &-autor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    &__wrapper {
      display: flex;
      gap: 20px;
      @include breakpoint(md) {
        gap: 10px;
      }
      @media screen and (max-width: 550px) {
        gap: 2px;
      }
    }
    &__name {
      line-height: 25px;
      font-weight: 700;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
        @include breakpoint(md) {
          width: 85%;
          height: 85%;
        }
        @include breakpoint(sm) {
          width: 80%;
          height: 80%;
        }
        @media screen and (max-width: 550px) {
          width: 70%;
          height: 70%;
        }
      }
    }
    &__position {
      font-size: 14px;
      line-height: 21px;
      color: #787a80;
      @include breakpoint(md) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  &-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;

    @include breakpoint(md) {
      display: none;
    }
    path {
      transition: 0.3s;
    }
    &:hover {
      background-color: #ff3f3a;
      path {
        fill: white;
      }
    }
  }
  &-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;

    @include breakpoint(md) {
      display: none;
    }
    path {
      transition: 0.3s;
    }
    &:hover {
      background-color: #ff3f3a;
      path {
        fill: white;
      }
    }
  }
}
</style>