import { _ } from './util'

// small jquery'like implement in case of future usage

class DOMManipulator {
    constructor(el) {
        if (_.isString(el)) el = document.querySelector((el));
        this.nativeElement = el;
        this.isDM = true;
    }
    on(eventName, callback, context) {
        callback = callback.bind(context);
        this.nativeElement.addEventListener(eventName, callback);
        return this;
    }
    off(eventName, callback) {
        this.nativeElement.removeEventListener(eventName, callback);
        return this;
    }
    addClass(className) {
        this.nativeElement.classList.add(className);
        return this;
    }
    removeClass(className) {
        this.nativeElement.classList.remove(className);
        return this;
    }
    hasClass(className) {
        return this.nativeElement.classList.contains(className)
    }
    html(html) {
        this.nativeElement.innerHTML = html;
        return this;
    }
    append(el) {
        if (this.isDM) el = el.nativeElement;
        this.nativeElement.appendChild(el);
        return this;
    }
    parent() {
        return $(this.nativeElement.parentNode)
    }
    attr(name, value = null) {
        if (_.isNull(value)) return this.nativeElement.getAttribute(name)
        this.nativeElement.setAttribute(name, value);
        return this;
    }
    find(selector) {
        return $(this.nativeElement.querySelector(selector))
    }
    findAll(selector) {
        return Array.from(this.nativeElement.querySelectorAll(selector)).map( e => $(e))
    }

}

export function $(el) {
    return new DOMManipulator(el)
}