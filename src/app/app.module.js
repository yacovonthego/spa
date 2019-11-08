import { VModule } from "framework";
import { appComponent } from "./app.component";
import {appHeader} from "./common/app.header";
import {routes as appRoutes} from "./app.routes";

// root module, basic render functionality implemented here

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