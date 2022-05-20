// const number1 = document.getElementById("n1")
// const number2 = document.getElementById("n2")
// const number3 = document.getElementById("n3")
// const number4 = document.getElementById("n4")
// const number5 = document.getElementById("n5")
const container = document.querySelector('.container')
const nums = document.querySelectorAll('.number')
const btn = document.getElementById("btn")
let msg = document.getElementById("msg")
let rating = 1
const thanksPage = document.querySelector('.thanksPage')
const mainPage = document.querySelector('.mainPage')




nums.forEach(num => {
  num.addEventListener('click', handleRating)
})

btn.addEventListener('click', changeTemplate)

function changeTemplate(){
  mainPage.classList.add('hide')
  thanksPage.classList.remove('hide')
  msg.textContent = "You selected " +rating+ " out of 5"
}

function handleRating(event){
  nums.forEach(num => {
    num.classList.remove('selected')
  })
  if(event.target.classList.contains('number')){
    event.target.classList.add('selected')
  }
  else{
    event.target.parentElement.classList.add('selected')
  }
  rating = event.target.textContent
  console.log(rating)

  // msg.innerHTML = `You selected ${rating} out of 5`
}

