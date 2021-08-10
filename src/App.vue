<template>
  <div id="app">
    
    <div v-if="isLoggedIn">
      <navbar />
      <sidebar />

      <div class="main-content">
          <router-view />
      </div>
    </div>

    <div v-else>
      <Login />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from "vue-class-component"
import { LoginMixin } from "@/mixins/login.mixins"

@Component
export default class App extends mixins(LoginMixin) { }

</script>

<style lang="scss">
@import "assets/styles/themecolors.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
