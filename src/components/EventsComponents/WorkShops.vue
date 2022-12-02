<template>
  <div class="workshop">
    <div class="container">
      <div class="workshop-wrapper">
        <div class="workshop-intro">
          <div class="workshop-intro__subtitle">Our events</div>
          <div class="workshop-intro__title">
            Lectures, workshops & master-classes
          </div>
        </div>
        <div class="workshop-filter">
          <div class="workshop-filter__select">
            <p>Event category</p>
            <select name="select" id="">
              <option value="all themes">all themes</option>
            </select>
          </div>
          <div class="workshop-filter__select">
            <p>Sort by</p>
            <select name="select" id="">
              <option value="all themes">newest</option>
            </select>
          </div>
          <div class="workshop-filter__select">
            <p>Show</p>
            <select name="select" id="">
              <option value="all themes">9</option>
            </select>
          </div>
          <div class="workshop-filter__wrapper">
            <div class="workshop-filter__input">
              <input type="text" placeholder="Search event..." />
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.25016 2.16634C4.44272 2.16634 2.16683 4.44223 2.16683 7.24967C2.16683 10.0571 4.44272 12.333 7.25016 12.333C8.65276 12.333 9.92161 11.7658 10.842 10.8467C11.7642 9.92589 12.3335 8.6549 12.3335 7.24967C12.3335 4.44223 10.0576 2.16634 7.25016 2.16634ZM0.833496 7.24967C0.833496 3.70585 3.70634 0.833008 7.25016 0.833008C10.794 0.833008 13.6668 3.70585 13.6668 7.24967C13.6668 8.78248 13.1287 10.1905 12.2321 11.2939L14.9711 14.0278C15.2317 14.2879 15.2321 14.7101 14.972 14.9706C14.7119 15.2312 14.2898 15.2316 14.0292 14.9715L11.2888 12.2362C10.1863 13.13 8.78039 13.6663 7.25016 13.6663C3.70634 13.6663 0.833496 10.7935 0.833496 7.24967Z"
                    fill="#9A9CA5"
                  />
                </svg>
              </button>
            </div>

            <div class="workshop-filter__btns">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.833334 2.91634C0.833334 1.76575 1.76607 0.833008 2.91667 0.833008H17.0833C18.2339 0.833008 19.1667 1.76575 19.1667 2.91634V7.08301C19.1667 8.2336 18.2339 9.16634 17.0833 9.16634H2.91667C1.76607 9.16634 0.833334 8.2336 0.833334 7.08301V2.91634ZM2.91667 2.49967C2.68655 2.49967 2.5 2.68622 2.5 2.91634V7.08301C2.5 7.31313 2.68655 7.49967 2.91667 7.49967H17.0833C17.3135 7.49967 17.5 7.31313 17.5 7.08301V2.91634C17.5 2.68622 17.3135 2.49967 17.0833 2.49967H2.91667Z"
                    fill="#424551"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.833334 12.9163C0.833334 11.7657 1.76607 10.833 2.91667 10.833H17.0833C18.2339 10.833 19.1667 11.7657 19.1667 12.9163V17.083C19.1667 18.2336 18.2339 19.1663 17.0833 19.1663H2.91667C1.76607 19.1663 0.833334 18.2336 0.833334 17.083V12.9163ZM2.91667 12.4997C2.68655 12.4997 2.5 12.6862 2.5 12.9163V17.083C2.5 17.3131 2.68655 17.4997 2.91667 17.4997H17.0833C17.3135 17.4997 17.5 17.3131 17.5 17.083V12.9163C17.5 12.6862 17.3135 12.4997 17.0833 12.4997H2.91667Z"
                    fill="#424551"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.833333 2.91634C0.833333 1.76575 1.76607 0.833008 2.91667 0.833008H7.08333C8.23393 0.833008 9.16667 1.76575 9.16667 2.91634V7.08301C9.16667 8.2336 8.23393 9.16634 7.08333 9.16634H2.91667C1.76607 9.16634 0.833333 8.2336 0.833333 7.08301V2.91634ZM2.91667 2.49967C2.68655 2.49967 2.5 2.68622 2.5 2.91634V7.08301C2.5 7.31313 2.68655 7.49967 2.91667 7.49967H7.08333C7.31345 7.49967 7.5 7.31313 7.5 7.08301V2.91634C7.5 2.68622 7.31345 2.49967 7.08333 2.49967H2.91667Z"
                    fill="#424551"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.833333 12.9163C0.833333 11.7657 1.76607 10.833 2.91667 10.833H7.08333C8.23393 10.833 9.16667 11.7657 9.16667 12.9163V17.083C9.16667 18.2336 8.23393 19.1663 7.08333 19.1663H2.91667C1.76607 19.1663 0.833333 18.2336 0.833333 17.083V12.9163ZM2.91667 12.4997C2.68655 12.4997 2.5 12.6862 2.5 12.9163V17.083C2.5 17.3131 2.68655 17.4997 2.91667 17.4997H7.08333C7.31345 17.4997 7.5 17.3131 7.5 17.083V12.9163C7.5 12.6862 7.31345 12.4997 7.08333 12.4997H2.91667Z"
                    fill="#424551"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8333 2.91634C10.8333 1.76575 11.7661 0.833008 12.9167 0.833008H17.0833C18.2339 0.833008 19.1667 1.76575 19.1667 2.91634V7.08301C19.1667 8.2336 18.2339 9.16634 17.0833 9.16634H12.9167C11.7661 9.16634 10.8333 8.2336 10.8333 7.08301V2.91634ZM12.9167 2.49967C12.6865 2.49967 12.5 2.68622 12.5 2.91634V7.08301C12.5 7.31313 12.6865 7.49967 12.9167 7.49967H17.0833C17.3134 7.49967 17.5 7.31313 17.5 7.08301V2.91634C17.5 2.68622 17.3134 2.49967 17.0833 2.49967H12.9167Z"
                    fill="#424551"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8333 12.9163C10.8333 11.7657 11.7661 10.833 12.9167 10.833H17.0833C18.2339 10.833 19.1667 11.7657 19.1667 12.9163V17.083C19.1667 18.2336 18.2339 19.1663 17.0833 19.1663H12.9167C11.7661 19.1663 10.8333 18.2336 10.8333 17.083V12.9163ZM12.9167 12.4997C12.6865 12.4997 12.5 12.6862 12.5 12.9163V17.083C12.5 17.3131 12.6865 17.4997 12.9167 17.4997H17.0833C17.3134 17.4997 17.5 17.3131 17.5 17.083V12.9163C17.5 12.6862 17.3134 12.4997 17.0833 12.4997H12.9167Z"
                    fill="#424551"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkShop",
};
</script>

<style lang="scss" scoped>
.workshop {
  padding: 130px 0 60px 0;

  @include breakpoint(sm){
    padding: 80px 0 30px 0;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;

    @include breakpoint(sm) {
      gap: 30px;
    }
  }
  &-intro {
    display: flex;
    flex-direction: column;
    text-align: center;
    &__subtitle {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 1px;
      @include breakpoint(md) {
        font-size: 14px;
        line-height: 18px;
      }
      @include breakpoint(xs) {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__title {
      font-size: 46px;
      line-height: 60px;
      font-weight: 900;
      @include breakpoint(lg) {
        font-size: 40px;
        line-height: 50px;
      }
      @include breakpoint(md) {
        font-size: 36px;
        line-height: 46px;
      }
      @include breakpoint(xs) {
        font-size: 30px;
        line-height: 36px;
      }
    }
  }
  &-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include breakpoint(md) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
    @include breakpoint(sm) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @include breakpoint(xs) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
    }
    &__wrapper {
      display: flex;
      gap: 20px;
    }
    &__select {
      display: flex;
      gap: 12px;
      align-items: center;
      p {
        font-weight: 700;
        line-height: 25px;
        color: #424551;
        @include breakpoint(md) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      select {
        padding: 12px 15px;
        border: 1px solid #d7dadd;
        border-radius: 4px;
        font-size: 14px;
        line-height: 21px;
        color: #424551;
        @include breakpoint(md) {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    &__btns {
      display: flex;
      gap: 12px;
      button {
        border: none;
        background-color: transparent;
      }
    }
    &__input {
      display: flex;
      input {
        background: transparent;
        border: 1px solid #d7dadd;
        border-right: none;
        border-radius: 4px 0px 0px 4px;
        outline: none;
        padding: 12px;
        height: fit-content;
        width: 282px;
        @include breakpoint(lg) {
          width: 250px;
        }
        @include breakpoint(md) {
          width: 200px;
        }
        @include breakpoint(xs) {
          padding: 8px;
          width: 150px;
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        background-color: transparent;
        border: 1px solid #d7dadd;
        border-left: none;
        border-radius: 0px 4px 4px 0px;
        padding: 12px 8px 12px 12px;
        @include breakpoint(xs) {
          padding: 8px 14px 7px 8px;
        }
        path {
          transition: 0.3s;
        }
        &:hover {
          cursor: pointer;
          path {
            fill: black;
          }
        }
      }
    }
  }
}
</style>