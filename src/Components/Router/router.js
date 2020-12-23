import { Router } from '@vaadin/router';
import  '../../Views/Home/home-container'
import {checkRouterAccess} from '../@guard/AuthGuard'

export function initRouter() {
    const router = new Router(document.querySelector('main')); 
  
  
    router.setRoutes([
         {
            path:'/',
          component:'test-login',
          action:()=>import ('../../Views/test-login')
        },
        {
          path: '/Home', 
          component: 'home-uni',
          action:()=>import ('../../Views/home-uni')
          
        },
        {
          path: '/course',
          component:'course-uni',
          action:()=>import ('../../Views/course')
          
         
        },
        {
        path:'/poadcast',
        component:'poadcasts-uni',
        action:()=>import('../../Views/poadcast')
          
        },
         
      
      
      {
        path: '(.*)', 
        component: 'not-found-view',
        action: () =>
          import(/* webpackChunkName: "not-found-view" */ '../../Views/Notfound/not-found-view')
      }
    ]);
  }