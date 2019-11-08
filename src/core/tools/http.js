class Http {
    get(url) {
        return sendRequest('GET', url)
    }
}

function sendRequest(method, url) {
    console.log(url);
    return fetch(url, {method}).then(res => res.json())
}

// little helper for data fetching

export const http = new Http()