var score = 40 

if (score<50)
{
    console.log("you need to improve")
}

else if (score>50&& score<70)
{
    console.log("good job")
}

else if(score>70)
{
    console.log("excelent")
}


//even or odd

var num = 57

if (num % 2 == 0)
{
    console.log("even")
}
else{
    console.log("odd")
}
function vowles(letter){
const vowl = ['a','e','i','o','u']
const lowercaseLetter = letter.toLowerCase(); 


if(vowl.includes(lowercaseLetter)){
    console.log("vowel")
}
else{
    console.log("consonant")
}}
letter = "a"
vowles(letter)


ler= "u"

if (ler == "a" || ler == "e" || ler=="i"|| ler == "o"||ler == "u"  ){
    console.log("vowels")
}
else{
    console.log("consant")
}

