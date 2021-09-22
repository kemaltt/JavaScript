// // Sayı Tahmin oyunu 1-10arası rast gele sayı üretilen birsayıyı
//  yaklaşık buldurmaya çalışalım 
//  ** puanlama yapalım 
//  **kullanıcıkaçdefada bulabileceğini belirtsin

var hak,can;
var tahmin;
var sayac = 0
var sayı = Math.floor((Math.random() * 10) + 1);  // 1ile 10 arası rast gele sayı üretme.
can = Number(prompt('kaç kerede bileceksiniz?'));
hak = can;
console.log(sayı);

while (hak > 0
) {

    hak--;
    sayac++

    tahmin = Number(prompt('bir sayı giriniz'));

    if (sayı == tahmin) {
        console.log(`Tebrikler ${sayac} defada bildiniz`);
        console.log(`puan : ${100-(100/can)*(sayac-1)}`);
        break;

    } else if (sayı > tahmin) {

        console.log('daha büyük sayı giriniz');
    }

    else {
        console.log('daha küçük bir sayı giriniz');
    }

    if (hak == 0) {

        console.log('hakkınız bitti');

    }

}




