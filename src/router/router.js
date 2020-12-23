import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
      path:'/',
      name: 'home',
      component: () => import('@/pages/index'),
      meta: {
        title: 'IM'
      }
    },{
      path:'/chat',
      name: 'chat',
      component: () => import('@/pages/chat'),
      meta: {
        title: 'IM'
      }
    }
  ];
  
  // add route path
  routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
  });
  
  const router = new Router({ routes });
  
  router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
      document.title = title;
    }
    next();
  });
  
  export {
    router
  };