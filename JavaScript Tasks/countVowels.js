let str = prompt("Enter the string")
let count = 0;
for(let i = 0; i< str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] ==="u"){
        count++;
    }
}   
 console.log("The vowel count in the input string is " + count)