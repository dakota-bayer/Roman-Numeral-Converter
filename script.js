const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.innerText = ConvertToRomanNumeral(input.value);
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        output.innerText = ConvertToRomanNumeral(input.value);
    }
});

const ConvertToRomanNumeral = (value) => {
  // Validate
  const errorMsg = GetInputError(value);
  if (errorMsg) {
    return errorMsg;
  }

  // Put in thousands form ("XXXX")
  const inputValueArray = value.split("");
  while (inputValueArray.length < 4) {
    inputValueArray.unshift("0");
  }

  // Get value for each place
  const thousandsDigit = inputValueArray[0];
  const hundredsDigit = inputValueArray[1];
  const tensDigit = inputValueArray[2];
  const onesDigit = inputValueArray[3];

  // Get roman numeral for each place value
  const thousandsRomanNumeral = ConvertDigit(thousandsDigit, "", "", "M");
  const hundredsRomanNumeral = ConvertDigit(hundredsDigit, "M", "D", "C");
  const tensRomanNumeral = ConvertDigit(tensDigit, "C", "L", "X");
  const onesRomanNumeral = ConvertDigit(onesDigit, "X", "V", "I");

  // Concatenate each place value for result
  return (
    thousandsRomanNumeral +
    hundredsRomanNumeral +
    tensRomanNumeral +
    onesRomanNumeral
  );
};

const ConvertDigit = (digit, full, half, single) => {
  if (digit === "0") {
    return "";
  } else if (digit === "4") {
    return single + half;
  } else if (digit === "9") {
    return single + full;
  } else {
    let remainder = parseInt(digit);
    let strNumeral = "";
    while (remainder > 0) {
      if (remainder - 5 >= 0) {
        strNumeral = half;
        remainder -= 5;
      } else {
        strNumeral += single;
        remainder--;
      }
    }
    return strNumeral;
  }
}

const GetInputError = (value) => {
    const parsedInput = parseInt(value);
  
    if (!value || isNaN(parsedInput)) {
      return "Please enter a valid number";
    }
  
    if (parsedInput < 0) {
      return "Please enter a number greater than or equal to 1";
    }
  
    if (parsedInput >= 4000) {
      return "Please enter a number less than or equal to 3999";
    }
  }
