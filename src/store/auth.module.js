import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export const auth = {
    namespaced: true,
    state: {
        authenticated: false
    },

    mutations: {
        setAuthentication(state, status) {
            state.authenticated = status;
        }
    },

    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
}


// state: {
//     // this object holds the state data
// },

// mutations: {
//      // this object holds the mutation functions
// },

// actions: {
//     // this object holds the actions functions
// },

// getters: {
//     // this object holds the getters
// }

// });