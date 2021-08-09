<template>
  <div id="app-content">
    <TheHeader/>
    <div class="columns">

      <div class="column">
		
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from './components/TheHeader.vue';

@Component({
  components: {
    TheHeader
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "assets/styles/themecolors.scss";
.columns{
  padding-top: 70px;
}

</style>
