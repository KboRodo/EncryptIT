const button=document.getElementById('vigenere');
const keyword=document.querySelector('#keyword');
button.addEventListener('click',encryptCeasar);


function encryptCeasar(){//zaszyferowanie tekstu według klucza
    const move=moveBy.value
    const inputText=document.getElementById('input-text').value;
    const output=document.getElementById('output-text');
    const inputArray=inputText.split('')
    let outputText=[]
    let matchedKeywordArray=keyword.value.split('')
    const keywordLength=matchedKeywordArray.length
    let col
    let row

    //TWORZENIE TABLICY 26X26 Z ALFABETEM
    const alphabetArray= new Array(26)
    for(let i=0; i<26; i++){
        alphabetArray[i]= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        for(let mv=0; mv<i; mv++){
            alphabetArray[i].push(alphabetArray[i][0])
            alphabetArray[i].shift()
        }
    }

    //PRZYGOTOWANIE SŁOWA KLUCZA
    while(matchedKeywordArray.length<inputArray.length){
        for(let i=0; i<keywordLength; i++){
            matchedKeywordArray.push(matchedKeywordArray[i])
        }
    }

    //OBSLUGA SPACJI
    for(let i=0; i<inputArray.length; i++){
        if(inputArray[i]===" "){
            matchedKeywordArray[i]=" "
        }
    }

    //DŁUGOSC KLUCZA=DLUGOSC INPUTU
    while(matchedKeywordArray.length>inputArray.length){
        matchedKeywordArray.pop()
    }

    //SZYFROWANIE TEKSTU
    for(let i=0; i<inputArray.length; i++){
        row=alphabetArray[0].indexOf(inputArray[i])
        col=alphabetArray[0].indexOf(matchedKeywordArray[i])
        outputText+=alphabetArray[row][col]
    }
    console.log(outputText)
    //WYPISANIE ZASZYFROWANEGO TEKSTU
    output.innerHTML=outputText
}
