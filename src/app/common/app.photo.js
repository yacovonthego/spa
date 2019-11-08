import {VComponent} from "framework";

export class PhotoBlock extends VComponent {
    constructor(config) {
        super(config);
        this.state = {
            el: config.el
        }
        this.template = `
            <div class="card">
                <div class="card-image">
                  <img src="${this.state.el.urls.regular}">
                  <span class="card-title">${this.state.el.alt_description === null ? '' : this.state.el.alt_description }</span>
                </div>
                <div class="card-content">
                  <p>Photo by ${this.state.el.user.name} <br> <br>
                  Created at: ${this.state.el.created_at.slice(0, this.state.el.created_at.indexOf('T'))}</p>
                </div>
            </div>
        `; // there's a possibility to have null description in server response
    }
}