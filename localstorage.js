// Local Storage  tarayıcıya kaydetme
let val;
// setItem = atama

const firstName = localStorage.setItem('firstName','Kemal');
const lastName = localStorage.setItem('lastName','Tütüncü');

const hobbies = ['gezmek','spor yapmak','okumak']

// getItem= eleman alma

val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

//removeitem


// localStorage.removeItem('firstName');  //Kemal silindi
// localStorage.removeItem('lastName');  // tütüncü silindi


// clear

localStorage.clear();  // hepsini sildi


// set array to storage

localStorage.setItem('hobbies',JSON.stringify(hobbies));


console.log(val);

console.log(localStorage);


// Session Storage

const city = sessionStorage.setItem('city','Kayseri');
const country = sessionStorage.setItem('country','Türkiye');

console.log(sessionStorage);