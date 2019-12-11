const fetchData = (url) => {
    return fetch(url).then(response => response.json()).then(data => {
        return data;
    }).catch(function(error) {
        return error;
    });
}

exports.fetchData = fetchData;