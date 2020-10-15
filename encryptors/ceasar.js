const button=document.getElementById('ceasar');
button.addEventListener('click',copyText);

function copyText(){
    var input=document.getElementById('input-text').value;
    var output=document.getElementById('output-text');
    output.innerText=input;
}