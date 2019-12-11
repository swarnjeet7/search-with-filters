let { dataJson, filteredData, FILTER_MAP } = require('./constant'); 

const eventBindings = () => {
    const searchInput = document.getElementById('searchProduct');
    if(searchInput) {
        searchInput.addEventListener('keyup', event => {
            const userInputVal = event.target.value;
            printCards(filterData(dataJson, userInputVal))
        });
    }
    
    const radioInputs = document.querySelectorAll('.filter-list input');
    if(radioInputs) {
        radioInputs.forEach(input => {
            input.addEventListener('change', (event) => {
                const type = event.target.value;
                applyFilter(type);
            });
        });
    }
}

const printCards = (data) => {
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

const sortData = (data, type) => {
    if(type == FILTER_MAP.rel) return data;
    data.sort((a, b) => {
        if(type == FILTER_MAP.popular) {
            return b.star - a.star;
        }
        if(type == FILTER_MAP.lowPrice) {
            return a.price - b.price;
        }
        if(type == FILTER_MAP.highPrice) {
            return b.price - a.price;
        }
        if(type == FILTER_MAP.new) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
            return a - b;
        }
    });
    return data;
}

const applyFilter = (type) => {
    if(type == FILTER_MAP.rel) {
        printCards(dataJson);
        return;
    }
    let newData = sortData(filteredData || dataJson, type);
    printCards(newData);
}

const filterData = (data, query) => {
    filteredData = data.filter(product => {
        if(product.product_name) {
            const productName = product.product_name.toLowerCase();
            return productName.includes(query.toLowerCase());
        } else {
            return product;
        }
    });
    return filteredData;
}

eventBindings();

exports.filterData = filterData;
exports.printCards = printCards;
exports.sortData = sortData;