import { css, html, LitElement } from "lit-element";
import { Router } from '@vaadin/router';
import '../Components/Toast/lit-toast.js';

class Homeuni extends LitElement {

  static get styles() {
  return css`
     .contener{
      display: grid;
      height: 100vh;
      background-color:white;
     
     grid-template-rows: 0.2fr 0.5fr 0.3fr 1fr;
  
  }
  .homeheder{
  
  
  height: 50px;
  display: grid;
  width: 99.9%;
  background-color:white;
  
  align-items: center;
  
  
  }
  
  
  header >a{
      
     float: right;
     margin-left: 20px;
    padding-bottom: 2px;
    padding-top: 10px;
     margin-right: 10px;
     align-items: center;
     text-decoration: none;
     letter-spacing: 0.02em;
     color: black;
  }
  .w1{
      width:80%;
      height:270px;
      display:grid;
      border-radius: 3px;
      justify-self:end;
      justify-content: center;
     
      grid-template-columns: 1fr 0.5fr;
      margin-right:40px ;
      
      
  }
   img {
      width:100%;
      height:250px;
      max-width: 1000px;
      
  }
  p{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  
  letter-spacing: 0.03em;
  
  color: #000000;
  
  
  }
  button{
       width: 90px;
      height: 30px;
      margin-left: 100px;
      margin-top: 100px;
      color: #FFFFFF;
      background: #2593BD;
      border-radius: 15px;
                          }
  .circle{
                              
      width: 100%;
      height: 210px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
                          }
  .ii{
      width:90% ;
      height: 190px;
      display: grid;
      justify-self:end;
      margin-bottom: 10px;
      border-radius: 9px;
        
         display: grid;
         justify-content: center;
         
  
        
  
     }
  .dot {
      display:grid;
    text-align: center;
      height: 170px;
      width: 170px;
      color: white;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    margin-top: 10px;
    font-size: 40px;
      
    }
    h4{
        text-align: center;
        margin-bottom: 90px;
        margin-top: 4px;
        color:black;
        font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  
  
  letter-spacing: 0.03em;
  
  color: #000000;
    }
   
      a:hover  focuse{
        background-color:#d6ffff ;
      }
      .slider{
        margin-top:50px;
       
          display: grid;
         
          background-color:#FFFFFF;
          width: 80%;
          justify-self: center;
          justify-items: center;
          height: 380px;
          
  
  
  
       }
       
  `}
  goTo(param){
    Router.go(param)
}
   


  render() {

      return html`
       <div class="contener">
      <div class="homeheder"> 
      <header>
      <a href="">Home</a>
      <a href="">Contact</a>
      <a href="">About</a>
      <a href="" @click=${()=>this.goto('/poadcast')}>Poadcasts</a>
      <a  href="" @click=${()=>this.goTo('/course')}>Courses</a>
      <a href="">Sign in</a>
      <a href="">Sign up</a>
  
      </header>
      </div>
      <div class="w1">
          <div><p>Teaching in the Internet age <br/>
                  means we must teach tomorrow’s <br/>
                  skills today.</p>
          <button>Try with us</button>
          </div>
          <div class="column2"> <img src="./img/icons/image home.png" ></div>
            </div>
           
   

   <div class=" circle">
      <div class="ii">
          <span class="dot" style="background:rgba(37, 147, 189, 1)">11,331</span> <h4>Course</h4></div>
          <div class="ii">
              <span class="dot" style="background:
              #DD8D59;">634</span>
               <h4>Prodcast</h4></div>
              <div class="ii">
                  <span class="dot" style="background:
                  rgba(21, 2, 105, 0.7);">257</span>
                   <h4>Instructors</h4></div>

   </div>
   
   <div class="slider">
          
          <img src="https://1.bp.blogspot.com/-y-IRQqPLggU/WRWRwUxeL0I/AAAAAAAAADQ/n2xrfxpCloYhBiRA0frvXSyJzdV-ZS0BgCLcB/s728-e100/learn-computer-programming-how-to-code-online-training-course.png" style="width:100%; height:380px; justify-content:center;">
          


       </div>
      `}
         


}
customElements.define('home-uni',Homeuni);
 