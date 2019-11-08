import {router} from "./router";
import {_} from "../../tools/util";
import {$} from "../../tools/dom";
import {renderComponent} from "../component/render-component";

// router

export class RoutingModule {
    constructor(routes) {
        this.routes = routes;
    }

    init() {
        window.addEventListener('hashchange', renderRoute.bind(this)); // listen to hashchange
        renderRoute.call(this);
    }
}

function renderRoute(event) {
    let url = router.getUrl(); // get current hash
    const par = url.indexOf('.'); // get location of parameter separator

    if (par !== -1) { // in case we have passed params
        url = url.slice(0,par); // get hash before params
    }

    let route = this.routes.find(route => route.path === url);
    // check if we have component for path in routes

    if (_.isUndefined(route)) {
        // if we don't, Error 404
        route = this.routes.find(r => r.path === '**')
    }

    $('router-outlet').html(`<${route.component.selector}></${route.component.selector}>`); // add root node selector tag
    renderComponent(route.component); // and render it

    if (!_.isUndefined(event)) { // before destroy hook implementation
        let oldHash = event.oldURL.slice(event.oldURL.indexOf('#')+1, event.oldURL.length);
        const dot = oldHash.indexOf('.');
        if (dot !== -1) oldHash = oldHash.slice(0, dot);
        const routeToDestroy = this.routes.find(route => route.path === oldHash);
        if (!_.isUndefined(routeToDestroy.component.beforeDestroy)) routeToDestroy.component.beforeDestroy();
    }
}