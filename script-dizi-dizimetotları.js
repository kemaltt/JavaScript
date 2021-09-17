// Arrays

let names = ['sena','orhan','öznur','kemal'];
let years = [2020,2012,1988,1986,1985];
let mix =['kemal','tütüncü',1986,null,undefined,['sinema','kitap']];





//get array item (çağırma)---------------------------------------

console.log(names[0]);  // Sena
console.log(names[3]); // Kemal

console.log(years[3]);  // 1986

console.log(mix[5]); // [sinema,kitap]

// set aaray item(yerine gönderme)-------------------------------

names[1]='mustafa';  // orhan yerine mustafa yazdı

names[5]= 'emel';  // dizi sonuna 5. isim olarak ekler 

// add item(ekleme)---------------------------------------------

years.push(1985);  // yearsın sonuna 1985 atadı
years.unshift(1985); // yearsın başına atadı

// remove item----------------------------------------------------

years.pop();  // sondakini sildi
years.shift(); // ilkisilme

// bulmak için----------------------------------------------------

let index = names.indexOf('öznur');   // index: 2 öznur 2.sıradaki isim

console.log(' index : '+index);     

//reserve (ters çevirme)----------------------------------------

names.reverse();  // isimleri tersten yazdırdı

// sort(sıralama)---------------------------------------


years.sort();

// concat(dizi birleştirme)-----------------------

let val=years.concat(names);
console.log(val);

// splice


names.splice(2,0,'seda');  //names 2.sıraya seda ekledi

names.splice(1,1,'ali');  // 1.sıradakiismi silip yerine ali yazdı.

names.splice(2,1);




function over18(year) {

    let age= 2021- year;

    return age>=18;
    }

    //find-----------------------------------------------------------------
  let x=  years.find(over18);   // 18 yaşdan büyük ilk sıradaki(1985)

  console.log(x);

  // filter---------------------------------------------------------------

  let y= years.filter(over18);  // 1985,1986 v3 1988 iyazdırdı


 console.log(y);












console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);