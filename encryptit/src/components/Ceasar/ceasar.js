import React, { Component } from 'react';
import './Ceasar.css';

class Ceasar extends Component{
   function encryptCesar(){
         console.log('dziala')
   };
   
   render(){
        return(
        <div className="ceasar-box">
               <h1>Szyfrowanie szyfrem cezara</h1>
               <h2>Podaj tekst</h2>
               <input id="intput-text" className type='tex' />
               <h2>Podaj przesunięcie</h2>
               <button onClick={encryptCesar()} >Szyfruj</button>
               <h2>Zaszyfrowany tekst</h2>
               <div className="output-text">
                <p></p>
           </div>
        </div>
               )
   }
}

export default Ceasar;