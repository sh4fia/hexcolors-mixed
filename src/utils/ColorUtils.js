
// Convert Hex to Decimal/RGB
export const hexToRgb = (color) => {

    color = color.replace(/^#/, '');

    let red = parseInt(color.substring(0,2), 16);
    let green = parseInt(color.substring(2,4), 16);
    let blue = parseInt(color.substring(4,6), 16);

    return [red, green, blue];
}

// Calculate new color
export const calculateNewColor = (rgbOne, rgbTwo) => {

    let red = Math.round((rgbOne[0] + rgbTwo[0]) / 2);
    let green = Math.round((rgbOne[1] + rgbTwo[1]) / 2);
    let blue = Math.round((rgbOne[2] + rgbTwo[2]) / 2);

    return [red, blue, green];
}

// Convert Decimal/RGB to Hex
export const rgbToHex = (newColor) => {

    const colorToHex = color => {
        let hex = color.toString(16);
        return hex.length === 1 ? 0 + hex : hex;
    };

    return "#" + colorToHex(newColor[0]) + colorToHex(newColor[1]) + colorToHex(newColor[2]);
};