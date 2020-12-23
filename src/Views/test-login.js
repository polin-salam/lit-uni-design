import { css, html, LitElement } from "lit-element";
import {LoginStyle} from '../css/loginStyle.js'
import '../Components/Toast/lit-toast.js';
import "./home-uni.js"


import { Router } from '@vaadin/router';
class Testlogin extends LitElement{

    static get styles(){
        return css `
        
      body{
        padding:0;
        margin:0;
        
      }
      
      .container {
        
         
          display: grid;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-image: linear-gradient(rgba(75, 122, 163, 1) , white);
          
        

      }

     
    .login-box {
         

        align-item: center;
          width:660px;
          height: 350px;
         
         
          

      }

      .login-box > .header {

          height: 70px;
          display: grid;
          justify-content: center;
      }

      .login-box > .header > .half {
          background-color: white;
          width:220px;
          height:220px;
          border-radius: 100%;
          
      }

      .loginer {
          background-color: white;
          border-radius:20px;
          padding-left:29px;
          padding-right:29px;
          


      }
      
   
      h4{
          padding-top:30px;
          margin-left:1px;
          margin-bottom:1px;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 47px;
          /* identical to box height */


color: #000000;


      }
      
  .input{

          height:50px; 
          background: #FFFFFF;
          text-decoration: none;
          border: 1px solid #5884A9;
          box-sizing: border-box;
          font-size: 16px;
          margin-top:4px;
          width: 98%;
          padding-left:10px;
          margin-right:5px;
          margin-left:5px;
       
         
          
                }
                .bottm{
                   width: 260px;
                   height: 60px;
                   border-radius:2px;
                   margin-top:20px;
                   margin-left:159px;
                  font-family: 'Roboto', sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 30px;
                  line-height: 30px;
                  color: #FFFFFF;
                  background: #4C7BA4
                                                          
                              }
          
                .forget{
                     width: 200px;
                     height: 60px;
                     padding-top:0px;
                     margin-top:0px;
                     margin-left:230px;
          
           
                }
                .forget >a{
                      text-decoration:none;
                      color:rgba(82, 128, 166, 1);
                      font-family: 'Roboto', sans-serif;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 15px;
                      line-height: 35px;
                }
          
                img{
                     
                      object-fit: cover;
                      width: 80%;
                      max-height: 80%;
                      margin-top:10px;
                      margin-left:15px;
                      border-top-left-radius: 900px;
                      border-top-right-radius:900px;
                      background-size: cover;  
                      background-position: center
          
          
                }

 

           `
        
         
      }
      static get properties(){
        return{
              Email:{type: String},
              Password: {type: String},
        }
      }
      
      constructor(){
        super();
        this.Password='';
        this.Email='';
    }
      
render(){

     return html `
    
   
    
    <div class="container">
     
        <div class="login-box">
            <div class="header">
      <div class="half"> 
      <img src="./img/icons/image 2.png">
                </div>
            </div>
            <div class="loginer">
            <form>
            <h4>E-mail :</h4>
        <input  class="input"type="text"  name="E-mail" placeholder="Email:" value=${this.Email} @change=${(e)=>{this.Email=e.srcElement.value}}>
        <h4 >Password :</h4>
        <input  class="input" type="password"    name="Password" placeholder="password" value=${this.Password} @change=${(e)=>{this.Password=e.srcElement.value}} >
        
        <input type="button" class="bottm" value="Sign In" @click=${this.Login}>
        <h4  class="forget" ><a href=""> Forget password?</a></h4>
      </form>
      
            </div>
            
        </div>
    </div>
 

  `
}
Login(){
  if(this.Email=="polin.salam@gmail.com" && this.Password=="12345"){
     Router.go('/Home')}else{
    console.log("email & password is wrong:");
  }
}

}
 customElements.define('test-login',Testlogin );