console.log("probando")




function saludar(name) {
  console.log(`Hola ${name}`)
} // ref. 1234
// saludar("juliette")
// saludar("jorge")

function despedirse(name) {
  console.log(`Adios ${name}`)
}

function functionQueUsaCallback( funcionDeCallback ) {

  // let funcionDeCallback = saludar // ref. 1234
  // console.log(funcionDeCallback)
  console.log(typeof funcionDeCallback)

  funcionDeCallback("jorge")
}

// functionQueUsaCallback( saludar() ) // esto significa, ejecuta la funcion y el valor es el argumento

functionQueUsaCallback( saludar ) // se pasa la funcion para que sea ejecutada más adelante. Se pasa la referencia

functionQueUsaCallback( despedirse )



let unArray = ["adri", "fran", "pablo", "meri", "josep"]

// unArray.forEach( saludar )


unArray.forEach( function() {
  console.log("patata")
} )

unArray.forEach( () => {
  console.log("patata")
} )




// forEach()


let randomNumbers = [4, 8, 15, 16, 23, 42]


// const testFunction = function() {
//   console.log("probando el forEach")
// }

// let sum = 0;
randomNumbers.forEach( function(eachElement, index) {
  console.log("el indice es: ", index)
  console.log("probando el forEach", eachElement)
  if (eachElement === 42) {
    console.log("he conseguido la respuesta al universo, la vida y todo lo demás")
  }
  // sum += eachElement
} )


// console.log(sum)



// .map()
// el map crea un nuevo array, con todos los elementos del original algo modificados

// crea un nuevo array con todos los elementos dividido por 100


// let nuevoArr = []

let nuevoArr = randomNumbers.map((eachNumber) => {
  // nuevoArr.push( eachNumber / 100 )
  return eachNumber / 100;
  // lo que yo retorna es lo que map utiliza para crear cada elemento del nuevo array
})

console.log(nuevoArr)
console.log(randomNumbers)


let nuevoArr2 = randomNumbers.map((eachNumber) => {
  if (eachNumber > 10) {
    return eachNumber.toString();
  } else {
    return eachNumber * 1000
  }
})

console.log(nuevoArr2)




// .filter()


const cars = [
  { brand: "Mercedes", year: 2000, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.8 },
  { brand: "Bugatti", year: 1995, weight: 2 },
  { brand: "Volvo", year: 2010, weight: 0.5 },
  { brand: "Seat", year: 2023, weight: 1.3 },
]

// let filteredCars = cars.map((eachElement) => {
//   if (eachElement.year >= 2010) {
//     return eachElement
//   }
// })

// map no funciona para filtrar porque map SIEMPRE crea un nuevo array con LA MISMA cantidad de elementos que el original.

let filteredCars = cars.filter((eachCar) => {

  if (eachCar.year >= 2010 && eachCar.weight < 1 ) {
    return true // TRUE significa incluyelo en el array
  } else {
    return false // FALSE significa no lo incluyas en el array
  }

  // el filter SIEMPRE devuelve el elemento sin modificación

})

console.log(filteredCars)

let onlyBrands = cars.map((eachCar) => {

  // espera que le retornemos el valor que será cada elemento del nuevo array

  return eachCar.brand

})

console.log(onlyBrands)



// .reduce()


let someNumbers = [2,1,4,3] // => 10

// let valorFinal = array.reduce( funcion, valorInicialDelAcumulador )


let sum = someNumbers.reduce((acumulador, eachNumber) => {

  console.log(acumulador, eachNumber)
  // en el reduce debemos retornar el proximo valor acumulado

  return acumulador + eachNumber

}, 0)

console.log(sum)


let students = [
  { name: "adri", candy: 10 },
  { name: "fran" },
  { name: "pablo", candy: 15 },
  { name: "meri", candy: 8 },
]


let totalCandy = students.reduce((acc, eachStudent) => {
  console.log(acc, eachStudent.candy)
  if (typeof eachStudent.candy === "number") {
    return acc + eachStudent.candy
  } else {
    return acc
  }

}, 0)

console.log(totalCandy)


let allNames = students.reduce((acc, eachStudent) => {

  return acc + " - " + eachStudent.name[0].toUpperCase() + eachStudent.name.slice(1)

}, "")

console.log(allNames.slice(3))


// .reverse()


let orderedNumber = [1, 2, 3, 4, 5, 6] // ref. 1234

// Clonar arrays/objetos (Shallow clone) Clonación de primer nivel

// 1. map
// let clone = orderedNumber.map((eachElement) => {
//   return eachElement
// }) // ref. 4444

// 2. slice
// let clone = orderedNumber.slice(0) // ref. 5555

// 3. operador esparcimiento (...)
// let clone = [...orderedNumber] // ref. 6666

// Clonar arrays/objetos (Deep Clone) Clonación Total

// 4. JSON parse + JSON stringify
// let clone = JSON.parse( JSON.stringify( orderedNumber ) )

// 5. structuredClone
let clone = structuredClone(orderedNumber) // no es recomendable aun, existen casos donde este metodo falla, es muy reciente

let reverseNumbers = clone.reverse()

console.log(reverseNumbers)
console.log("original", orderedNumber)

// reverse y sort se comportan como pop, shift, unshift, push, splice. MUTAN EL ARRAY ORIGINAL.

// ejemplo de uso de JSON parse y stringify
let array = [ 10, 20, "patata", true, {name: "jorge"} ]
console.log(JSON.stringify(array))

console.log(JSON.parse( "[20,50]" ))



// .sort => muta el array original

let someCharacters = ["f", "a", "ex", "ea", "c", "d", "b"]

let sortedCharacters = someCharacters.sort()

console.log(sortedCharacters)



let unorderedNumbers = [4, 100, 3, 200, 1300]

/* 

array.sort((unElemento, otroElemento) => {

  return valorPositivo (1) // el primero va primero
  return valorNegativo (-1) // el segundo va primero
  return 0 // no cambies el orden actual

})

*/

let sortedNumbers = unorderedNumbers.sort((elem1, elem2) => {
  console.log(elem1, elem2)
  if (elem1 > elem2) {
    return -1
  } else if (elem2 > elem1) {
    return 1
  } else {
    return 0
  }
})

console.log(sortedNumbers)




let studentsAll = [
  { name: "fran", candy: 20 },
  { name: "pablo", candy: 10 },
  { name: "meri", candy: 8 },
  { name: "josep", candy: 18 },
  { name: "adri", candy: 10 },
]


let ordered = studentsAll.sort((student1, student2) => {

  if (student1.candy > student2.candy) {
    return 1
  } else if (student2.candy > student1.candy) {
    return -1
  } else {
    return 0
    // si ambos tiene la misma cantidad, entonces ordena por el nombre alfabetica
    // student1[0] contra student2[0]
    // localeCompare()
  }

})

console.log(ordered)