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
            <input type="text" placeholder="Account Name" name="AccountName" id="AccountName" v-model="accountName" v-tooltip="'This is the portion of the URL where the \'www\' would normally reside: https://{accountname}.leankit.com/.'" />
            <input type="text" placeholder="Username" name="Username" id="Username" v-model="username" />
            <input type="password" placeholder="Password" name="Password" id="Password" v-model="password" />
            <input type="checkbox" name="Remember" id="Remember" v-model="remember" />
            <label for="Remember">Remember Me</label>
            <input type="button" name="Login" id="Login" value="Login" @click="login()" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import axios from "axios";
import keytar from "keytar";
import storage from "electron-json-storage";
import _ from "lodash";

export default {
  name: "landing-page",
  data: () => {
    return {
      accountName: "",
      username: "",
      password: "",
      remember: false
    };
  },
  methods: {
    login () {
      axios
        .get("https://" + this.accountName + ".leankit.com/io/board", {
          auth: { username: this.username, password: this.password }
        })
        .then(result => {
          storage.set("accountName", { accountName: this.accountName },
            error => {
              if (error) throw error;
            }
          );
          if (this.remember) {
            keytar.setPassword("leankitDesktop", this.username, this.password);
          } else {
            keytar.deletePassword("leankitDesktop", this.username);
          }
          this.$router.push({ name: "boards", params: { boards: result.data.boards } });
        });
    }
  },
  mounted: async () => {
    if (storage.has("accountName", (error, hasKey) => {
      if (error) throw error;

      if (hasKey) {
        storage.get("accountName", (error, data) => {
          if (error) throw error;
          this.accountName = data.accountName;
        });
      }
    }));

    await keytar.findCredentials("leankitDesktop").then((account) => {
      if (account) {
        this.username = _.last(account).account;
        this.password = _.last(account).password;
        this.remember = true;
      }
    });
  }
};
</script>

<style lang="scss">
@import "../style/main";
</style>
