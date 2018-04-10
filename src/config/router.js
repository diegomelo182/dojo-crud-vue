import VueRouter from 'vue-router'

import Home from '../home/screens/Home.vue'
import CdList from '../compact-disk/screens/CdList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/compact-disks',
    name: 'CdList',
    component: CdList
  }
];

export default new VueRouter({
  routes
});
