import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import admin from './module-admin'
// import admin from './adminModule/admin'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      admin
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
    // strict: process.env.NODE_ENV !== 'production'
  })

  // if (process.env.DEV && module.hot) {
  //   module.hot.accept(['./module-admin'], () => {
  //     const newShowcase = require('./module-admin').default
  //     Store.hotUpdate({ modules: { admin: newShowcase } })
  //   })
  // }

  return Store
}
