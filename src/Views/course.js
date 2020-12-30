import { css, html, LitElement } from "lit-element";
import { Router } from '@vaadin/router';
import '../Components/Toast/lit-toast.js';
class Course extends LitElement {

  static get styles() {

    return css`
         
    .contener{
      display: grid;
      height: 80vh;
      background-color:white;
      grid-template-rows: 0.5fr 0.1fr 2fr;
     
    }
    
    .w1{
      width:70%;
      background:rgba(239, 245, 251, 1);
      height:300px;
      display:grid;
      border-radius: 3px;
      justify-self:end;
      grid-template-columns: 1fr 0.5fr;
      margin-right:70px ;
      padding-left: 30px;
      margin-top:40px;
    }
    
    @media only screen and (max-width: 480px) {
      img {
       width: 100%;
       height: auto;
        
     }
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
      padding: 0;
      border: none;
      background: none;
      margin-right:60px;
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
       margin-right:30px;
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
         grid-template-rows:200px 200px 200px;
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
         height: 195px;
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
      margin-top: 0px;
      margin-left:40px;
    }
    h4{
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .bla{
        text-align: center;
        color: blanchedalmond;
    }
    .coursegolang{
      text-decoration:none;
      color:black
     }
     a:focus{
       color:red;
     }
     
 
`}
goTo(param) {
  Router.go(param)
}
  render() {

    return html`
              <div class="contener">
              
                <div class="w1">
              
                  <div class="column1">
                    <p>My enrolled courses</p>
                  </div>
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
                    <li>
                      Course Group
                    </li>
                  </ul>
              
                </div>
                <div class="CourseGroup">
                  <div class="ii">
                    <figure>
                      <span class="dot">
                      
                      <img src="data:image/png;base64,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" style="width:100%;height:100px;border-radius: 50%;">
                      </span>
                     <h4>golang</h4>
                     <a @click=${() => this.goTo('/corsegroup')}title="golang is the best language"class="coursegolang">install golang on linux</a> 
                    </figure>
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                        rgba(204, 78, 78, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
              
              
              
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                         rgba(79, 226, 66, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
              
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                       rgba(231, 178, 79, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
              
              
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                        rgba(117, 56, 214, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                       rgba(34, 204, 181, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                        rgba(131, 214, 23, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                        rgba(28, 71, 189, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
                  </div>
                  <div class="ii">
                    <figure>
                      <span class="dot"
                        style="background:
                                                                                                                                                       rgba(214, 26, 167, 0.7);"></span>
                      <h4>Microservice</h4>
                      <figcaption>bla bla bla bla bla</figcaption>
                    </figure>
                  </div>
                </div>
               </div>
             
            `
  }

}
customElements.define('course-uni', Course);