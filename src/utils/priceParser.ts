export function priceParser(price: number): string {
  let parsingValue: string[] = [];
  price
    .toString()
    .split("")
    .forEach((value: string, index: number) => {
      if (index % 3 === 0 && index !== 0) {
        parsingValue.push(".");
        parsingValue.push(value);
      } else {
        parsingValue.push(value);
      }
    });

  return parsingValue.join("");
}
