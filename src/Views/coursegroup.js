import { css, html, LitElement } from "lit-element";
import { Router } from '@vaadin/router';
import '../Components/Toast/lit-toast.js';
class CourseGroup extends LitElement {

  static get styles() {

    return css`
    .contener{
      display: grid;
          height:80vh;
    }
        
::-webkit-scrollbar {
    width:7px;
    }
  
  /* Track */
   ::-webkit-scrollbar-track {
      background:#EFF5FB;
     border-radius:10px;

     

  }
     /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
     background:#AEC7E1;
     
     
    
     
  }
  .golangg h2{
      font-size:50px;
      line-height:1px;
      font-family: 'Roboto', sans-serif;
      font-siz:40px;
      letter-spacing: 0.04em;
      color:black;
    
    }
     
    
    
    .golangg{
        display: grid;
        height: 90px;
        padding-left: 100px;
        margin-top: 0;
    
    }
     
     .videoo{ 
     
         display:grid;
         grid-template-columns:1.5fr 1fr ;
         justify-self: center;
         width:90%;
         margin-top: 30px;
         border-radius: 20px;
         height:100vh;
         margin-left:30px
    }
    
    .left-contener{
       display: grid;
       grid-template-rows:500px 0.1fr 0.3fr;
       margin-right: 20px;
       height: 900px;
   
      }
   .left-contener  iframe{
        border-radius:4px;
        min-width: 100%;
        height: 500px;
    }

      .layout-a {
		 
        display:grid ;
        height:700px;
        width:100%;
        border-radius: 20px;
        padding-right:38px;
        overflow: auto ; 
        
         
      }
           .content{
            display: grid;
            width: 100%;
            height: 100%;
            display: grid;
            border-radius: 20px;
         }
          .videoitm{
            
            display:grid;
            grid-template-columns: 200px 360px;
            background-color:#CCCC;
            width:670px;
            height: 190px;
            margin-top: 9px;
            border-radius: 10px;
            margin-top:15px;
             
         }

         .videocontent iframe{
          display:grid;
          max-width: 80%;
          margin:auto;
          height: auto;
          border-radius: 10px;
       }
         .paragraph{
         width:464px;
         grid-template-rows: 10px 20px 30px;
          padding-left: 5px;
          font-family: Arial, Helvetica, serif;
        }

         .paragraph:hover{
           background:#EFF5FB;
         }
         .paragraph > h3{
            margin-top:10px;
       
         }
         .paragraph >h5{
          margin-top: -20px;
          font-size: 10px;
          color: rgb(46, 44, 44);
         
         }
         .paragraph >p{
           
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          
         }

         .videocontent{
          display:grid;
         
          width:100%;
          height:100%;

         }
         button{
          background-color: #DD8D59;
          font-size: 20px;
          border-radius: 5px; 
          width:160px;
          height:40px;
          font-family: Arial, Helvetica, sans-serif;
          border: none;
         }

   
      
        `}


  render() {

    return html`
          <div class="contener">
          <div class="golangg"><h2> Golang </h2></div>
          <div class="videoo"> 



<div class="left-contener" >
<div class=" videoiframe"> 
<iframe  src="https://www.youtube.com/embed/1Rs2ND1ryYc" >
</iframe>
</div>
<div style="padding-left: 20px; margin-top: 4px;"><h3>install golang:</h3></div>
<div style="height:320px;">
<p style="padding-left: 10px; font-size: 20px;">   If you have a previous version of Go installed, be sure to remove it before installing another.<br>
1- Download the archive and extract it into /usr/local, creating a Go tree in /usr/local/go.<br>
<p style="background-color: cadetblue; margin-left: 40px; padding-left:30px; width: 400px;">tar -C /usr/local -xzf go1.15.6.linux-amd64.tar.gz</p><br>
Add /usr/local/go/bin to the PATH environment variable.<br>
2- You can do this by adding the following line to your $HOME/.profile or /etc/profile (for a system-wide installation):
</p>
<button> Next</button>
</div>
</div>


<div class="layout-a">
<div class="content">
<div class="videoitm"><div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>


<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>


<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>
 

<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>
  



<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>



<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>



<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>




<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>




<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>




<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>




<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>





<div class="videoitm">
<div class="videocontent">
<iframe   src="https://www.youtube.com/embed/1Rs2ND1ryYc">
</iframe>
</div>
<div class="paragraph"> 
<h3>install golang</h3>
<h5> Time:4:33 min</h5>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
</div>
</div>

 
</div>
</div>




          
 </div>
</div>
</div>
          
         
 `
  }


}
customElements.define('course-group-uni', CourseGroup);