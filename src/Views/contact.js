import { css, html, LitElement } from "lit-element";
import { Router } from '@vaadin/router';
import '../Components/Toast/lit-toast.js';


class Contact extends LitElement{

    static get styles() {
        return css`
 
.contener{
    display: grid;
    height:80vh;
    grid-template-rows: 0.2fr 0.5fr 0.3fr 1fr;
               }
     
    .about{
    margin-top: 30px;
    background-color:#EFF5FB;
    width:80%;
    height:83%;
    border-radius:4px ;
    display: grid;      
    justify-self: center;
    grid-template-rows: 1fr 3fr;
          }
       
.top{
            
    display: grid;
    grid-template-columns: 1fr 1fr;
           }
  
.bottom{
             
    margin-left: 80px;
    width: 84%;
    height: 600px;
    border-radius: 9px;
    padding-left: 20px;
       }
p{
    font-family: 'Roboto', sans-serif;
    width:90%;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    color: #807A7A;
  
       }
.left{
       
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 75px;
    display: grid;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.03em;
    color: #000000;
    text-decoration:underline;
    }
img{
     max-width:100%;
      }
  
h4{
      padding-top:20px;
      margin-left:30px;
      margin-bottom:1px;
      font-family: 'Roboto', sans-serif;
     }

.input{
    background: #FFFFFF;
    border: 1px solid #5884A9;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-top:4px;
    margin-left:29px;
    width:89%;
    padding-left:10px;
       }

button{
    width: 280px;
    height: 70px;
    background: #4C7BA4;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    font-size: 30px;
    line-height:40px;
    border:none;
               
           }
.POST{
   display:grid;
   justify-self:center;
 }

.title{
   height:70px;
      }
           
.descrption{
   height:200px;
   dispaly:grid;
     }

.btn{
  display: grid;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  margin-top:30px;
  border:none;
   }
           
           
  
`}
    render() {

        return html`
<div class="contener">
 <div class="about">
 <div class="top"> 
  <div class="left"><h2>Contact Us</h2> </div>
  <div class="right"><img src="./img/icons/image course.png"></div>
   </div>
  <div class="bottom">
  <form method="POST">
  <h4>Title :</h4>
<input  class="input title"type="text"  name="Title" placeholder="Title:">
<h4>Description :</h4>
        <input  class="input descrption"type="text"  name="E-mail" placeholder="Description:">
     <div class="btn">   <button>Send</button></div>
      </form>
               
     
           </div>
            </div>
        </div>


       

`

}

}
customElements.define("contact-uni",Contact)