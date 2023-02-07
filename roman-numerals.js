const ROMAN_NUMBER_MAP = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

const convertRomanToNumber = (romanNumeral) => {
    if (!romanNumeral) throw new Error("Invalid input!");

    const romanNumerals = romanNumeral.split("");

    const result = romanNumerals.reduce((numVal, romanVal, currentIndex) => {

        const currentVal = ROMAN_NUMBER_MAP[romanVal];
        const nextVal = ROMAN_NUMBER_MAP[romanNumerals[currentIndex + 1]];

        if (currentVal < nextVal) {
            numVal -= currentVal;
        } else {
            numVal += currentVal;
        }

        return numVal;
    }, 0)

    return result;
}

const NUMBER_ROMAN_MAP = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

const convertNumberToRoman = (number) => {
    if (!number) throw new Error("Invalid input!");
    const numberKeys = Object.keys(NUMBER_ROMAN_MAP).reverse();

    const romanNumeral = numberKeys.reduce((romanVal, numKey) => {
        const prefixRomanValue = Math.floor(number / numKey);
        number -= numKey * prefixRomanValue;
        romanVal += NUMBER_ROMAN_MAP[numKey].repeat(prefixRomanValue);
        return romanVal;
    }, "")

    return romanNumeral;
}

module.exports = { convertRomanToNumber, convertNumberToRoman };