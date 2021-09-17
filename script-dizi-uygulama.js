// Demo Arrays

//arabaları dizi oluştur

let Auotos=['Bmw','Mercedes','Opel','Mazda'];

console.log(Auotos);

// Dizi kaç elemanlı--------------------------------------

console.log(Auotos.length);

// dizini ilk ve son elemanı-------------------------------


console.log(Auotos[0],Auotos[3]);
console.log(Auotos[3]);

// dizinin içine Renault ekle----------------------------------------

//Auotos.push('Renault');


//Auotos[4] = 'Renault'

Auotos[Auotos.length]= 'Renault'

console.log(Auotos);

// Toyota değerini dizinin başına---------------------------------------


//Auotos.splice(0,0,'Toyota');

Auotos.unshift('Toyota');


// "Renault değerini siliniz

Auotos.pop();


// Toyota değerini siliniz----------------------------------------------


//Auotos.splice(0,1);
//Auotos.shift();

// Dizi elemanlarını ters çevirin------------------------------------

Auotos.reverse();

// Dizi elemanları alfabetik sıra---------------------------------

Auotos.sort();

console.log(Auotos);



// [1,2,5,80] dizisini sırala

var nummers=[1,2,5,80,15];

//nummers.sort();  // alfabetik

function compare(a,b) {

    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
    
}
console.log(nummers.sort(compare));

// Opel dizinin bir elemanımıdır

console.log(Auotos);

console.log(Auotos.indexOf('Opel'));  // kaçıncı sırada olduğunu gösterir
console.log(Auotos.includes('Opel'));  // true yada false

// var str = "Chevrolet,Dacia";  ifadeyi diziye çevirin

var x ="Chevrolet , Dacia"
var Auotos2= x.split(' , ');  // ifadeleri diziye cevirme

console.log(Auotos2);

// Oluşturulan dizi ile ilk diziyi birleştir:


var Auotos3= Auotos.concat(Auotos2);

console.log(Auotos3);

// Oluşturulan dizini son iki elemanı sil

// Auotos3.pop();
// Auotos3.pop();
// console.log(Auotos3);

console.log(Auotos3.splice(5,2));

console.log(Auotos3);

// Aşağıdaki verilen elemanları birdizinin içine saklama

var studentA = ['Yigit','Bilgi',2010];
var studentB = ['Sena','Tütüncü',1990];
var studentC = ['Yusuf','Turan',2001];

var students = [studentA,studentB,studentC];

console.log(students);

console.log(students[0]);  // ['Yigit','Bilgi',2010]; i yazdırdı

console.log(students[0][0] );  // Yigit i 
console.log(students[0][1] ); //  Bilgi
console.log(students[0][2] ); //  2010


console.log(students[1][0] );  // sena
console.log(students[1][1] ); //  tütüncü
console.log(students[1][2] );  // 1990







