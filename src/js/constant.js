const FILTER_MAP = {
    'rel': 1,
    'popular': 2,
    'lowPrice': 3,
    'highPrice': 4,
    'new': 5,
}
let dataJson = null; // we store data in variable to save the request;
let filteredData = null; // we store data after as per user input.

exports.FILTER_MAP = FILTER_MAP;
exports.dataJson = dataJson;
exports.filteredData = filteredData;