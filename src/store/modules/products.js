//import shop from './../../api/shop'
import axios from "axios";
// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  async getAllProducts ({ commit }) {
    //const products = await shop.getProducts()
    try {
      const products = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dd29379b24b146158f657cbdbceb0dac"
      );
      commit("setProducts", products.data.articles);
    } catch (error) {
      alert(error);
      console.log(error);
    }
    //commit('setProducts', products)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}