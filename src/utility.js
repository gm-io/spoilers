function getFlagEmoji(languageCode) {
    // Convert the two-letter language code to uppercase and split into characters
    const characters = languageCode.toUpperCase().split('');

    // Check if both characters are valid letters
    if (characters.length !== 2 || !characters.every(c => /[A-Z]/.test(c))) {
        return ''; // Invalid input
    }

    // Calculate the base offset for regional indicator symbols
    const baseOffset = 0x1F1E6;

    // Convert characters to Unicode code points and add the base offset
    const codePoints = characters.map(c => baseOffset + c.charCodeAt(0) - 65);

    // Convert code points to actual characters and concatenate
    return String.fromCodePoint(...codePoints);
}

export {getFlagEmoji}