export function decimalToHex(decimal) {
    if (decimal === 0) {
        return 0;
    }

    let hexa = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

    let result = [];

    while (decimal > 0) {
        const value = decimal % 16
        result.unshift(value >= 10 ? hexa[value] : value);
        decimal = Math.floor(decimal / 16);
    }

    return result.join('');
}