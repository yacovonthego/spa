import { Module as VModule } from './parts/module';
import { Component as VComponent } from './parts/component/component';
import { bootstrap } from './parts/functions/bootstrap';
import { _ } from "./tools/util";
import { $ } from './tools/dom'
import { http } from './tools/http'
import { router } from "./parts/routing/router";
import { renderComponent } from "./parts/component/render-component";

// my framework root file

export {
    VModule,
    VComponent,
    renderComponent,
    bootstrap,
    _,
    router,
    $,
    http
}