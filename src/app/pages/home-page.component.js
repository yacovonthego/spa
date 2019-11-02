import {VComponent} from "../../core/index";

class HomePageComponent extends VComponent {
    constructor(config) {
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
        <div>
            App component
        </div>
    `
})