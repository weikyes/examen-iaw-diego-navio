const pt =require("prompt-sync")({signit: true})

let años = Number

let capital_inicial = Number

let interes=Number

let porcentajeAleatorio = Math.round(Math.random()*9)
let sumaCapital = (capital_inicial + porcentajeAleatorio)

const invertir = pt("¿Cuanto dinero quieres invertir?-> ")
const anual = pt("¿Interes anual?-> ")
const dinero = pt("¿numero de años?-> ")

console.log("si" + sumaCapital)

