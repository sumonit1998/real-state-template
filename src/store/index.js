import { createStore } from 'vuex'
import latestPosts from './modules/latestPost'
import projects from './modules/projects'

//const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    latestPosts,
    projects
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})