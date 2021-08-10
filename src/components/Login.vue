<template>
    <div class="login-page">
        <div class="form">
            <form class="box">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input class="input" type="email" placeholder="e.g. alex@example.com">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="password" placeholder="********">
                    </div>
                </div>
                <button class="button is-primary" @click="switchLoggedIn"
              label="Home"
              tag="router-link"
              :to="{ path: '/' }">Sign in</button>
            </form>
        </div>
            
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from "vue-class-component"
import { LoginMixin } from "@/mixins/login.mixins"

@Component
export default class Login extends mixins(LoginMixin) { }
</script>

<style lang="scss" scoped>
@import "../assets/styles/themecolors.scss";

.login-page{
	padding-top: 90px;
}

.form{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

</style>