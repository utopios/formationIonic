import MonImport,{ Person, Student } from "./person"
//Avant ES6
// const maFonction = function(param1) {
//     console.log(param1)
// }

//Apres ES6+
const maFonction = (param1) => { 
    console.log(param1)
}
//Variable muable
const firstName = "abadi"

//String template
const name = `Mon nom est ${firstName}`
//variable mutable
let number = 1
number++

//Opérateur spread et rest
const tab1 = [1,2, true, "toto"]
const tab2 = ["titi", "minet", false]

const tabAll = [...tab1, ...tab2]

const ob1 = {
    key1 : 'val1'
}
const ob2 = {
    key2 : 'val2'
}
const objAll = {...ob1, ...ob2}

const addition = (...numbers) => {
    let total = 0
    for(let element of numbers) {
        total+=element
    }
}

console.log(addition(3,5,6))

const personne_formateur = {
    firstName : 'abadi',
    lastName: 'ihab',
    address : 'lille'
}
const {firstName, lastName, address} = personne_formateur

console.log(firstName)
console.log(lastName)
console.log(address)
