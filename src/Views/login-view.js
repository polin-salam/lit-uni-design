import { LitElement, html, css } from 'lit-element'; 
import {LoginStyle} from '../css/loginStyle.js'
import '../Components/Toast/lit-toast.js';

import { Router } from '@vaadin/router';
class Login extends LitElement { 

  static get styles(){
    return [
      LoginStyle
    ]
  }
  static get properties(){
    return{
          Username:{type: String},
          Password: {type: String},
    }
  }
  
  constructor(){
    super();
    this.Password='';
    this.Username='';
}

  render() {
    return html`
    <lit-toast></lit-toast>
    <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" style="width:200px;height:200px" id="icon" alt="User Icon" />
      </div>
      <form method="POST">
        <input type="text" id="Username" class="fadeIn second" name="Username" value=${this.Username} @change=${(e)=>{this.Username=e.srcElement.value}} placeholder="login">
        <input type="password" id="Password" class="fadeIn third" name="Password" placeholder="password" value="${this.Password}" @change=${(e)=>{this.Password=e.srcElement.value}}>
        <input type="button" class="fdanielzawadzkiadeIn fourth" value="Log In" @click=${this.LoginProclickcess}>
      </form>
    </div>

     
    `;
  }


  LoginProclickcess(){
    if(this.Password!='' && this.Username!='')
    {
      fetch('http://127.1.1.0:7173/api/restapi/v1/login',
      {
        method:'POST',
        body:JSON.stringify(
      {  
        username:this.Username,
        password:this.Password
      })}
      ).then(async res=>{
           var result=await res.json()
         return { result,status:(res.status==200)?true:false}
      }).then(response=>{
        if(response.status!=true)
        this.shadowRoot.querySelector('lit-toast').show(response.result.error.message,'danger');
        else{
          this.shadowRoot.querySelector('lit-toast').show(response.result.message,'success');
          localStorage.setItem('data',JSON.stringify(response.result.data))
          Router.go('/Home')
        }
      })
      .catch(error=>{this.errorMessage=error.title;})
     
    }else{
      this.shadowRoot.querySelector('lit-toast').show('tkaya xanakan pr bkawa','warning')
    }
  }
}

customElements.define('login-view', Login); 