<template>
  <div class="header">
    <img alt="Solvex WorkShops" src="../assets/imgs/solvex.png" width="400px" height="44px">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue { }
</script>

<style scoped lang="scss">
@import "../assets/styles/themecolors.scss";

.header{
  overflow: hidden;
  background-color: $white;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 3px solid $lighterblue;
  height: 70px;
}


</style>