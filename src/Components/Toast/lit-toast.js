import { LitElement, html, css } from 'lit-element';

class LitToast extends LitElement {
  static get styles() {
    return css`
      :host {
        display: none;
        justify-content: center;
        width: 100%;
        /*visibility: hidden;*/
        position: fixed;
        z-index: var(--lt-z-index, 2);
        bottom: var(--lt-bottom, 40px);
      }

      :host(.show) {
        display: flex;
        /*visibility: visible;*/
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
      }
      
      :host(.bg-success){
        --lt-background-color: #22bb33;
        --lt-color: #fff
      }

      :host(.bg-danger){
        --lt-background-color: #bb2124;
        --lt-color: #fff
      }

      :host(.bg-info){
        --lt-background-color: #5bc0de;
        --lt-color: #fff
      }
      :host(.bg-warning){
        --lt-background-color: #f0ad4e;
        --lt-color: #fff
      }

      :host(.bg-default){
        --lt-background-color: #292929;
        --lt-color: #dddddd
      }

      div {
        min-width: 100px;
        background-color: var(--lt-background-color, #292929);
        color: var(--lt-color, #dddddd);
        text-align: center;
        border-radius: var(--lt-border-radius, 2px);
        padding: var(--lt-padding, 16px);
        border: var(--lt-border, none);
        font-size: var(--lt-font-size, 1em);
        font-family: var(--lt-font-family, sans-serif);
      }

      @-webkit-keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
      }

      @keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
      }

      @-webkit-keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }

      @keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }
    `;
  }

  static get properties() {
    return {
      _toastText: { type: String }
    };
  }

  constructor() {
    super();
    this._toastText = '';
  }

  render() {
    return html`
      <div role="alert">
        ${this._toastText}
      </div>
    `;
  }

  // To read out loud the toast
  firstUpdated() {
    this.style.setProperty('aria-live', 'assertive');
    this.style.setProperty('aria-atomic', 'true');
    this.style.setProperty('aria-relevant', 'all');
  }

  show(text = '',bg='') {
    if (this.className === 'show') {
      // Do nothing, prevent spamming
    } else {
      this._toastText = text;
      this.className = `show bg-${bg}`;
      console.log(this);
      setTimeout(() => {
        this.className = this.className.replace(`show bg-${bg}`, '');
      }, 3000);
    }
  }
}

customElements.define('lit-toast', LitToast);
