function yasHesapla(dogumYili) {

    return 2021 - dogumYili
    
}

let ageOrhan = yasHesapla(2012);
let ageSena= yasHesapla(2020);
let ageOznur= yasHesapla(1988);

console.log(ageOrhan);
console.log(ageSena);
console.log(ageOznur);
//---------------------------------------------------------------------------
function EmekliligeKacYilKaldi(dogumYili,isim) {

    let yas = yasHesapla(dogumYili);

    let emeklilik = 65 -yas

    if (emeklilik>0) {

        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    }

        else { 
            console.log('zaten emekli oldunuz');
        }
        
    
    
}

EmekliligeKacYilKaldi(2012,'Orhan');
EmekliligeKacYilKaldi(2020,'Sena');
EmekliligeKacYilKaldi(1955,'Oznur');  // zaten emekli oldunuz yazar

//------------------------------------------------------------------

// Function Declarations-------------------------------------

// function sum(a,b) {

//     var c = a+b;

//     return c;    
// }

// console.log(sum(10,20));  // ekrana 30 yazar

// Function Expressions------------------------------------------

// const sum = function (a,b) {

//     var c = a-b;

//     return c;   
// }
// console.log(sum(10,30)); // ekrana -20 yazar
// console.log(sum(10)); // ekrana NaN yazar
// console.log(sum(10,30,40,50)); // ekrana -20 yazar diğerleri göz ardı edilir

// Varsayılan parametre ataması ----------------------------------------------------
// const sum = function (a,b) {

//     if (typeof a === 'undefined') {

//         a=0
//     }

//     if (typeof b==='undefined') {

//         b=0
        
//     }

//     var c = a-b;

//     return c;   
// }
// console.log(sum(10,30)); // ekrana -20 yazar
// console.log(sum(10)); // ekrana 10 yazar
// console.log(sum(10,30,40,50)); // ekrana -20 yazar diğerleri göz ardı edili

// ES6 ile gelen özellik (Default Parameters)----------------------------
const sum = function (a=0,b=0) {

     var c = a-b;

    return c;   
}


function sumAll() {

    var total = 0;
    for (let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total
}


console.log(sum(10,30)); // ekrana -20 yazar
console.log(sum(10)); // ekrana yine 10 yazar,yukarıdakini ezer
console.log(sum(10,30,40,50)); // ekrana -20 yazar
console.log(sumAll(10,20,30,10,30));  // hepsini toplar yazdırır.