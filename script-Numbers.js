// Numbers

let val;

// val=Number('10');
//val = parseInt('10');  ondalıklı sayı yazdırır
//val = parseFloat('10,5'); tam sayı yazdırır
//val = parseInt('a10a');
// val = isNaN('10');
// val= isNaN('a10');

//var num =10.123456789

//val = num.toPrecision(5);  //toplam gösterilen rakam sayısı(10123)
//val = num.toFixed(5);  // noktadan sonra gösterilecek basamak sayısı(10.12345)

val = Math.PI;

val = Math.round(2.4); // 2.4 ü 2 ye yuvarlıyor
val = Math.round(2.7); // 2.7 yi 3 e yuvarlıyor

val = Math.ceil(2.4); // her zaman yukarı yuvarlar 3
val = Math.floor(2.7); // her zaman aşağı yuvarlar 2

val = Math.sqrt(64); // karekök
val = Math.pow(2,4); // 2 üzeri 4
val = Math.abs(-100); // mutlak değeri
val = Math.min(1,2,3,4,5,6,7); // en küçük sayı 1
val = Math.max(1,2,3,4,5,65); // en büyük sayı 65

val = Math.random(); // 0 ile 1 arası rastgele sayı
val = Math.floor( Math.random()*100 +1);


console.log(val);
console.log(typeof val);

//-------------------------------------

var num =15.123456789

// toplamda 3 basamaklı sayı kullan

console.log(num.toPrecision(3));

// ondalık kısmı 3 basamakta sınırla

console.log(num.toFixed(3));


// en yakın sayıya yuvarla


console.log(num,(Math.round(num)));

//aşağı yuvarla

console.log(num,Math.floor(num));

// yukarı yuvarla

console.log(num, Math.ceil(num));

// 1,2,10,56,20 en büyüğünü bul

let x;

x = Math.max(1,2,10,56,20);

console.log(x);

//oder

console.log(Math.min(1,2,10,56,20));

//sayı aralığını kullanıcının belirleyeceği rastgele sayı üret

var min = 50;
var max = 100;

console.log(Math.floor( min+Math.random()*(max-min)));

// bir personelin maaşı -----------------------------
// ** Brüt maaş:3700 tl
// ** Brüt mesai:10.3 tl
// ağustos toplam 42 , brüt maaş?
// %25 kesinti olursa,brüt maaş?

var brutMaas = 3700
var mesaiUcreti = 10.3
var mesaiSuresi = 42

var toplamBrutMaas = brutMaas + (mesaiSuresi*mesaiUcreti);
var toplamNetMaas = toplamBrutMaas - (toplamBrutMaas*0,25);


console.log(toplamBrutMaas);
console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2));











