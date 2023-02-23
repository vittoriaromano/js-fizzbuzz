'use strict';




//creo un ciclo con la sintassi giusta fino a 101
for (let i= 1; i < 101; i++) {
    //se ha la convenzione dei mutipli di 3 e 5 fizzbuzz
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log('fizzbuzz');
        //se no solo i mutipli di 5 fizzbuzz
     }else if (i % 5 === 0) {
        console.log('buzz');
        //se no solo i mutipli di 3  fizz
     } else if(i % 3 === 0) {
        console.log('fizz');
     }//altrimenti resta un numero
     else {
        console.log(i);
     }
     

}









