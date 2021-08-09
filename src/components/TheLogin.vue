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
                <router-link to="/UserHome"><button class="button is-primary">Sign in</button></router-link>
            </form>
        </div>
            
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheLogin extends Vue { }

</script>

<style lang="scss" scoped>
@import "../assets/styles/themecolors.scss";

.login-page{
	padding-top: 90px;
}

.form{
    width: 500px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.btnsign{
    background-color: $lighterblue;
    border-radius: 5px;
    color: $white;
    width: 100%;
    height: auto;
}


</style>