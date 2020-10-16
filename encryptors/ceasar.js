const button=document.getElementById('ceasar');
const moveBy=document.querySelector('#move')
button.addEventListener('click',encryptCeasar);


function encryptCeasar(){//zaszyferowanie tekstu według klucza
    const move=moveBy.value
    const inputText=document.getElementById('input-text').value;
    const output=document.getElementById('output-text');
    const inputArray=inputText.split('')
    let index
    let outputText=[]

    const encryptionKey=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']//referencja alfabetu

    for(let i=0; i<move; i++){
        encryptionKey.unshift(encryptionKey[encryptionKey.length-1])
        encryptionKey.pop()
    }

    inputArray.forEach(element => {
        (element===' ') ? 
        outputText.push(' '):
        index=alphabet.indexOf(element)
        outputText.push(encryptionKey[index])
    });
    output.innerHTML=outputText.join('')//usinac przecinki
}
