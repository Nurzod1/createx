<template>
  <div class="signup" >
    <div class="signup-window">
      <div class="signup-exit">
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
            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.99999 6.58578L14.2929 0.292893C14.6834 -0.0976313 15.3166 -0.0976307 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 7.99999L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L7.99999 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292894 15.7071C-0.0976307 15.3166 -0.0976313 14.6834 0.292893 14.2929L6.58578 7.99999L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
            fill="#787A80"
          />
        </svg>
      </div>
      <div class="signup-intro">
        <div class="signup-intro__title">Sign up</div>
        <div class="signup-intro__text">
          Registration takes less than a minute but gives you full control over
          your studying.
        </div>
      </div>
      <div class="signup-input">
        <div class="signup-input__wrapper">
          <div class="signup-input__title">Full Name</div>
          <input type="text" placeholder="Your full name" />
        </div>
        <div class="signup-input__wrapper">
          <div class="signup-input__title">Email</div>
          <input type="email" placeholder="Your working email" />
        </div>
        <div class="signup-input__wrapper">
          <div class="signup-input__title">Password</div>
          <input type="password" placeholder="Your password" />
        </div>
        <div class="signup-input__wrapper">
          <div class="signup-input__title">Confirm Password</div>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div class="signup-checked">
        <div class="signup-checked__checkbox">
          <input type="checkbox" id="keep" />
          <label for="keep">Remember me</label>
        </div>
      </div>
      <Button title="Sign up" />
      <div class="signup-authorization">
        <p>Already have an account?</p>
        <div class="signup-authorization__btn">Sign in</div>
      </div>
      <div class="signup-line"></div>
      <div class="signup-with">
        <div class="signup-with__title">Or sign in with</div>
        <div class="signup-with__links">
          <div class="signup-with__link">
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.63537 0.836822L7.32099 0.833008C4.72086 0.833008 3.04054 2.60392 3.04054 5.34487V7.42513H0.713524C0.512443 7.42513 0.349609 7.59259 0.349609 7.79915V10.8132C0.349609 11.0198 0.512628 11.187 0.713524 11.187H3.04054V18.7925C3.04054 18.9991 3.20337 19.1663 3.40445 19.1663H6.44054C6.64162 19.1663 6.80445 18.9989 6.80445 18.7925V11.187H9.52527C9.72635 11.187 9.88919 11.0198 9.88919 10.8132L9.8903 7.79915C9.8903 7.69997 9.85187 7.60499 9.78373 7.5348C9.71558 7.46461 9.62275 7.42513 9.5262 7.42513H6.80445V5.66166C6.80445 4.81407 7.00108 4.38379 8.07593 4.38379L9.635 4.38322C9.8359 4.38322 9.99873 4.21576 9.99873 4.00939V1.21065C9.99873 1.00447 9.83608 0.837204 9.63537 0.836822Z"
                fill="#787A80"
              />
            </svg>
          </div>
          <div class="signup-with__link">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.17561 7.75219H17.4051C17.4959 8.25921 17.5413 8.74352 17.5413 9.20513C17.5413 10.8472 17.197 12.3134 16.5084 13.6037C15.8198 14.8939 14.8379 15.9022 13.5628 16.6287C12.2877 17.3552 10.8253 17.7184 9.17561 17.7184C7.98754 17.7184 6.85622 17.4895 5.78165 17.0317C4.70708 16.5739 3.78008 15.9552 3.00064 15.1758C2.2212 14.3963 1.60257 13.4693 1.14475 12.3948C0.686921 11.3202 0.458008 10.1889 0.458008 9.00081C0.458008 7.81273 0.686921 6.68141 1.14475 5.60685C1.60257 4.53228 2.2212 3.60528 3.00064 2.82584C3.78008 2.0464 4.70708 1.42777 5.78165 0.969942C6.85622 0.512116 7.98754 0.283203 9.17561 0.283203C11.4458 0.283203 13.3944 1.04372 15.0214 2.56476L12.649 4.84633C11.7183 3.94581 10.5604 3.49555 9.17561 3.49555C8.19942 3.49555 7.29702 3.74149 6.46839 4.23337C5.63976 4.72525 4.98329 5.39307 4.49898 6.23683C4.01467 7.08059 3.77251 8.00192 3.77251 9.00081C3.77251 9.9997 4.01467 10.921 4.49898 11.7648C4.98329 12.6086 5.63976 13.2764 6.46839 13.7683C7.29702 14.2601 8.19942 14.5061 9.17561 14.5061C9.83398 14.5061 10.4394 14.4153 10.9918 14.2336C11.5442 14.052 11.9982 13.825 12.3539 13.5526C12.7096 13.2802 13.0198 12.9699 13.2847 12.6218C13.5496 12.2737 13.7444 11.9445 13.8693 11.6343C13.9941 11.324 14.0793 11.0289 14.1247 10.7489H9.17561V7.75219Z"
                fill="#787A80"
              />
            </svg>
          </div>
          <div class="signup-with__link">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 1.8106C17.1059 2.08388 16.4148 2.26922 15.6887 2.35196C16.4301 1.92683 16.9976 1.25252 17.2666 0.451489C16.5711 0.845186 15.8035 1.13106 14.9855 1.28603C14.3305 0.616946 13.3988 0.200195 12.3653 0.200195C10.3827 0.200195 8.77523 1.73942 8.77523 3.63674C8.77523 3.90583 8.80694 4.16865 8.86819 4.41997C5.88501 4.2765 3.23973 2.90797 1.46928 0.828429C1.1598 1.33523 0.983743 1.92576 0.983743 2.55613C0.983743 3.74878 1.618 4.8011 2.58033 5.41677C1.992 5.39793 1.43866 5.24296 0.954233 4.98537V5.0283C0.954233 6.69317 2.19213 8.08265 3.83353 8.39888C3.5328 8.47637 3.21568 8.5193 2.88761 8.5193C2.6558 8.5193 2.43161 8.49732 2.2118 8.45542C2.66889 9.82188 3.99429 10.8156 5.56463 10.8428C4.33657 11.7642 2.7881 12.3119 1.10624 12.3119C0.816463 12.3119 0.53103 12.2951 0.25 12.2647C1.83893 13.2417 3.7253 13.8113 5.75273 13.8113C12.3566 13.8113 15.9665 8.57376 15.9665 4.0315L15.9544 3.5865C16.6597 3.1048 17.2699 2.49959 17.75 1.8106Z"
                fill="#787A80"
              />
            </svg>
          </div>
          <div class="signup-with__link">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3295 17.3337L17.3337 17.333V11.2205C17.3337 8.23019 16.6899 5.92671 13.1941 5.92671C11.5135 5.92671 10.3857 6.84894 9.92532 7.72324H9.87671V6.20588H6.56212V17.333H10.0135V11.8232C10.0135 10.3726 10.2885 8.96977 12.085 8.96977C13.8552 8.96977 13.8816 10.6253 13.8816 11.9163V17.3337H17.3295Z"
                fill="#787A80"
              />
              <path
                d="M0.941988 6.20657H4.39754V17.3337H0.941988V6.20657Z"
                fill="#787A80"
              />
              <path
                d="M2.66838 0.666992C1.56352 0.666992 0.666992 1.56352 0.666992 2.66838C0.666992 3.77324 1.56352 4.68852 2.66838 4.68852C3.77324 4.68852 4.66977 3.77324 4.66977 2.66838C4.66908 1.56352 3.77255 0.666992 2.66838 0.666992Z"
                fill="#787A80"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
.signup {
  position: fixed;
  top: auto;
  bottom: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active{
    top: 0px;
    bottom: 0;
  }
  &-window {
    background-color: #fff;
    max-width: 486px;
    border: 1px solid #e5e8ed;
    border-radius: 4px;
    padding: 10px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @include breakpoint(xl){
      gap: 16px;
    }
  }
  &-line {
    background-color: #e5e8ed;
    margin: 0px -40px;
    height: 1px;
  }
  &-exit {
    position: absolute;
    top: 28px;
    right: 28px;
  }

  &-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
    
    @include breakpoint(xl){
      gap: 16px;
    }
    &__title {
      font-size: 28px;
      line-height: 42px;
      font-weight: 700;
    }
    &__text {
      font-size: 14px;
      line-height: 21px;
      color: #787a80;
    }
  }

  &-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @include breakpoint(xl){
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;

      @include breakpoint(xl){
        gap: 2px;
      }
      input {
        border: 1px solid #d7dadd;
        border-radius: 4px;
        padding: 11px 16px;
        outline: none;
        @include breakpoint(lg){

        }
      }
    }
    &__title {
      font-size: 14px;
      line-height: 21px;
      color: #424551;
    }
  }

  &-checked {
    display: flex;
    justify-content: space-between;
    &__checkbox {
      display: flex;
      gap: 8px;
      label {
        font-size: 14px;
        line-height: 21px;
        color: #424551;
      }
    }
  }

  &-authorization {
    display: flex;
    gap: 4px;
    font-size: 14px;
    line-height: 21px;
    &__btn {
      color: #ff3f3a;
    }
  }

  &-with {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    text-align: center;
    @include breakpoint(xl){
      gap: 10px;
    }
    &__title {
      font-size: 14px;
      line-height: 21px;
      color: #787a80;
    }
    &__links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }
    &__link {
      cursor: pointer;
      path {
        transition: 0.3s;
      }
      &:hover {
        path {
          fill: #ff3f3a;
        }
      }
    }
  }

  button {
    width: 100%;
    background-color: #ff3f3a;
    color: white;
    &:hover {
      color: #ff3f3a;
      background-color: white;
    }
  }
}
</style>