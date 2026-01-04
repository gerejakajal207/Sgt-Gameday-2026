let currencyOne = document.querySelector("#currency-one");
let inputOne = document.querySelector("#input-one");

let currencyTwo = document.querySelector("#currency-two");
let inputTwo = document.querySelector("#input-two");

displayCountries();

inputTwo.disabled = true;

async function fetchData() {
  try {
    let response = await fetch(
      "https://v6.exchangerate-api.com/v6/"
    );
    let value = await response.json();
    return value;
  } catch {
    alert("Some error occured");
  }
}

async function displayCountries() {
  let data = await fetchData();
  console.log(data);
  let countries = data.conversion_rates;
  for (let country in countries) {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    option1.textContent = country;
    option2.textContent = country;
    currencyOne.appendChild(option1);
    currencyTwo.appendChild(option2);
  }
}

inputOne.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    validateInput();
  }
});

inputOne.addEventListener("input", () => {
  validateInput();
});

currencyTwo.addEventListener("change", () => {
  validateInput();
});
currencyOne.addEventListener("change", () => {
  validateInput();
});

function validateInput() {
  if (inputOne.value <= 0 && inputOne.value != "") {
    alert("Entered value is not correct");
    inputOne.value = "";
    inputOne.focus();
  } else {
    convertRates();
  }
}

async function convertRates() {
  let rateOne = inputOne.value;
  let countryOne = currencyOne.value;
  let countryTwo = currencyTwo.value;
  let response = await fetch(
    `https://v6.exchangerate-api.com/v6/`
  );
  let value = await response.json();
  console.log(value);
  console.log(value.conversion_rate);
  let rateTwo = rateOne * value.conversion_rate;
  console.log(rateTwo);
  inputTwo.value = rateTwo;
}
