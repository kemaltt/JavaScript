<<<<<<< HEAD
// Strings

const firstName = 'Kemal';
const lastName = "Tütüncü";
let hobbies = 'sinema,spor,kitap,yazılım';
const age = 35;

let val ;

//String concat : birleştirme 

val = firstName +" "+ lastName;

val = 'Kemal';
val +='Tütüncü';

val = 'Benim adım '+ firstName +' '+ lastName + ' ve yaşım '+ age +" Kayseri'de yaşıyorum" ;

// String concat-----------------------------------------------------

val = firstName.concat(' ',lastName);



// String upper-lowercase; büyük ve küçük harfler--------------------------

val = val.toUpperCase();
val = val.toLowerCase();



//val = val.indexOf('t'); =6
//val = val.indexOf('x'); = -1

// Substring : String içinden bölüm çıkarma-------------------------------

//val = val.substring(3,8);  // al tü

//val = val.substring(0,5);  // kemal

// slice : değer silme-------------------------------------------------

//val = val.slice(3);      //(kemal)=(al)

//val = val.slice(3,7);    // kemal tütüncü => al t  

// String replace  : karakter değiştirme---------------------------

//val = val.replace('kemal','Sena');  // Kemal Tütüncü => Sena ttnc

// trim : boşluk alma-------------------------------------------

//val = '    '+val.replace('kemal','Sena')+'       '; 

//val = val.trim();

// Split : dizileri ayırma(a,b,c,d)

val = hobbies.split(',');


// string length
 //val = val.length;
 

console.log(val);
console.log(typeof val);
=======
// Strings

const firstName = 'Kemal';
const lastName = "Tütüncü";
let hobbies = 'sinema,spor,kitap,yazılım';
const age = 35;

let val ;

//String concat : birleştirme 

val = firstName +" "+ lastName;

val = 'Kemal';
val +='Tütüncü';

val = 'Benim adım '+ firstName +' '+ lastName + ' ve yaşım '+ age +" Kayseri'de yaşıyorum" ;

// String concat-----------------------------------------------------

val = firstName.concat(' ',lastName);



// String upper-lowercase; büyük ve küçük harfler--------------------------

val = val.toUpperCase();
val = val.toLowerCase();



//val = val.indexOf('t'); =6
//val = val.indexOf('x'); = -1

// Substring : String içinden bölüm çıkarma-------------------------------

//val = val.substring(3,8);  // al tü

//val = val.substring(0,5);  // kemal

// slice : değer silme-------------------------------------------------

//val = val.slice(3);      //(kemal)=(al)

//val = val.slice(3,7);    // kemal tütüncü => al t  

// String replace  : karakter değiştirme---------------------------

//val = val.replace('kemal','Sena');  // Kemal Tütüncü => Sena ttnc

// trim : boşluk alma-------------------------------------------

//val = '    '+val.replace('kemal','Sena')+'       '; 

//val = val.trim();

// Split : dizileri ayırma(a,b,c,d)

val = hobbies.split(',');


// string length
 //val = val.length;
 

console.log(val);
console.log(typeof val);
>>>>>>> c131bf314d68f4b4b8dacb83454385a69b3cd86f
