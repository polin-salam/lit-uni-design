import { Router } from '@vaadin/router';
import '../../Views/Home/home-container'
import { checkRouterAccess } from '../@guard/AuthGuard'
export function initRouter() {
  const router = new Router(document.querySelector('main'));
 
  
  router.setRoutes([
    {
      path: '/',
      component: 'home-uni',
      action: () => import('../../Views/home-uni')

    },
    {
      path: '/course',
      component: 'course-uni',
      action: () => import('../../Views/course')


    },
    {
      path: '/podcast',
      component: 'poadcasts-uni',
      action: () => import('../../Views/poadcast')

    },
    {
      path: '/contact',
      component: 'contact-uni',
      action: () => import('../../Views/contact')


    },
    {
      path: '/about',
      component: 'about-uni',
      action: () => import('../../Views/about')


    },
    {
      path: '/corsegroup',
      component: 'course-group-uni',
      action: () => import('../../Views/coursegroup')

    },



    {
      path: '(.*)',
      component: 'not-found-view',
      action: () =>
        import(/* webpackChunkName: "not-found-view" */ '../../Views/Notfound/not-found-view')
    }
  ]);
}