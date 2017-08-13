import Cardinal from '../src/Cardinal.js'
test('Can convert cardinal numbers from digit to text', () => {
    let cardinalObj1=new Cardinal("22");
    expect(cardinalObj1.converter()).toBe("twenty two");
});
test('Can convert and replace cardinal numbers in a string', () => {
    let cardinalObj2=new Cardinal("85");
    expect(cardinalObj2.converter()).toBe("eighty five");
});
test('Can convert and replace cardinal numbers in a string', () => {
    let cardinalObj3=new Cardinal("11");
    expect(cardinalObj3.converter()).toBe("eleven");
});
test('Can convert and replace cardinal numbers in a string', () => {
    let cardinalObj4=new Cardinal("113");
    expect(cardinalObj4.converter()).toBe("one hundred and thirteen");
});
test('Can convert and replace cardinal numbers in a string', () => {
    let cardinalObj5=new Cardinal("1236916");
    expect(cardinalObj5.converter()).toBe("one million two hundred and thirty six thousand nine hundred and sixteen");
});