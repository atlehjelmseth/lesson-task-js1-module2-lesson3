// Question 1

const btn = document.querySelector(".btn");

function buttonClick() {
  console.log("I'm a button");
}

btn.addEventListener("click", buttonClick)

// Question 2

const text = document.querySelector("input");
const btnTwo = document.querySelector("form button");
const count = document.querySelector("b.count");

function characterCount() {

  const characterCount = text.value.trim().length;
  count.innerHTML = characterCount;
}

btnTwo.addEventListener("click", characterCount);