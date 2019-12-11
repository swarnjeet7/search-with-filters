const { printCards, filterData, sortData } = require('./util');

test('printCards will return falsy', () => {
    const res = printCards(null);
    expect(res).toBeFalsy();
});

test('filter data return an array', () => {
    const res = filterData([{'product_name': 'tony'}, {'product_name': 'tom'}, {'product_name': 'harry'}], 'to');
    expect(res).toEqual([{'product_name': 'tony'}, {'product_name': 'tom'}]);
    const res1 = filterData(['i', 'me', 'main'], 'hello')
    expect(res1).toEqual(['i', 'me', 'main']);
});

test('sort data will return sorted data', () => {
    const res = sortData([1,5,3], 6);
    expect(res).toEqual([1,3,5]);

    const res1 = sortData([{
        "id": 1,
        "star": 3.8,
      }, {
        "id": 2,
        "star": 1.1,
      }], 2);
      expect(res1).toEqual([{
        "id": 1,
        "star": 3.8,
      }, {
        "id": 2,
        "star": 1.1,
      }]);
});

