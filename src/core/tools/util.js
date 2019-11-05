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
    }
}

export { _ }