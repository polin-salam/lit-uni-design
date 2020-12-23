import { html } from 'lit-element';
import { BaseView } from '../base-view.js';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import {updateLang} from '../../redux/actions'
import  '@material/mwc-button'
import {Get} from '../../Components/@service/HttpService'
import { getCurrentUserData } from '../../Components/@guard/AuthGuard.js';
class Home extends connect(store)(BaseView) {

  stateChanged(state) {
    // it will be effected when component State will be change 
   } 

  EffectState(e) {
    //to effect or intraction with  redux state
    store.dispatch(updateLang('en'));
  }

  render() {
 
    return html`
    <div>
      <h1>Welcome Home ${getCurrentUserData('username')}</h1>
    
      <mwc-button id="myButton" label="Test unauthenticate api request!" raised @click=${this.TestIntercept}></mwc-button>
    
    </div>
    `;
  }


  async TestIntercept(){
    await Get('/api/restapi/v1/companies',[1,'roles'])
    
  }
}

customElements.define('home-view', Home);