import PhoneNumber from '../src/Phone_Number.js'
test('Can convert phone numbers', () => {
    let phoneNumberObj1=new PhoneNumber("+91-9046978353");
    expect(phoneNumberObj1.converter()).toBe("+ nine one - nine zero four six nine seven eight three five three");
});
test('Can convert phone numbers', () => {
    let phoneNumberObj1=new PhoneNumber("0-9046978353");
    expect(phoneNumberObj1.converter()).toBe("zero - nine zero four six nine seven eight three five three");
});