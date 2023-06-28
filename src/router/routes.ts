import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: import('pages/index.vue'),
    meta:{
      keepAlive:true
    },
    children:[

    ]
  }
  ,
  {
    path: "/user",
    component: import('pages/user.vue')
  }
  ,
  {
    path: "/camera",
    component: import('pages/camera.vue')
  },
  {
    path:"/work/:id",
    component:import('pages/works.vue'),
  }
];

export default routes;
