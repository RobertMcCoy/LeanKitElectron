<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
          LeanKit for Desktop
        </span>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Login to Get Started</div>
          <div class="login">
            <input type="text" placeholder="AccountName" name="AccountName" id="AccountName" v-model="accountName" />
            <input type="text" placeholder="Username" name="Username" id="Username" v-model="username" />
            <input type="password" placeholder="Password" name="Password" id="Password" v-model="password" />
            <input type="button" name="Login" id="Login" value="Login" @click="login()" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    name: 'landing-page',
    data: function () {
      return {
        accountName: '',
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        axios
          .get('https://' + this.accountName + '.leankit.com/io/board', { auth: { username: this.username, password: this.password } })
          .then((result) => { console.log(result) })
      }
    }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat", sans-serif;
  color: white;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(17, 153, 142, 1) 40%,
    rgba(56, 239, 125, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.login input {
  margin: 10px 0;
  padding: 5px 10px;
  display: block;
}

.login #Login {
  color: black;
}

</style>
