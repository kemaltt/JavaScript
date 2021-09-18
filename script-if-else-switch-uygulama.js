
// 20.04.2017 de trafiğeçıkan aracın servis bakım süreleri aşağıda verilmiş.
//  bu bilgileregöre servis uyarısı versin

// 1. bakım :1 yıl--2. bakım : 2 yıl---3. bakım:3 yıl

let trafigeCık = new Date('04/20/2020');

trafigeCık.setHours(0,0,0,0);
let trafikMs = Date.now() - trafigeCık.getTime();

let trafikGun =Math.floor( trafikMs/(1000*60*60*24));


if (trafikGun<=365) {
    
    console.log('1.servis gününüz geldi');

} else if (trafikGun>365 && trafikGun<=365*2) {
    console.log('2.servis gününüz geldi');
} else if (trafikGun>365*2 && trafikGun<=365*3) {
    console.log('3.servis gününüz geldi')

} else {
    console.log('bilinmeyen değer');
    
}{
    
}{
    
}
<<<<<<< HEAD
console.log(trafikGun);

//------------------------------------------------------------------------------------------------

var result = prompt("who's there ?");

if (result == 'cancel') {

    console.log('cancelled');

} else if (result == 'Admin') {

    console.log('Welcome Admin');


    var key = prompt('enter your password');


    if (key == 'cancel') {

        console.log('cancelled');

    } else if (key == '2135') {

        console.log('Welcome Admin');

    } else {

        console.log('wrong password');

    }

    {

    }
