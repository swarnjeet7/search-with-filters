const fetchData = (url) => {
    return fetch(url).then(response => response.json()).then(data => {
        return data;
    });
}

exports.fetchData = fetchData;