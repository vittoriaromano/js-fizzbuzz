'use strict';




///dare al contenitore una variabile
const ul = document.getElementById('lista');

//creo un ciclo con la sintassi giusta fino a 101
for (let i= 1; i < 101; i++) {

    //dare al contenuto una variabile
    let li = document.createElement('li');

    //se ha la convenzione dei mutipli di 3 e 5 fizzbuzz
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log('fizzbuzz');

        //usando append dare al contenuto il valore della variabile 
        li.append('fizzbuzz')
        ul.append(li)

    //se no solo i mutipli di 5 buzz
     }else if (i % 5 === 0) {
        console.log('buzz');
        //usando append dare al contenuto il valore della variabile 
        li.append('buzz')
        ul.append(li)

    //se no solo i mutipli di 3  fizz
     } else if(i % 3 === 0) {
        console.log('fizz');

        //usando append dare al contenuto il valore della variabile 
        li.append('fizz')
        ul.append(li)

     }//altrimenti resta un numero
     else {
        console.log(i);
        
        //usando append dare al contenuto il valore della variabile 
        li.append(i)
        ul.append(li)
     }

}




  





