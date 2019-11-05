import {_} from "../../tools/util";
import {$} from '../../tools/dom'

export class Component { // component is a single implementation for single responsible view
    constructor(config) {
        // error handling for development
        if (!config) throw new Error('no config passed to component constructor');
        if (!config.template) throw new Error('no config template passed to component constructor');
        if (!config.selector) throw new Error('no config selector passed to component constructor');

        this.template = config.template; // template to render
        this.selector = config.selector; // root selector to render
        this.el = null; // root node to render

    }

    render() {
        this.el = $(this.selector); // search root node
        if (!this.el) throw new Error(`No element with selector ${this.selector}`);
        this.el.html(compileTemplate(this.template, this.state)); // set root node inner to template

        initEvents.call(this);
    }
}

function initEvents() {
    if (_.isUndefined(this.events)) return // if no events() in child

    const events = this.events();
    Object.keys(events).forEach(key => {
        const listener = key.split(' '); // key looks like event .element

        this.el
            .find(listener[1]) // get our .element
            .on(listener[0], this[events[key]].bind(this)) // add listener in event and call child callback
    });
}

function compileTemplate(template, data) {
    if (_.isUndefined(data)) return template;

    let regexp = /\{{(.*?)}}/g; // between {{ and }}
    template = template.replace(regexp, (str, d) => {
        const key = d.trim(); // trim spaces from found template var
        return data[key];
    });

    return template
}