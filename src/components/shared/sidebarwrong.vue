<template>
  <section>
    <b-sidebar type="is-light" open fullheight :reduce="isSidebarReduced">
      <div class="p-1">
        <div class="block">
          <img
            src="@/assets/imgs/solvex-without-bg.png"
            alt="Solvex WorkShops"
          />
        </div>
        <b-menu class="is-custom-mobile">
          <b-menu-list label="Menu">
            <b-menu-item
              icon="information-outline"
              label="Home"
              tag="router-link"
              :to="{ path: '/' }"
            >
            </b-menu-item>
             <b-menu-item
                icon="view-list"
                label="My workshops"
                tag="router-link"
                :to="{ path: '/workshops' }"
              ></b-menu-item>
            <b-menu-item active expanded icon="settings" label="Administrator">
              <b-menu-item
                icon="account"
                label="Users"
                tag="router-link"
                :to="{ path: '/admin/users' }"
              ></b-menu-item>
              <b-menu-item
                icon="view-list"
                label="Workshops"
                tag="router-link"
                :to="{ path: '/admin/workshops' }"
              ></b-menu-item>
            </b-menu-item>
            <b-menu-item
              icon="account"
              label="My profile"
              tag="router-link"
              :to="{ path: '/profile' }"
            >
              <b-menu-item
                icon="account-box"
                label="Account data"
              ></b-menu-item>
              <b-menu-item icon="home-account" label="Addresses"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item icon="logout" label="Logout"  @click="confirmLogout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>


<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { SidebarMixin } from "@/mixins";
@Component
export default class Sidebar extends mixins(SidebarMixin) {
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
.p-1 {
  padding: 1em !important;
}

</style>
