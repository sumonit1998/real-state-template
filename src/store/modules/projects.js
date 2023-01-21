import project from './../../api/recentProject';
const state = () => ({
    allProjects: []
 })
 
 const getters = {}

 const actions = {
   getAllProjects ({ commit }) {
      project.getProjects(projects => {
        commit('setProjects', projects)
      })
   }
 }
const mutations = {
   setProjects (state, projects) {
      state.allProjects= projects
   }
 }

 export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}