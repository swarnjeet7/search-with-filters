let { FILTER_MAP } = require('./constant');
let dataJson = null; // we store data in variable to save the request;
let filteredData = null; // we store data after as per user input.

const eventBindings = () => {
    const searchInput = document.getElementById('searchProduct');
    if(searchInput) { //checking if input have so bind the keyup event
        searchInput.addEventListener('keyup', event => {
            const userInputVal = event.target.value;
            printCards(filterData(dataJson, userInputVal))
        });
    }
    
    const radioInputs = document.querySelectorAll('.filter-list input');
    if(radioInputs) { //checking if radiobtns we have so bind the change event
        radioInputs.forEach(input => {
            input.addEventListener('change', (event) => {
                const type = event.target.value;
                applyFilter(type);
            });
        });
    }
}

const printCards = (data) => { //this will print all the cards
    if(!data) return false;
    if(dataJson === null) { dataJson = data; }
    const length = data.length;
    let cards = '';
    const box = document.getElementById('productList');
    for(let i=0; i <length; i++) {
        const product = data[i];
        cards += `
            <div class="card">
                <div class="card__header">
                    <div class="card__title">${product.product_name}</div>
                    <div class="card__image">
                        <img src="${product.product_image}" alt="${product.product_name}">
                    </div>
                </div>
                <div class="card__body">
                    <div class="card__ratings">
                        <div class="d-flex">
                            <div class="flex100px">
                                <div class="ratings"></div>
                                <div class="ratings-fill" style="width: ${product.star/5*100}%"></div>
                            </div>
                            <div class="flex1">
                                (${product.ratings} Ratings) >
                            </div>
                        </div>
                    </div>
                    <div class="card__price-box">
                        <div class="card__price">Rs. ${product.price}</div>
                        <div class="card__emi-price">EMI from Rs. ${product.emi_price}</div>
                    </div>
                    <div class="card__desc">
                        <ul class="card__desc-list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>adipisicing elit Voluptates</li>
                            <li>quod provident quaerat</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }
    box.innerHTML = cards;
}

const sortData = (data, type) => { // this will return sorted data 
    if(type == FILTER_MAP.rel) return data;
    data.sort((a, b) => {
        if(type == FILTER_MAP.popular) { //when popular radio btn checked 
            return b.star - a.star;
        }
        if (type == FILTER_MAP.lowPrice) { //when low Price radio btn checked 
            return a.price - b.price;
        }
        if (type == FILTER_MAP.highPrice) {//when high Price radio btn checked
            return b.price - a.price;
        }
        if (type == FILTER_MAP.new) {//when new radio btn checked
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else { // catching if above condition is not met
            return a - b;
        }
    });
    return data; //returning sorted data
}

const applyFilter = (type) => {
    if(type == FILTER_MAP.rel) { // if Relevence is checked print all data
        printCards(dataJson);
        return;
    }
    let newData = sortData(filteredData || dataJson, type); // otherwise filtered data
    printCards(newData);
}

const filterData = (data, query) => {
    filteredData = data.filter(product => { //this will filter which product have query text in product name
        if(product.product_name) {
            const productName = product.product_name.toLowerCase();
            return productName.includes(query.toLowerCase());
        } else {
            return product;
        }
    });
    return filteredData; //using this veriable to keep filter data after user input in search
}

eventBindings(); //binding dom events 

exports.filterData = filterData;
exports.printCards = printCards;
exports.sortData = sortData;