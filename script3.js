// alert("Merhaba");
// console.log(1234)

// Değişkenler

 var age;
 console.log(age);

 age=20;
 console.log(age);

 var fullname="Kemal";
 console.log(fullname);

 fullname='Sena'
 console.log(fullname)

 var yas
 yas= 36;
 console.log(yas)

// Değişken Tipleri
// Primitive Types

// String

 let firstName='Çınar';

// // Number

 let age= 20;
 let money= 100.5;

// // Boolean

 let isActive= false ;

// // null

 let job=null;

// // undefind

 let car;

// // Reference Types

// // Array

 let names=['Ali','Ahmet','Can'];

// // Object

 let address={

     city:'Kayseri',
     country:'Türkiye'
 }

// // Function

 var calculateAge = function(){return 0;
    
 };

 console.log(typeof calculateAge);


// Ders4: Tür Dönüşümü

let val;

// number tostring

val =String(10);


// bool to string

val=String(true);

// date to String


val=String(new Date);

//b Array

val =String([1,2,3,4]);

// toString

val=(10).toString();
val=(false).toString();

// String to Number

val =Number(10);
val = Number(true)
val=Number(false)
val =Number(null)
val= Number('a')


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));



