import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        Count: 0,
        cart: [],
    },
    mutations: {
        incCount: (state) => state.Count += 1,
        addProduct: (state, product) => state.cart.push(product),
        clear: (state) => { state.cart.length=0, state.Count=0},
    },
    getters: {
        Count: (state) => {
            return state.Count
        },
        List: (state) => {
            return state.cart
        },
    }
})
export default store;
