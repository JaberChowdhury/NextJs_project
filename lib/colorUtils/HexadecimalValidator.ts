const HexadecimalValidator = (input_color: string): string => {
  // Check if the input is a valid hexadecimal code
  if (/^#[0-9a-fA-F]+$/.test(input_color)) {
    // Handle 3-character hex codes
    if (input_color.length === 4) {
      const expanded_color =
        "#" +
        input_color[1] +
        input_color[1] +
        input_color[2] +
        input_color[2] +
        input_color[3] +
        input_color[3];
      return expanded_color.toUpperCase();
    }

    // Handle 6-character hex codes
    if (input_color.length === 7) {
      return input_color.toUpperCase();
    }
  }

  // Return if the input is invalid
  return input_color.toUpperCase();
};

export default HexadecimalValidator;
