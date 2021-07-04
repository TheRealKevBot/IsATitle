// Check if a string title is a title string or not. 
// A title string is one which has all the words in the string start with a upper case letter.

function checkTitle(title) {
    let answer = false
    let titleArray = title.split(' ')
    titleArray.forEach(word => {
        word[0] === word[0].toUpperCase() ? answer = true : answer = false
    })
    return answer
}

console.log(checkTitle("A Mind Boggling Achievement"), true)
console.log(checkTitle("A Simple Java Script Program!"), true)
console.log(checkTitle("Water is transparent"), false)