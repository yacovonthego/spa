import { bootstrap } from "./core/parts/bootstrap";
import { appModule } from "./app/app.module";
import { tool } from './core/index'

tool.delay().then(() => {
    bootstrap(appModule);
});
