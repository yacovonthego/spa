document.componentRegistry = { };
document.nextId = 0;

export class Component { // component is a single implementation for single responsible view
    constructor(config) {
        // error handling for development
        if (!config) throw new Error('no config passed to component constructor');
        if (!config.template) throw new Error('no config template passed to component constructor');
        if (!config.selector) throw new Error('no config selector passed to component constructor');

        this.__id = ++document.nextId; // save an Id of our component
        this.template = config.template; // template to render
        this.selector = config.selector; // root selector to render
        this.el = null; // root node to render

        document.componentRegistry[this.__id] = this; // save a link to our component
    }

    render() {
        this.el = document.querySelector(this.selector); // search root node
        if (!this.el) throw new Error(`No element with selector ${this.selector}`);
        this.el.innerHTML = this.template; // set root node inner to template
    }
}