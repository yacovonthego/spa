import {VComponent, renderComponent} from "framework";
import {AppBlock} from "./app.collection.block";
import {PhotoBlock} from "./app.photo";

export class Photos extends VComponent {
    constructor(config) {
        super(config);
        this.state = {
            photos: config.photos,
            page: config.page
        };
        this.template = `
            <div class="row">
              <photos-${this.state.page}-0 class="col s12 m6 l3"></photos-${this.state.page}-0>
              <photos-${this.state.page}-1 class="col s12 m6 l3"></photos-${this.state.page}-1>
              <photos-${this.state.page}-2 class="col s12 m6 l3"></photos-${this.state.page}-2>
              <photos-${this.state.page}-3 class="col s12 m6 l3"></photos-${this.state.page}-3>
              <photos-${this.state.page}-4 class="col s12 m6 l3"></photos-${this.state.page}-4>
              <photos-${this.state.page}-5 class="col s12 m6 l3"></photos-${this.state.page}-5>
              <photos-${this.state.page}-6 class="col s12 m6 l3"></photos-${this.state.page}-6>
              <photos-${this.state.page}-7 class="col s12 m6 l3"></photos-${this.state.page}-7>
              <photos-${this.state.page}-8 class="col s12 m6 l3"></photos-${this.state.page}-8>
              <photos-${this.state.page}-9 class="col s12 m6 l3"></photos-${this.state.page}-9>
            </div>
        `; // same semi-static layout, explained in app.collection.js
    }
    afterInit() {
        this.state.photos.forEach((el, id) =>
            renderComponent(
                new PhotoBlock({
                    selector: `photos-${this.state.page}-${id}`,
                    template: `<div></div>`,
                    el
                })
            )
        )
    }
}
