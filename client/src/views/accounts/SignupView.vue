
<template>
  <section class="background-radial-gradient overflow-hidden">
  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
        <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
          The best offer <br />
          <span style="color: hsl(218, 81%, 75%)">for your business</span>
        </h1>
        <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label class="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <!-- Register buttons -->
              <div class="text-center">
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <!-- <b-container role="group" class="p-5 login-form" style="width: 50%">
    <h1>로그인</h1>

    <b-row>
      <label for="input-username">아이디</label>
      <b-form-input
        id="input-username"
        placeholder="ID"
        v-model="username"
        :state="nameState"
        aria-describedby="input-live-feedback"
        trim
      ></b-form-input>

      <b-form-invalid-feedback id="input-username-feedback" class="text-right">
        알파벳/숫자 3글자 이상
      </b-form-invalid-feedback> </b-row
    ><br />

    <b-row>
      <label for="input-password">비밀번호</label>
      <b-form-input
        id="input-password"
        placeholder="PASSWORD"
        v-model="password"
        :state="passwordState"
        aria-describedby="input-username-feedback"
        trim
        type="password"
        autocomplete="false"
      ></b-form-input>

      <b-form-invalid-feedback id="input-password-feedback" class="text-right">
        비밀번호 5글자 이상
      </b-form-invalid-feedback> </b-row
    ><br />

    <b-button variant="success" @click="login">로그인</b-button>
  </b-container> -->
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    nameState() {
      return this.username.length >= 3 ? true : false;
    },
    passwordState() {
      return this.password.length >= 5 ? true : false;
    },
  },
  methods: {
    login() {
      const username = this.username;
      const password = this.password;

      const payload = { username, password };

      this.$store.dispatch("login", payload);
    },
  },
};
</script>

<style>
.login-form {
  border-radius: 20px;
  background-color: rgb(220, 242, 248);
  box-shadow: 20px 20px 10px 0px lightgray;
}

    .background-radial-gradient {
      background-color: hsl(218, 41%, 15%);
      background-image: radial-gradient(650px circle at 0% 0%,
          hsl(218, 41%, 35%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
          hsl(218, 41%, 45%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%);
    }

    #radius-shape-1 {
      height: 220px;
      width: 220px;
      top: -60px;
      left: -130px;
      background: radial-gradient(#44006b, #ad1fff);
      overflow: hidden;
    }

    #radius-shape-2 {
      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
      bottom: -60px;
      right: -110px;
      width: 300px;
      height: 300px;
      background: radial-gradient(#44006b, #ad1fff);
      overflow: hidden;
    }

    .bg-glass {
      background-color: hsla(0, 0%, 100%, 0.9) !important;
      backdrop-filter: saturate(200%) blur(25px);
    }
  </style>




<!-- <template>
    <b-container role="group" class="p-5 login-form" style="width: 50%;">
      <h1>회원가입</h1>
      <b-row>
        <b-col>
          <label for="input-firstname">성</label>
          <b-form-input
            id="input-firstname"
            placeholder="First name"
            v-model="firstname"
            :state="firstnameState"
            aria-describedby="input-live-feedback"
            trim
          ></b-form-input>
        </b-col>
  
        <b-col>
          <label for="input-lastname">이름</label>
          <b-form-input
            id="input-lastname"
            placeholder="Last name"
            v-model="lastname"
            :state="lastnameState"
            aria-describedby="input-live-feedback"
            trim
          ></b-form-input>
        </b-col>
      </b-row><br>
  
      <b-row>
          <label for="input-username">아이디</label>
          <b-form-input
            id="input-username"
            placeholder="ID"
            v-model="username"
            :state="nameState"
            aria-describedby="input-live-feedback"
            trim
          ></b-form-input>
          <b-form-invalid-feedback id="input-username-feedback" class="text-right">
            알파벳/숫자 3글자 이상
          </b-form-invalid-feedback>
      </b-row><br>
  
      <b-row>
        <label for="input-password1">비밀번호</label>
        <b-form-input
          id="input-password1"
          placeholder="PASSWORD1"
          v-model="password1"
          :state="password1State"
          aria-describedby="input-password1-feedback"
          trim
          type="password"
          autocomplete="false"
        ></b-form-input>
        <b-form-invalid-feedback id="input-password1-feedback" class="text-right">
          비밀번호 5글자 이상
        </b-form-invalid-feedback>
      </b-row><br>
  
      <b-row>
        <label for="input-password2">비밀번호 확인</label>
        <b-form-input
          id="input-password2"
          placeholder="PASSWORD2"
          v-model="password2"
          :state="password2State"
          aria-describedby="input-password2-feedback"
          trim
          type="password"
          autocomplete="false"
        ></b-form-input>
        <b-form-invalid-feedback id="input-password2-feedback" class="text-right">
          비밀번호 불일치
        </b-form-invalid-feedback>
      </b-row><br>
  
      <b-button variant="success" @click="signup">회원가입</b-button>
    </b-container>
  </template>
  
  <script>
  export default {
    name: "LoginView",
    data() {
      return {
        firstname: "",
        lastname: "",
        username: "",
        password1: "",
        password2: "",
      };
    },
    computed: {
      nameState() {
        return this.username.length >= 3 ? true : false;
      },
      password1State() {
        return this.password1.length >= 5 ? true : false;
      },
      password2State() {
        return this.password2.length >= 5 && this.password1 === this.password2
          ? true
          : false;
      },
      firstnameState() {
        return this.firstname.length >= 1 ? true : null;
      },
      lastnameState() {
        return this.lastname.length >= 1 ? true : null;
      },
    },
    methods: {
      signup() {
        const firstname = this.firstname
        const lastname = this.lastname
        const username = this.username
        const password1 = this.password1
        const password2 = this.password2
  
        const payload = {
          firstname, lastname, username, password1, password2
        }
        
        this.$store.dispatch('signup', payload)
      },
    },
  };
  </script>
  
  <style>
  .login-form {
    border-radius: 20px;
    background-color: rgb(220, 242, 248);
    box-shadow: 20px 20px 10px 0px lightgray;
  }
  </style>
   -->