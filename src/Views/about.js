import { css, html, LitElement } from "lit-element";
import { Router } from '@vaadin/router';
import '../Components/Toast/lit-toast.js';

class About extends LitElement {
  static get styles() {
    return css`
      
    .contener{
      height:80vh;
    display: grid;
   background-color:white;
  grid-template-rows: 0.5fr 0.1fr 2fr;
 
}
        .about{
        margin-top: 30px;
        background-color:  #E5E5E5;
        width:90%;
        height:100%;
        border-radius:4px ;
        grid-template-rows: 1fr 3fr;
        padding:20px;
        display:grid;
        justify-self:center;
        


} 
 
     
     .top{
         background-color: #E5E5E5;   
         display: grid;
         grid-template-columns: 1fr 1fr;
         }

     .bottom{
        background-color:white;
        display:grid;
        justify-self:center;
        width: 84%;
        height:60%;
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
       font-size: 30px;
       line-height: 70px;
       display:grid;
       justify-self: center;
       align-self: center;
       letter-spacing: 0.03em;
       color: #000000;
       text-decoration:underline;
       }
@media only screen and (max-width: 480px) {
   img {
    width: 100%;
    height: auto;
  }
}`}
  render() {

    return html`
        <div class="contener">
        
          <div class="about">
            <div class="top">
              <div class="left">
                <h2>About-us</h2>
              </div>
              <div class="right" style="margin-left:199px;"><img src="./img/icons/image course.png"></div>
            </div>
            <div class="bottom">
              <p> We've created a sample About Us template designed to work well for virtually any online store, blog, or
                website. Just fill in the brackets with your company's information and you'll have a professional About Us page
                written in minutes. If you want to put a personal touch on your page (which we highly recommend), check out the
                About Us examples below the template.</p>
            </div>
          </div>
        </div>

`

  }

}
customElements.define('about-uni', About);