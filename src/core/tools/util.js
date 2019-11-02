const tool = {
    delay (ms = 1000) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res()
            }, ms)
        })
    },
    isUndefined(d) {
        return typeof d === 'undefined'
    }
}

export { tool }