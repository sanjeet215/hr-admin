<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div class="card-body">
          <form id="form" v-on:submit.prevent="handleLogin">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                id="username"
                type="text"
                v-model="user.username"
                placeholder="username"
                class="form-control"
                :class="{ 'is-invalid': submitted && !user.username }"
              />
              <div
                v-show="submitted && !user.username"
                class="invalid-feedback"
              >Username is required</div>
            </div>

            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                id="password"
                type="password"
                v-model="user.password"
                placeholder="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && !user.password }"
              />
              <div
                v-show="submitted && !user.password"
                class="invalid-feedback"
              >Password is required</div>
            </div>

            <div class="form-group">
              <button class="btn btn-primary btn-block login_btn" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Login</span>
              </button>
            </div>
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an trial account ?
            <a href="#">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
            <router-link to="/forgetpwd">Forgot your password? </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "../../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
      submitted: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
      //return false;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    handleLogin() {
      this.submitted = true;

      console.log(this.user.username);

      if (!this.user.username) {
        return;
      }

      if (!this.user.password) {
        return;
      }

      this.loading = true;
      if (this.user.username == "admin" && this.user.password == "adminpwd") {
        this.$store.commit("auth/setAuthentication", true);
        this.$router.replace({ name: 'dashboard'});
      } else {
        console.log("Invalid user name and password");
      }


      // if (this.user.username && this.user.password) {
      //   this.$store
      //     .dispatch("auth/login", this.user)
      //     .then(
      //       () => {
      //         this.$router.push("/dashboard");
      //       },
      //       error => {
      //         this.loading = false;
      //         this.message = error.response.data.error.toString();
      //       }
      //     )
      //     .catch(e => {
      //       console.log("control came here");
      //       this.loading = false;
      //       this.message = "ERR_CONNECTION_REFUSED";
      //       console.log(e.toString);
      //     });
      // }
    }
  }
};
</script>
 <style lang="scss" scoped>
body {
  //background-size: cover;
  //background: #0077B6 !important;
  font-family: "Numans", sans-serif;
  //background-image: url("../../assets/images/background.jpeg");
  background-image: url("http://i.huffpost.com/gen/2326360/images/o-TRAVEL-ADVENTURE-facebook.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  height: 100%;
  align-content: center;
  margin-top: 10%;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 350px;
  //background-color: #fcfcfc !important;
  background: transparent;
  border: none;
}

.card-header {
  background: transparent;
}

.card-footer {
  background: transparent;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #03045e;
}

.social_icon span:hover {
  color: #90e0ef;
  cursor: pointer;
}

.card-header h3 {
  color: #03045e;
  background: transparent;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #03045e;
  color: white;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: #03045e;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: white;
  background-color: #03045e;
  width: 100px;
}

.login_btn:hover {
  color: #03045e;
  background-color: #90e0ef;
}

.links {
  color: #03045e;
}

.links a {
  margin-left: 4px;
}
</style>