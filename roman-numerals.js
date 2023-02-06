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

    const romanNumerals = romanNumeral.split("");

    const result = romanNumerals.reduce((numberValue, romanVal, currentIndex) => {
        const currentVal = ROMAN_NUMBER_MAP[romanVal];
        const nextVal = ROMAN_NUMBER_MAP[romanNumerals[currentIndex + 1]];

        if (currentVal < nextVal) {
            numberValue -= currentVal;
        } else {
            numberValue += currentVal;
        }

        return numberValue;
    }, 0)

    return result;
}

module.exports = convertRomanToNumber;