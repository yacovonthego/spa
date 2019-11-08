import {VComponent, renderComponent} from "framework";
import {AppBlock} from "./app.collection.block";

export class AppCollection extends VComponent {
    constructor(config) {
        super(config);
        this.state = {
            collection: config.collection,
            page: config.page
        };
        this.template = `
            <div class="row"> 
                <collection-${this.state.page}-0 class="col s12 m6 l4"></collection-${this.state.page}-0>
                <collection-${this.state.page}-1 class="col s12 m6 l4"></collection-${this.state.page}-1>
                <collection-${this.state.page}-2 class="col s12 m6 l4"></collection-${this.state.page}-2>
                <collection-${this.state.page}-3 class="col s12 m6 l4"></collection-${this.state.page}-3>
                <collection-${this.state.page}-4 class="col s12 m6 l4"></collection-${this.state.page}-4>
                <collection-${this.state.page}-5 class="col s12 m6 l4"></collection-${this.state.page}-5>
                <collection-${this.state.page}-6 class="col s12 m6 l4"></collection-${this.state.page}-6>
                <collection-${this.state.page}-7 class="col s12 m6 l4"></collection-${this.state.page}-7>
                <collection-${this.state.page}-8 class="col s12 m6 l4"></collection-${this.state.page}-8>
                <collection-${this.state.page}-9 class="col s12 m6 l4"></collection-${this.state.page}-9>
            </div>
        `; // semi-static layout because we got fixed by default size of response cluster

    }
    afterInit() {
        this.state.collection.forEach((el, id) =>
            renderComponent(
                new AppBlock({
                    selector: `collection-${this.state.page}-${id}`,
                    template: `<div></div>`,
                    el
                })
            )
        );
    }
}
