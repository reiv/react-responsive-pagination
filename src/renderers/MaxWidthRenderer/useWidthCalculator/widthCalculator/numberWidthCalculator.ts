export function createNumberWidthCalculator(widths: Params) {
  return function numberWidthCalculator(num: number) {
    const numDigits = num.toString().length;

    return (
      widths.singleDigit +
      (widths.doubleDigit - widths.singleDigit) * (numDigits - 1)
    );
  };
}

type Params = {
  singleDigit: number;
  doubleDigit: number;
};

export type NumberWidthCalculator = ReturnType<typeof createNumberWidthCalculator>;
