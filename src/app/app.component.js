import { VComponent } from "../core/index";
import './css/reset.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import './css/main.css'


class AppComponent extends VComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `
});