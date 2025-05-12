/*
    Introducción
*/

//validando datos con JavaScript tipado dinámico

const n = "Hola mundo";

console.log(typeof n);

const m = "chanchito feliz";
console.log(typeof m);


if (typeof n == "string" && typeof m == "string"){
	
	console.log("Código testeado, esta bien");
} else {
	console.warn('tipos de datos inválidos');
}


//Esto evalua el código como testing pero los errores se ven cuando esta en producción
//por ese motivo JavaScript trae problemas ya que ni las pruebas unitarias dectecta el error

//TypeScript soluciona ese problema que tiene JavaScript

//TypeScript tiene la extensión archivo.ts

/*
    Instalación en Windows es con permiso con administrador
*/

//vamos a instalar Node JS --> que es un entorno de ejecución

//vamos a la consola con permiso de administrador y escribimos node -v para tener la versión

//comando para instalar TypeScript --> npm i -g typescript

//Para verificar si tenemos instalado el TypeScript escribir: tsc -v

/*
  En caso extremo que te de error por permiso de administrador, tenemos esta opción:
  
  get-ExecutionPolicy
  
  set-ExecutionPolicy remotesigned

  escribes la opción: a

  exit
*/

/*

  Primeros pasos 
  
  vamos a crear un archivo typescript : archivo.ts 
  
  vamos a depurarlo por consola y probablemente te va crear un archivo JavaScript
  con el mismo nombre.
  
  comando de la consola: tsc archivo.ts
  
  cuando ejecutes no va salir nada, si hay un error si.
*/

/*
 Configurando compilador 25:14
 
 borrar el archivo : archivo.js 
 
 escribir comando: tsc -init
 
 si vemos nos va a generar el archivo tsconfig.json

vamos a moficar el archivo, en la linea 14 donde dice "target": "es2016" lo cambias por :
"target": "ES2016" --> más segura y soporta el emascript
ahora vamos a modificar la ubicación:
linea 30 donde está // "rootDir": "./",  vamos a poner la dirección de nuestro proyecto
vamos a descomentar los // y vamos a modificar así: "rootDir": "./src", 
quiere decir que todo el codigo se va ejecutar en la carpeta src 

vamos a crear la carpeta src en nuestro proyecto 

movemos el archivo: archivo.ts a la carpeta src/archivo.ts

Ahora vamos al archivo: tsconfig.json   
en la linea: 54 donde dice /* Emit 
linea 62 : // "outDir": "./",   vamos a especificar en donde se va ejecutar el codigo
recuerda descomentar los //
"outDir": "./dist",
 
 
 Ahora vamos a la otra opción linea 73: "noEmitOnError": true, --> con eso evitamos que se ejecute
 archivos javascript como duplicado al typescript
 recuerda descomentar 
 
 "noEmitOnError": false,
 
 
 ahora vamos a la linea 63 --> // "removeComments": true,
 
 descomentamos y lo dejamos true
 "removeComments": true,
 
 vamos ejecutar el codigo en el cmd:
 no hay necesidad de apuntar a la carpeta porque ya esta configurado
 
 comando: tsc   
 
 solo nos va generar la carpeta dist/archivo.js 
 
*/


/*

 Depurando TypeScript

 PASOS:
 
 1.- vamos al archivo typescript.json 
 2.- Buscar a Emit y ir a linea58 --> //"sourceMap":true, 
 3.- Descomenta quitando esos // y dejalo en true
 4.- Recuerda que sirve para indicar el mapeo el archivo de JavaScript con el archivo de TypeScript 
 5.- abrimos el cmd y ejecutamos el comando: tsc
 6.- no vas generar nuevos archivos en la carpeta dist 
 7.- vamos a nuestro codigo src/archivo.ts  --> y activamos el conle.log(); para hacer pruebas 
 8.- vamos usar el visualcode
 9.- ir a labarra de actividad que está a la derecha donde se muestra los archivos
 10.- ir al icono de un virtus con simbolo de play que dice: Run and debug 
 11.- ve a la opción: create a launch.json.file y seleccionas la opción Node.js
 12.- modificar el archivo launch.json
 13.- egregamos este codigo: "preLaunchTask": "tsc: build - tsconfig.json"    debajo de  "program": "${workspaceFolder}\\test.js",
 14.- modifica esto: "program": "${workspaceFolder}\\test.js", por "program": "${workspaceFolder}/src/archivo.ts",
 15.- vamos al icono de arriba donde dice > Launch Program donde esta la barra de actividades donde se muestra los archivos
 16.- Al desglosar selecciona el Launch Program y ejecutas, tambien puede ser f5
 17.- en tu consola de visual code tienes que ver la terminal donde esta la opcion: Debug console --> ahí va aparecer el "Hola mundo" 
*/


/*

Sección tipos básicos

 number
 string
 boolean
 null
 undefined
 object --> Esto es el arreglo, solo que en typescript lo ve como object
 function

 Para comprobar que es un tipo Objecto escribe este codigo:

 console.log(typeof []);


Lo ejecutas  

Otra forma de ejecutar vas a la consola donde dice Debug console:

comando: node dist/archivo.js


*/


/*

  Tipos en TypeScript

  Any --> No usarlo
  unknown
  never
  arrays
  tuplas
  Enums

  tipos inferidos
*/

//escribir este codigo en el typeScript -> src/archivo.ts

/*

console.log(mensaje);
console.log(typeof ["Hans", "Geny", "Alexander", "Andrea"]);

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos = true;

extintos = 43;  --> como vemos nos corrije desde el principio y es estricto, ya que ahí solo es boolean 


typescript tambien puede detectar el error sin necesidad de programar en tipado fuerte

let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;

//extintos = 43;  --> inteligentemente ya te dice el error


si creamos una variable vacia como esta:

let mivariable;  

Te va decir tipo Any y es un peligro


*/



/*


No uses el tipo Any

código: 

let mivariable;
mivariable = "hola";
mivariable = 42;

El problema de esto es que te permite el tipado dinamico

migrar de javascript a typescript te vas a topar con estos problemas: 

codigo javascript

function saludo(config){
   return config
}

pasarlo a typescript pero no es recomendanle

function saludo(config: any){
   return config
}

Hay otra forma pero no se debe hacer eso por nada del mundo

vamos al archivo tsconfig.json --> buscanmos al //noImplicitAny:true,   lo descomentas y le dejas en true

esto te permitira el tipado dinámico pero es peligroso


function saludo(config){
   return config
}

con eso no te saldra error en la migración pero es peligroso


*/


/*

 Tipo array

let animales: string[] = ['Gato','Perro','Loro'];
let nums: number[] = [1,2,3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

//con esto vamos a ver cuando llamamos el array animales al hacer ctls + space me sugiere solo los métodos relacionado al tipo de dato

//animales.map(x => x.)


*/


/*

    TUPLA - te muchos conjuntos con diferentes tipo de datos

    let datos: [string[], number, boolean, Date] = [["Ana", "Luis"], 30, true, new Date()];
    console.log(datos[0]);
    console.log(datos[1]);
    console.log(datos[2]);
    console.log(datos[3]);


*/



/*
    Enums --> se suele usar para estados como activado, desactivado, pausa, cancelado, etc. como ese tipo o tambien 
    en otros casos como talla de ropas: s,m, xl, etc.
  
    Tenemos este problema:

    const chica = 's';
    const mediana = 'm';
    const grande = 'l';
    const extragrande = 'xl';

    //SOLUCIÓN pascal case

    enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', Extragrande = 'xl'};

    const variable1 = Talla.Grande;
    console.log(variable1);

    const enum LoadingState { Idle, Loading, Success, Error};

    const estado = LoadingState.Success; //En el dist donde esta el archivo.js va generar el codigo js

*/


/*

  Objetos

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



const objeto: {
 id:number,
 nombre: string,
 talla: Talla,
} = {id: 1, nombre: 'Juan', talla: Talla.Mediana};





*/

