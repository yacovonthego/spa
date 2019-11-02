import { VModule } from "../core/index";
import { appComponent } from "./app.component";
import {appHeader} from "./common/app.header";
import {routes as appRoutes} from "./app.routes";

class AppModule extends VModule {
    constructor(config) {
        super(config); // call a parent constructor
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    bootstrap: appComponent,
    routes: appRoutes
});