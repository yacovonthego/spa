class Http {
    get(url) {
        return sendRequest('GET', url)
    }
}

function sendRequest(method, url) {
    return fetch(url, {method}).then(res => res.json())
}

export const http = new Http()