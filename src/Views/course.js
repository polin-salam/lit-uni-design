import { css, html, LitElement } from "lit-element";
import { Router } from '@vaadin/router';
import '../Components/Toast/lit-toast.js';
class Course extends LitElement{

    static get styles() {
       
        return css`
                  
           
          .contener{
              display: grid;
              height: 100vh;
              background-color:white;
            
          grid-template-rows: 0.2fr 0.5fr 0.1fr 2fr;
          
          
          
          
                                    
             
              
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
             font-family: 'Roboto', sans-serif;
             margin-right: 10px;
             align-items: center;
             text-decoration: none;
             letter-spacing: 0.02em;
             color: black;
          }
          .w1{
               width:70%;
               background:rgba(239, 245, 251, 1);
               height:220px;
               display:grid;
               float: left;
               border-radius: 3px;
               justify-self:end;
               grid-template-columns: 1fr 0.5fr;
               margin-right:70px ;
               padding-left: 30px;
          }
             img{
                 padding-left: 25px;
                 height:220px;
                 width:90%;
              
             }
             p{
                 color:#000000;;
                 padding-right: 30px;
                 float: right;
                 display: grid;
                 text-align: end;
                padding-top:140px ;
                font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 23px;
          letter-spacing: 0.03em;
                
              
             }
             button{
              padding: 30px;
              border: none;
              background: none;
             }
             ul{
                 text-decoration: none;
             }
             li{
                 text-decoration: none;
                 list-style-type: none;
                 float: right;
                 padding-right: 10px;
                 
             }
             h3{
                float:right; 
                font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 18px;
           
          align-items: center;
          letter-spacing: 0.03em;
          
          color: #000000;  
             }
             .course{
                 float: left;
                 padding-left: 200px;
             }
             .CourseGroup{
                 display: grid;
                 grid-template-columns:1fr 1fr 1fr ;
                 grid-template-rows:1fr 1fr 1fr ;
                 background-color:white;
                 justify-self:end;
                 width:90%;
                 border-radius: 10px;
                 margin-right: 20px;
                 padding-top:20px ;
                 padding-right:20px ;
                 justify-content: center;
                 align-items: center;
                
                 
                 
                 
                 
          
             }
             .ii{
                width:90% ;
                height: 190px;
                background-color:rgba(239, 245, 251, 1);
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
             height: 90px;
             width: 90px;
             background-color: #bbb;
             border-radius: 50%;
             margin-top:0px;
             padding-top:0px;
             margin-left:20px;
            
             
              
           }
           h4{
               text-align: center;
               margin-bottom: 10px;
               margin-top: 0px;
           }
            a:hover {
                background-color:#d6ffff ;
               }
                
                     `
        
        
          }
          goTo(param){
            Router.go(param)
        }
         
        
          render() {
        
            return html`
               
            
              <!-- <a @click=${()=>this.goTo('/')}>Home</a> -->
              <div class="contener">
            <div class="homeheder"> 
            <header>
            <a @click=${()=>this.goTo('/Home')}>Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Poadcasts</a>
            <a href="">Courses</a>
            <a href="">Sign in</a>
            <a href="">Sign up</a>
        
            </header>
            </div>
            <div class="w1">
        
        <div class="column1"><p>My enrolled courses</p>  </div>
        <div class="column2"> <img src="./img/icons/image course.png"></div>
            </div>
        <div class="listaitem">
            <ul>
                <li>
                    <button class="butono"> 
                        <img src="./img/icons/list.png" style="width:40px; height:40px;">
                    </button>
                </li>
            </ul>
            <h3>Filter</h3>
            <ul class="course">
                <li >
                    Course Group
                </li>
            </ul>
        
        </div>
        <div class="CourseGroup">
            <div class="ii">
            <figure>
            <span class="dot" style="background:
            rgba(255, 0, 0, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla bla bla</figcaption>
          </figure>
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
            rgba(204, 78, 78, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla bla bla</figcaption>
          </figure>
                
               
                 
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
             rgba(79, 226, 66, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla bla bla</figcaption>
          </figure>
              
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
           rgba(231, 178, 79, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla  bla bla</figcaption>
          </figure>
               
            
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
            rgba(117, 56, 214, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla  bla bla</figcaption>
          </figure>
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
           rgba(34, 204, 181, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla  bla bla</figcaption>
          </figure>
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
            rgba(131, 214, 23, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla  bla bla</figcaption>
          </figure>
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
            rgba(28, 71, 189, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla bla bla</figcaption>
          </figure>
            </div>
            <div class="ii">
            <figure>
            <span class="dot" style="background:
           rgba(214, 26, 167, 0.7);"></span>
            <h4>Microservice</h4>
            <figcaption>bla bla bla  bla bla</figcaption>
          </figure>
                 </div> </div>
            
        
        
        
        
        </div>
             
            `
          }
        
        }
        customElements.define('course-uni',Course);