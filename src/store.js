import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './store/auth.module';
import createPersistedState from 'vuex-persistedstate';
//import Cookies from 'js-cookie';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [createPersistedState()]
})
