import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/table'
    },
    {
      path: '/table',
      name: 'table',
      component: function (resolve) {
        require(['../components/table.vue'], resolve);
      }
    }, {
      path: '/reservation',
      name: 'reservation',
      component: function (resolve) {
        require(["../components/reservation.vue"], resolve);
      }
    }, {
      path: '/food',
      name: 'food',
      component: function (resolve) {
        require(["../components/food.vue"], resolve);
      }
    },

  ]
})
