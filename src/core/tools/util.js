import {$} from "./dom";

// all-in-one utility

const _ = {
    delay (ms = 1000) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res()
            }, ms)
        })
    },
    isUndefined(d) {
        return typeof d === 'undefined'
    },
    isNull(d) {
        return d === null;
    },
    isString(d) {
        return typeof d === 'string'
    },
    removePreloader() {
        const preloader = $('.preloader');
        if (_.isNull(preloader.nativeElement)) return
        preloader.nativeElement.remove();
    }
}

export { _ }