const convertRomanToNumber = require('./roman-numerals');

test("takes roman numerals and returns number", () => {
    expect(convertRomanToNumber("I")).toBe(1);

});
test("takes roman numerals and returns number by accessing from mapping", () => {
    expect(convertRomanToNumber("V")).toBe(5);

});
test("takes roman numerals and returns number by using array", () => {
    expect(convertRomanToNumber("II")).toBe(2);
    expect(convertRomanToNumber("III")).toBe(3);

});
test("takes roman numerals and returns number by subtracting current value from next value", () => {
    expect(convertRomanToNumber("IV")).toBe(4);
});
test("takes any roman numeral and returns correct number", () => {
    expect(convertRomanToNumber("XXXI")).toBe(31);
    expect(convertRomanToNumber("CCCLXIX")).toBe(369);
    expect(convertRomanToNumber("LXXX")).toBe(80);
    expect(convertRomanToNumber("MMDCCLI")).toBe(2751);
});
