// ** Global Scopes------------------------------------------------

var Name = "Orhan";
var age = 10;

function logName() {
  var Name = "Sena";
  var age = "2";
  console.log("function scope", Name, age);
}

if (true) {
  var age = 9;
  console.log("block scope", Name, age);

  console.log(age);
}

logName();
console.log(Name);

// Fonksiyonlar kendi scop larını oluşturur.
// ** Block'lar yeni scope oluşturmaz.
//ES6 ile gelen let ve const block scope oluşturur.

console.log("*********************************************");

if (true) {
  var model = "Opel";
  let year = 2016;
  const color = "white";
  console.log("block scope", model, year, color);
}
//console.log('block scope',model,year,color);     // yazdırmadı
console.log(model); // model yazar
// console.log(year); // yazdırmaz hata verir
// console.log(color);// yazdırmaz hata verir

//-----------------------------------------------------------

var i = 5;

for (let i = 0; i < 10; i++) {   // let yerine var yazsa idik hep 10 yazacaktı
  console.log("i", i);
}

console.log(i);
