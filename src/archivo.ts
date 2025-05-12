let mensaje: string = "Hola mundo";

//mensaje = 45; //con eso pruebas el tipado estatico del código

//console.log(mensaje);
//console.log(typeof ["Hans", "Geny", "Alexander", "Andrea"]);

/*
let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos = true;

extintos = 43;
*/
let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;

//extintos = 43;

let animales: string[] = ['Gato','Perro','Loro'];
let nums: number[] = [1,2,3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

//con esto vamos a ver cuando llamamos el array animales al hacer ctls + space me sugiere solo los métodos relacionado al tipo de dato

//animales.map(x => x.)

//tupla
let datos: [string[], number, boolean, Date] = [["Ana", "Luis"], 30, true, new Date()];
//console.log(datos[0]);
//console.log(datos[1]);
//console.log(datos[2]);
//console.log(datos[3]);

//ENUMS

const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';

//pascal case

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', Extragrande = 'xl'};

const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState { Idle, Loading, Success, Error};

const estado = LoadingState.Success; //En el dist donde esta el archivo.js va generar el codigo js

type Direccion = {
   numero: number,
   calle: string,
   pais: string
}

type Persona = {
   readonly id: number,
   nombre: string,
   talla: Talla,
   direccion: Direccion
 }


const objeto: Persona = {
    id: 1,
    nombre: 'Fenandez',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'siempre viva',
        pais: 'Argentina'
    }
}

//arreglo para contener el objeto

const arr: Persona[] = [];


/*
const objeto: {
 id:number,
 nombre: string,
 talla: Talla,
} = {id: 1, nombre: 'Juan', talla: Talla.Mediana};

*/
