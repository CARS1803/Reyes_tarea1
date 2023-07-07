    // Variables
    // string = 'papel';
    // number = 15;
    // booleano = false;
    // booleano2 = true;

        //Nota: El error 'Undefined', significa que tenemos la variable pero no la hemos definido aun.

    // Constante
const nombre = 'Reyes'
//      nombre = 'Carlos'  //Las constantes no se pueden volver a repetir
// alert(nombre)
console.log(nombre)     //se puede utlizar console.log para que la varible aparezca dentro de la consola.

    // Para inicializar una variable se debe de colocar de esta manera.
let numero=29.505;
//numero=25;   // Aca si se puede modificar la variable a diferencia de una constante
//alert(numero)
console.log(numero)

    //Para definir varias variables en una sola linea.
//let numero1=20, numero2=21, numero3=22


    //Null y Nad.
    //Null es un vacio intencional en una variable 
let numero4=null;
alert(numero4)

// Tipo de dato Booleano
let bool = true;
console.log(bool)
let bool2 = false;
console.log(bool2)

    //Operadores Matematicos
let numero5=3, numero6=6;
// alert(numero5*numero6); //*,+,-,/
console.log(numero5*numero6)


    //Concatenacion
let nombre1='Carlos ', apellido1='Reyes';
// alert(nombre1+apellido1); //Aca se concatena.
//alert(nombre1*apellido1); //Aparece una alerta que devuelva NaN, que significa Not a Number, por que no se puede multiplicar dos palabras.
console.log(nombre1+apellido1);

    // La funcion prompt al utilizarla la pagina nos devolvera alguna cosa, por ejemplo dime tu nombre
    // Colocamos nuestro nombre y en automatico codo el prompt se convertira en el nobre del usuario
    // esta se almacenara dentro de una variable y ya la podremos usar la veces que queramos dentro nuestro
    // programa.
//let nombre = prompt('Cual es tu nombre?');
// alert(nombre);
    //Podemos concatenar, por ejemplo
//alert('hola '+nombre);


    //Operadores en JavaScript, Aritmeticos y de Asignacion.
    //Operadores de Asignacion: Un operador de asignacion asigna un valor operando de la izquierda basado en el valor del operando de la derecha.
    
    //  Nombres                                             Abreviaciones           Sifnificado
      
        /*  Asignacion                                          x=y                     x=y
                (Matematicos)
            Asignacion de adiccion                              x+=y                    x=x +y
            Asingancion de sustraccion                          x-=y                    x=x -y
            Asignacion de Multipliacion                         x*=y                    x=x *y
            Asignacion de division                              x/=y                    x=x /y
    Asignacion de resto (el residuo de la resta de la division) x%=y                    x=x %y
            Asignacion de exponenciancion                       x**=y                   x=x *y
                (Asignacion)
            Asignacion de desplazamiento a la izquierda         x<<=y                   x=x <<y
            Asignacion de desplazamiento a la derecha           x>>=y                   x=x >>y
            Asignacion sin signo de desplazamiento a la derecha x>>>=y                  x=x >>>y
            Asignacion AND                                      x&=y                    x=x &y
            Asignacion XOR                                      x^=y                    x=x ^y
            Asignacion OR                                       x|=y                    x=x |y
        */
    //Para realizar operaciones matematicas de una manera mas simplificada

// let numero=10;
// numero +=5;
    //Con la funcion 'document.write()' imprime nuestro resultado en la pagina web.
// document.write(numero);

// let numero1=10;
// numero -=5;
// document.write(numero);

    
        //NOTA: Tenemos simbolos de incremento(++) y decremento (--)

    //Forma de concatenacion
// saludo='Hola Pedro ', pregunta='Como estas?';
// frase=saludo+pregunta;
// document.write(frase);
    //y si quiero concatenar dos numeros sin sumarlos, se hace de esta manera.
// numero1=54,numero2=3;
// numeros= ''+numero1+numero2;
// document.write(numeros); 
    //De esta forma nos evitaremos muchos errores futuros.
// nombre='Carlos Reyes';
// frase=`Soy ${nombre} y estoy caminando`;  //darkits ` usando Alt+96.
// document.write(frase);


    //Escape de Comillas simples y Escape de Comillas dobles.
    //Osea si queremos usar comillas dobles dentro de un strign tenemos que iniciar con comillas simples, asi.
// nombre='Carlos Reyes';
// frase='mi nombre es "Carlos" y soy un programador';
// document.write(frase); 


    //Operadores de comparacion
        /*
        Equality(a==b)
        Inequality(a!=b)
        Identity(===)
        Non-identity(a!==)
        Greater than(a>b)
        greater than or aqual(a>=)
        Less than(a<b)
        less than or equal(a<=b)
        */
// let numero=23;
// let numero1=23;
// document.write(numero == numero1)

// let numero=23;
// let numero1=23;
// document.write(numero != numero1)

// let numero=23;
// let numero1=13;
// document.write(numero === numero1)

// let numero=23;
// let numero1=13;
// document.write(numero !== numero1)

// let numero=23;
// let numero1=13;
// document.write(numero > numero1)

// let numero=23;
// let numero1=13;
// document.write(numero < numero1)

// let numero=12;
// let numero1=24;
// afirmacion=numero>numero1;
// afirmacion1=numero!=numero1
// document.write(afirmacion && afirmacion1);

// let numero=12;
// let numero1=24;
// afirmacion=numero>numero1;
// afirmacion1=numero!=numero1
// document.write(afirmacion || afirmacion1);


    //Condicionales if, else if, else

// nombre='Carlos Reyes';

// if(nombre=='Carlos'){
//     alert('tu nombre es '+nombre)
// }
// else if (nombre == 'Reyes'){
//     alert('tu nombre es ' +nombre)
// }
// else if(nombre=='Carlos Reyes'){
//     alert('tu nombre es '+nombre)
// }else{
//     alert('tu nombre no coincide')
// }


// Creacion de Objetos

// let Persona = {
//     nombre : 'Reyes',
//     peso : 170,
//     edad : 23,
//     altura: 1.83,
//     saludar: function (){
//         alert("hola soy Reyes")
//     }
// }
// // alert(Persona)

// console.log(Persona)




//Creacion de Arrays

// let array = [1,2,3,5,6,"Array"]
// console.log(array)
// alert(array)

