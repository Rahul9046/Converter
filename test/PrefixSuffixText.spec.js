import SuffixPrefix from '../src/Suffix-Prefix.js'
test('Can convert ordinals', () => {
    let suffixPrefixObj1=new SuffixPrefix("1st");
    expect(suffixPrefixObj1.convert()).toBe("first");
});
test('Can convert ordinals', () => {
    let suffixPrefixObj2=new SuffixPrefix("13th");
    expect(suffixPrefixObj2.convert()).toBe("thirteenth");
});
test('Can convert ordinals', () => {
    let suffixPrefixObj3=new SuffixPrefix("1020311th");
    expect(suffixPrefixObj3.convert()).toBe("one million twenty thousand three hundred eleventh");
});
test('Can convert prefixes', () => {
    let suffixPrefixObj4=new SuffixPrefix("Rs.2");
    expect(suffixPrefixObj4.convert()).toBe("Rs.two");
});
test('Can convert prefixes', () => {
    let suffixPrefixObj5=new SuffixPrefix("AC-9");
    expect(suffixPrefixObj5.convert()).toBe("AC-nine");
});
test('Can convert suffixes', () => {
    let suffixPrefixObj6=new SuffixPrefix("2pm");
    expect(suffixPrefixObj6.convert()).toBe("twopm");
});
test('Can convert suffixes', () => {
    let suffixPrefixObj7=new SuffixPrefix("12D");
    expect(suffixPrefixObj7.convert()).toBe("twelveD");
});