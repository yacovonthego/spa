import {_} from "framework/tools/util";

export function renderComponent(component) {
    if (!_.isUndefined(component.onInit)) component.onInit();
    component.render();
    if (!_.isUndefined(component.afterInit)) component.afterInit();
}