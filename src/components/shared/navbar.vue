<template>
  <b-navbar id="navbar" :class="{'navbar-on-sidebar-reduced':isSidebarReduced, 'navbar-on-sidebar-not-reduced':!isSidebarReduced}">
    <template #brand>
      <b-navbar-item href="#" @click="switchSidebarReduce" tag="div" >
        <button class="btn"><i class="fa fa-bars"></i></button>
      </b-navbar-item>
    </template>
    <template #end>
       <b-navbar-dropdown label="User">
        <b-navbar-item href="#"> Profile </b-navbar-item>
        <b-navbar-item href="#"> My workshops </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light" @click="confirmLogout"
          type="is-primary"
          size="is-medium"
          > Log out </a>
        </div>
      </b-navbar-item>
       
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { SidebarMixin } from '@/mixins'
import { LoginMixin } from '@/mixins/login.mixins'

@Component({

})
export default class Navbar extends mixins(SidebarMixin, LoginMixin) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $buefy: any;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  confirmLogout() {
    this.$buefy.dialog.confirm({
      message: 'Are you sure you want to logout?',
      onConfirm: () => { 
        this.$buefy.toast.open('Logout successful');
        this.$store.state.loggedIn = !this.$store.state.loggedIn;
        this.$router.push("/");
      }
    })
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/themecolors.scss";

#navbar{
 position: absolute;
  right: 0;
}
.navbar-on-sidebar-not-reduced{
  width: calc(100% - 260px);
}
.navbar-on-sidebar-reduced{
  width: calc(100% - 90px);
}

.btn {
  background-color: $lighterblue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: $darkerblue;
}
</style>
