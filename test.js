const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum (14, 9);
    expect(total).toBe(23);
});

test('One Dollar should be 145.54500000000002 yen', () => {
    const {fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 1 * 145.54500000000002;
    expect(fromDollarToYen(1)).toBe(145.54500000000002);
});

test('One Euro should be 1.07 dollars', () => {
    const {fromEuroToDollar} = require('./app.js');
    const dollar = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test('One Yen should be 0.00522 pounds', () => {
    const {fromYenToPound} = require('./app.js');
    const dollar = fromYenToPound(1);
    const expected = 1 * 0.00522;
    expect(fromYenToPound(1)).toBe(0.00522);
});

