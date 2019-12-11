const searchFilter = (() => {
    let productData = null, filteredData = null;
    const filterMap = {
        1: 'relevance',
        2: 'popular',
        3: 'lowPrice',
        4: 'highPrice',
        5: 'new'
    }

    const getJsonData = () => {
        let url = "https://raw.githubusercontent.com/swarnjeet7/search-with-filters/master/db.json";
        fetch(url)
            .then(response => response.json())
            .then(res => {
                printData(res);
                eventBindings();
            });
    }
    
    const sortData = (data, type) => {
        data.sort((a, b) => {
            if(type == 2) {
                return b.ratings - a.ratings;
            }
            if(type == 3) {
                return a.price - b.price;
            }
            if(type == 4) {
                return b.price - a.price;
            }
            if(type == 5) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
        });
        return data;
    }
    const searchProducts = (query) => {
        filteredData = productData.filter(product => {
            const productName = product.product_name.toLowerCase();
            return productName.includes(query);
        });
        printData(filteredData);
    }
    const applyFilter = (type) => {
        let data = filteredData || productData, newData;
        if(type != 1) {
            newData = sortData(data, type);
        }
        switch (type) {
            case 1:
                printData(productData);
                break;
            default:
                printData(newData);
                break;
        }
    }
    const eventBindings = () => {
        const searchInput = document.getElementById('searchProduct');
        if(searchInput) {
            searchInput.addEventListener('keyup', event => {
                searchProducts(this.value.toLowerCase());
            });
        }
        
        const radioInputs = document.querySelectorAll('.filter-list input');
        if(radioInputs) {
            radioInputs.forEach(input => {
                input.addEventListener('change', () => {
                    const type = this.value;
                    applyFilter(type);
                });
            });
        }
        
    }
    const printData = (data) => {
        if(productData === null) {
            productData = data;
        }
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
                                    <div class="ratings-fill" style="width: ${product.ratings/5*100}%"></div>
                                </div>
                                <div class="flex1">
                                    (243 Ratings) >
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

    return {
        getJsonData,
    }
})();

window.addEventListener('DOMContentLoaded', () => {
    searchFilter.getJsonData();
});