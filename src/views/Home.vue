<template>
  <div class="home">
    <div class="columns">

      <div class="column">
        <TheLogin />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheLogin from "@/components/TheLogin.vue";

@Component({
  components: {
    TheLogin
  },
})
export default class Home extends Vue {}
</script>
