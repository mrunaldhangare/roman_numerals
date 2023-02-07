const { convertRomanToNumber, convertNumberToRoman } = require('./roman-numerals');


describe("convertRomanToNumber", () => {

    test("returns error when input is undefined", () => {
        const results = () => convertRomanToNumber();
        expect(results).toThrow(new Error("Invalid input!"));
    });
    test("returns error when input is empty", () => {
        const results = () => convertRomanToNumber('');
        expect(results).toThrow(new Error("Invalid input!"));
    });

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
});


describe("convertNumberToRoman", () => {

    test("returns error when input is 0", () => {
        const results = () => convertNumberToRoman(0);
        expect(results).toThrow(new Error("Invalid input!"));
    });
    test("returns error when input is undefined", () => {
        const results = () => convertNumberToRoman();
        expect(results).toThrow(new Error("Invalid input!"));
    });
    test("returns error when input is empty", () => {
        const results = () => convertNumberToRoman('');
        expect(results).toThrow(new Error("Invalid input!"));
    });
    test("takes number and returns roman numeral", () => {
        expect(convertNumberToRoman(1)).toBe("I");
        expect(convertNumberToRoman(5)).toBe("V");
        expect(convertNumberToRoman(50)).toBe("L");
    });
    test("takes number and returns roman numeral by repeating similar roman numerals", () => {
        expect(convertNumberToRoman(2)).toBe("II");
        expect(convertNumberToRoman(20)).toBe("XX");
    });
    test("takes any number and returns correct roman numeral", () => {
        expect(convertNumberToRoman(2751)).toBe("MMDCCLI");
        expect(convertNumberToRoman(369)).toBe("CCCLXIX");
        expect(convertNumberToRoman(31)).toBe("XXXI");
    });

});