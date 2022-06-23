let from = document.querySelector(`#from`);
let to = document.querySelector(`#to`);
let amountEle = document.querySelector(`#amount`);
let output = document.querySelector(`#output`);
let convert = document.querySelector(`#convert`);

fetch("currencies.json")
  .then((res) => res.json())
  .then((data) => {
    let list = data;
    let currencies = Object.values(list);
    let states = Object.keys(list);

    for (let i = 0; i < currencies.length; i++) {
      let option = document.createElement(`option`);
      option.style.fontSize = `14px`;
      option.innerHTML = `${states[i]} - ${currencies[i]}`;
      option.setAttribute(`value`, `${currencies[i]}`);
      from.appendChild(option);
    }
    for (let j = 0; j < currencies.length; j++) {
      let option = document.createElement(`option`);
      option.style.fontSize = `14px`;
      option.innerHTML = `${states[j]} - ${currencies[j]}`;
      option.setAttribute(`value`, `${currencies[j]}`);
      to.appendChild(option);
    }
  })
  .catch((error) => console.log("error", error));

convert.addEventListener(`click`, () => {
  fetch(
    `https://api.exchangerate.host/convert?from=${from.value}&to=${to.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      let amount = data.query.amount;
      amount = amountEle.value;

      if (isNaN(amount)) {
        output.style.color = `red`;
        output.innerHTML = `* You've entered a not valid character, use only numbers.`;
      } else {
        output.style.color = `black`;
        output.innerHTML = `${amount} ${from.value} equals ${
          data.result * amount
        } ${to.value}`;
      }
    });
});
