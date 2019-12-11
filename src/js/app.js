const { FILTER_MAP } = require('./constant');
const { fetchData } = require('./http');
const { printCards } = require('./util');

const searchInit = () => {
    let url = "https://raw.githubusercontent.com/swarnjeet7/search-with-filters/master/data.json?version=11122019";

    fetchData(url).then(data => {
        if(Array.isArray(data) && data.length) {
            printCards(data);
        } else {
            console.error("Something Went Wrong");
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    searchInit()
});