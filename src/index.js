import './styles.css';
import './Views/login-view.js';
import {initRouter} from './Components/Router/router'
import { interceptNetworkRequests } from './Components/@guard/network-intercept';
   
window.addEventListener('load', () => { 
  initRouter();
  registerSW();
  interceptNetworkRequests();
});
export async function registerSW() {
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./sw.js'); 
    } catch (e) {
      console.log('ServiceWorker registration failed. Sorry about that.', e);
    }
  } else {
    console.log('Your browser does not support ServiceWorker.');
  }
}
