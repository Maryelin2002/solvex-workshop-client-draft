<template>
    <div class="sidebar">
      <router-link to="/" class="active">Home</router-link>
      <router-link to="/workshops" >WorkShops</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheSideBar extends Vue { }
</script>

<style scoped lang="scss">
@import "../assets/styles/themecolors.scss";

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: $white;
  position: fixed;
  height: 100%;
  overflow: auto;
  top: 70px;
  border-right: 3px solid $lighterblue;
  font-weight: bold;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: $darkerblue;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: $orange;
  color: $white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: $darkerblue;
  color: $orange;
}

</style>