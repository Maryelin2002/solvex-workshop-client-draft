// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class LoginMixin extends Vue {
    get isLoggedIn() {
        return this.$store.getters.isLoggedIn;
    }
    switchLoggedIn(){
        this.$store.state.loggedIn = !this.$store.state.loggedIn;
    }
}