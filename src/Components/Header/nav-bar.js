import { Router } from "@vaadin/router";
import { css, html, LitElement } from "lit-element";

class NavBar extends LitElement {
    static get styles() {
        return css`
        .homeheder{
            height: 50px;
            display: grid;
            width: 99.9%;
            background-color:#EFF5FB;
            align-items: center;
            padding-top:10px;
            border:non;

            }
            header >a{
               float: right;
               margin-left: 20px;
               font-family: 'Roboto', sans-serif;
               margin-right: 10px;
               text-decoration: none;
               letter-spacing: 0.02em;
               color: black;
               cursor:pointer
            }
        `
    }
    constructor() {
        super()
    }

    goTo(param) {
        Router.go(param)
      }
    render() {
        return html`
        <div class="homeheder">
            <header>
                <a  style="margin-right:90px" @click=${() => this.goTo('/')}>Home</a>
                <a @click=${() => this.goTo('/contact')}>Contact</a>
                <a  @click=${() => this.goTo('/about')}>About</a>
                <a  @click=${() => this.goTo('/podcast')}>Podcast</a>
                <a @click=${() => this.goTo('/course')}>Courses</a>   
            </header>
        </div>
        `
    }
}

customElements.define('nav-bar',NavBar)