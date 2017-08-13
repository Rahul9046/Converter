import Date from '../src/Date.js'
test('Can convert date', () => {
    let dateObj1=new Date("12-08-2017");
    expect(dateObj1.convert()).toBe("twelfth august two thousand and seventeen");
});
test('Can convert date', () => {
    let dateObj2=new Date("02-08-2017");
    expect(dateObj2.convert()).toBe("second august two thousand and seventeen");
});
test('Can convert date', () => {
    let dateObj3=new Date("4-08-2017");
    expect(dateObj3.convert()).toBe("fourth august two thousand and seventeen");
});
test('Can convert date', () => {
    let dateObj4=new Date("23/10/2009");
    expect(dateObj4.convert()).toBe("twenty third october two thousand and nine");
});
test('Can convert date', () => {
    let dateObj4=new Date("23/10/2009");
    expect(dateObj4.convert()).toBe("twenty third october two thousand and nine");
});
test('Can convert date', () => {
    let dateObj4=new Date("23/10/2009");
    expect(dateObj4.convert()).toBe("twenty third october two thousand and nine");
});
test('Can convert date', () => {
    let dateObj2=new Date("02/08/2017");
    expect(dateObj2.convert()).toBe("second august two thousand and seventeen");
});
test('Can convert date', () => {
    let dateObj3=new Date("4/08/2017");
    expect(dateObj3.convert()).toBe("fourth august two thousand and seventeen");
});