const { FILTER_MAP } = require('./constant');
const { fetchData } = require('./http');
const { printCards } = require('./util');

const searchInit = () => {
    let url = "https://raw.githubusercontent.com/swarnjeet7/search-with-filters/master/data.json";

    fetchData(url).then(data => {
        printCards(data);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    searchInit()
});