const pt =require("prompt-sync")({signit: true})

let cadenas = []
let cadena
const palabra = pt ("Dime una palabra: ")

const frase = palabra
let numeros = 0

   for (let x = 0; x < frase.length; x++){
    if (frase.charAt(x) === "1" ||
        frase.charAt(x) === "2" ||
        frase.charAt(x) === "3" ||
        frase.charAt(x) === "4" ||
        frase.charAt(x) === "5" ||
        frase.charAt(x) === "6" ||
        frase.charAt(x) === "7" ||
        frase.charAt(x) === "8" ||
        frase.charAt(x) === "9" ){
            numeros = numeros +1
        }
            
   }       
    
 console.log ("La suma es " + numeros)