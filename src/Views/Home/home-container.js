import { html, LitElement } from "lit-element";
import { Router } from "@vaadin/router";
import "@material/mwc-drawer";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar";
class ComponentContainer extends LitElement {
  constructor() {
    super();
  }

  updated(changedProperties) {
    const drawer = this.shadowRoot.getElementById("mwc-drawer");
    if (drawer) {
      const container = drawer.parentNode;
      container.addEventListener("MDCTopAppBar:nav", () => {
        drawer.open = !drawer.open;
      });
    }
  }

  render() {
    return html`
      <mwc-drawer hasHeader type="modal" id="mwc-drawer">
        <span slot="title">Drawer Title</span>
        <span slot="subtitle">subtitle</span>
        <div style="padding:10px">
          <p>Drawer content!</p>
          <mwc-icon-button icon="gesture"></mwc-icon-button>
          <mwc-icon-button icon="gavel"></mwc-icon-button>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button
              slot="navigationIcon"
              icon="menu"
            ></mwc-icon-button>
            <div slot="title">Title</div>
            <mwc-icon-button
              icon="exit_to_app"
              slot="actionItems"
              @click=${this.Logout}
            ></mwc-icon-button>
          </mwc-top-app-bar>
          <div style="padding:20px">
            <slot></slot>
          </div>
        </div>
      </mwc-drawer>
    `;
  }

  Logout() {
    localStorage.clear();
    Router.go("/");
  }
  static get is() {
    return "home-container";
  }
}
customElements.define(ComponentContainer.is, ComponentContainer);
