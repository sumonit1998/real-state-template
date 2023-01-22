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
  async getAllLatestPosts ({ commit }) {
    //const products = await shop.getProducts()
    // try {
      const latestPosts = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dd29379b24b146158f657cbdbceb0dac"
      );
      commit("setLatestPosts", latestPosts.data.articles);
      //console.log(products.data.articles);
    // } catch (error) {
    //   alert(error);
    //   console.log(error);
    // }
    //const allpost = latestPosts;
   // console.log(allpost)
  }
}

// mutations
const mutations = {
  setLatestPosts (state, latestPosts) {
    state.all = latestPosts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}