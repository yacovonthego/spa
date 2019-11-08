import {VComponent} from "framework";

export class AppBlock extends VComponent {
    constructor(config) {
        super(config);
        this.state = {
            el: config.el
        };
        this.template = ` 
            <div class="card">
                <div class="card-image">
                    <img src="${this.state.el.cover_photo.urls.regular}">
                    <span class="card-title">${this.state.el.title}</span>
                </div>
                <div class="card-action">
                    <a href="#collection.${this.state.el.id}">See more</a>
                </div>
            </div>
        `; // collection card layout
    }
}
