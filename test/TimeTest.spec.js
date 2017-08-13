import Time from '../src/Time.js'
test('Can convert time in 12-hour format', () => {
    let timeObj1=new Time("9:30");
    expect(timeObj1.convertTime()).toBe("nine:thirty");
});
test('Can convert time in 24-hour format', () => {
    let timeObj2=new Time("16:30:24");
    expect(timeObj2.convertTime()).toBe("sixteen hour:thirty minute:twenty four second");
});