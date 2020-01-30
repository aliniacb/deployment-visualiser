import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import services from './services/service'


async function example() {
  const teamServices = await services.getServices()
  console.log("Team services:")
  console.log(teamServices)

  const statuses = await Promise.all(
    Object.keys(teamServices)
      .map(team => services.getTeamStatus(teamServices[team]))
  )

  console.log(statuses)
}

// example()



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
