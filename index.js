let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
}


// let username = "Fred"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + username
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let username = " Fred"
// let greeting = "Welcome back,"
// welcomeEl.innerText = greeting + user
// welcomeEl.innerText += "👋"





