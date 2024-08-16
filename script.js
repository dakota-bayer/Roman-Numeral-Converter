const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');

const conversionArray = [
    {
        value: 1000,
        character: "M"
    },
    {
        value: 500,
        character: "D"
    },
    {
        value: 100,
        character: "C"
    },
    {
        value: 50,
        character: "L"
    },
    {
        value: 10,
        character: "X"
    },
    {
        value: 5,
        character: "V"
    },
    {
        value: 1,
        character: "I"
    },
];

button.addEventListener('click', () => {
    // Check input
    const isValid = IsValidInput();
    if(!isValid){
        window.alert("not valid");
        return;
    }

    // Parse input to int
    const number = parseInt(input.value);
    
    // Convert to roman numeral string
    const romanNumeral = "roman numeral"
    // Display roman numeral string
    output.innerText = romanNumeral;

    console.log(JSON.stringify(conversionArray));
});

function IsValidInput(){
    const inputText = input.value;
    const parsedInput = parseInt(inputText);

    if(!input.value || isNaN(parsedInput) || parsedInput < 0){
        return false;
    }

    return true;
}