// Destructuring
// Ejercicio 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

  const [luis,ana,] = empleados
  console.log(ana);

  const {email} = luis
  console.log(email);

// Ejercicio 2
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const {name: nombre, type, moves} = pokemon
console.log(nombre);

console.log(type);

const [,ataque] = moves
console.log(ataque);

// Spread/rest
// Ejercicio 3
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergearPokemon = {...pokemon, ...pikachu}
console.log(mergearPokemon);

// Ejercicio 4
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 

function sumEveryOther(...numeros) {
    const suma = numeros.reduce((a,b) => a+b)
    console.log(suma);
}

function addOnlyNums(...only) {
    
    console.log( only);

    let numbers = only.filter(num => typeof num  === "number")
    console.log(numbers);
    const sumas = numbers.reduce((a,b) => a+b)
    console.log(sumas);
}

addOnlyNums(1, 'perro', 2, 4); //7

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

function countTheArgs(...pets) {
    console.log(pets.length); 
}

// Extras
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

  const {yesterday,today: maximaHoy,tomorrow: maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy)
console.log(maximaManana)

function onlyUniques(...noRepeat) {
    let result = noRepeat.filter((item,index) => {
        return noRepeat.indexOf(item) === index;
    })
    console.log(result);
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function combineAllArrays (...combine) {
    //const mezclar = combine.reduce((a,b) => combine[0].concat(combine[1,2]))
    //console.log(mezclar);
    let all = combine[0].concat(combine[1,2])
    console.log(all);
}

combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function sumAndSquare(...value) {
    const cuadrado = value.reduce((a,b) => ((a*a)+(b*b))) 
    //const cuadrado = value.reduce((a,b) => ((a**2)+(b**2))) 
    //const cuadrado = value.reduce((a,b) => Math.pow(a,2) + Math.pow(b,2))
    console.log(cuadrado);   
}

sumAndSquare (2,5,7,9,8)