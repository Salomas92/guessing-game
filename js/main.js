const selectElements = (id) => {
  return document.querySelector(id)
}

const screen1 = selectElements(".screen1")
const screen2 = selectElements(".screen2")
const getBtnTry = selectElements("#btnTry")
const getBtnReset = selectElements("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClickTry(event) {
  event.preventDefault()

  const getInput = document.querySelector("#inputNumber")
  
  if (Number(getInput.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document
      .querySelector(".screen2 h2")
      .innerText = `Acertou em ${xAttempts} tentativas`
  }

  getInput.value = ""
  xAttempts++
}

getBtnTry.addEventListener("click", handleClickTry)

getBtnReset.addEventListener("click", e => {
  e.preventDefault()

  screen1.classList.remove("hide")
  screen2.classList.add("hide")

  xAttempts = 1
})

