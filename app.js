function removeChar(str, postion) {
    let text1 = str.slice(0, postion);
    let text2 = str.slice(postion + 1);
    // let removedChar = str.charAt(position);
    return text1 + text2 ;
}
let originalStr = prompt('Write the name');
document.write(`<h1>Your Text is ${originalStr}` + '<br>');
let charRemoved = +prompt('Enter the number of character which you want to remove');
let changedStr = removeChar(originalStr, charRemoved);
document.write(`The character is removed from the ${originalStr} and the new text is ${changedStr}` + '<br>');