//console.log("Hola mundo"); //ejecutar 'node index.js'

//**************************
//************DECLARACIONES E IMPRESIONES*************
//*************************
// let username = 'fazt';
// let age = 18;
// let hasHobbies = false;
// let points = [10,20,30];
// let user = {
//     name: 'ryan',
//     lastname: 'ray'
// }
// const pi = 3.1416;

// console.log(username);
// console.log(age);
// console.log(points);
// console.log(hasHobbies);
// console.log(user);
// console.log(pi);

//**************************
//************CONDICIONALES*************
//*************************
// let edad = 12;
// if(edad>=18){
//     console.log("Tú eres un adulto/a");
// }else if(edad>=13 && edad<18){
//     console.log("Tú eres un adolescente");
// }else{
//     console.log("Tú eres un niño/a")
// }

//**************************
//************CICLOS (BUCLES)*************
//*************************

// const names = ['Pablo','Pancho','Miguel sin Costilla'];
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

//**************************
//************FUNCIONES*************
//*************************

function mostrarInfoUsuario(nombre, edad) {
  return `Tu nombre es ${nombre} y tienes ${edad} de edad`;
}

const mostrarInfoUsuarioDos = (nombre, edad) => {
  return `Tu nombre es ${nombre} y tienes ${edad} de edad`;
};

console.log(mostrarInfoUsuario("Pablo", 30));
console.log(mostrarInfoUsuarioDos("Panfila", 20));
