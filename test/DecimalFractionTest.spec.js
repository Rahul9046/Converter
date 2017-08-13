import DecimalFraction from '../src/Decimal_Fraction.js'
test('Can convert decimals', () => {
    let cardinalObj1=new DecimalFraction("3.5");
    expect(cardinalObj1.convert()).toBe("three point five");
});
test('Can convert fractions', () => {
    let cardinalObj2=new DecimalFraction("2/3");
    expect(cardinalObj2.convert()).toBe("two third");
});
test('Can convert fractions', () => {
    let cardinalObj3=new DecimalFraction("2-3rd");
    expect(cardinalObj3.convert()).toBe("two third");
});