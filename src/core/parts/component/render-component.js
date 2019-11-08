import {_} from "../../tools/util";

export function renderComponent(component) {
    if (!_.isUndefined(component.onInit)) component.onInit(); // lifecycle hook onInit
    component.render();
    if (!_.isUndefined(component.afterInit)) component.afterInit(); // lifecycle hook afterInit
}