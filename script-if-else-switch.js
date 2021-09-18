<<<<<<< HEAD
//  If-else

const firstName = 'Sena';
const age = 19;
const isStudent = false;
const school = 'University';


if (firstName === 'Sena') {
    console.log('Merhaba Sena');
}

if (age === 19) {
    console.log('yaşınız 19');
}

if (isStudent) {
    console.log('Merhaba öğrenci');  // merhaba öğrenci yazmaz çünki false

} else {

    console.log('hallo');
}

//---------------------------------------------------------------------------------------------------

if (age >= 18) {

    if ((school == 'University') || (school == 'high school')) {   // uni yada lise olduğu için ehlyt alabilir

        console.log('ehliyet alabilirsiniz');   // okul üni olduğu için ehlieyet alabilir

    } else {

        console.log('eğitim durumunuz yetersiz');  // okul lise old için ehliyet alamaz

    }



} else {

    console.log('ehliyet alamazsınız');  // yazdırmaz çünki yaş 18 den büyük
}


//---------------------------------------------------------------------------


if (age > 0 && age < 12) {

    console.log(`${firstName} is a child`);   // 19 yaş old için ekrana yazmaz
} else if (age > 13 && age < 19) {

    console.log(`${firstName} is a teenager.`)

} else {

    console.log(`${firstName} is ${age} years old and is a adult.`);  // 12 den büyük old,ç,n yaşını yazar

}


// undefined  kontrolu yapma

let ıd = '12345'

if (typeof ıd !== 'undefined') {


    console.log('ıd: ' + ıd);
} else {

    console.log('no ıd');

}

// Switch statements-------------------------------------------------------------------

let category = 'bilgisayar';

switch (category) {
    case 'telefon':
        console.log('telefon kategorisi');   //kategori telefon old için tel ktgri yazar     

        break;

    case 'bilgisayar':

        console.log('bilgisayar kategorisi');


        break;

    default:

        console.log('yanlış kategori');
        break;
}


//_--------------------------------------------------------------------------

var day;


//console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 5:
        day = 'Cuma';
        break;

    case 0:
        day = 'Pazar';
        break;

    case 1:
        day = 'P.tesi';
        break;
    case 2:
        day = 'Salı';
        break;
    case 3:
        day = 'Çarşamba';
        break;
    case 4:
        day = 'Perşembe';
        break;
    case 6:
        day = 'Cumartesi';
        break;
    case 7:
        day = 'Pazar';
        break;

}


console.log(`Bugün günlerden ${day}`);


//--------------------------------------------------------

const Name = 'Öznur';
const yas = 5;

switch (true) {
    case yas >= 0 && yas <= 12:

        console.log(`${Name} is a child`);

        break;


    case yas > 13 && yas < 19:

        console.log(`${Name} is a teenager.`);

        break;

    default:

        console.log(`${Name} is ${yas} years old and is an adult.`)

}




=======
//  If-else

const firstName = 'Sena';
const age = 19;
const isStudent = false;
const school = 'University';


if (firstName === 'Sena') {
    console.log('Merhaba Sena');
}

if (age === 19) {
    console.log('yaşınız 19');
}

if (isStudent) {
    console.log('Merhaba öğrenci');  // merhaba öğrenci yazmaz çünki false

} else {

    console.log('hallo');
}

//---------------------------------------------------------------------------------------------------

if (age >= 18) {

    if ((school == 'University') || (school == 'high school')) {   // uni yada lise olduğu için ehlyt alabilir

        console.log('ehliyet alabilirsiniz');   // okul üni olduğu için ehlieyet alabilir

    } else {

        console.log('eğitim durumunuz yetersiz');  // okul lise old için ehliyet alamaz

    }



} else {

    console.log('ehliyet alamazsınız');  // yazdırmaz çünki yaş 18 den büyük
}


//---------------------------------------------------------------------------


if (age > 0 && age < 12) {

    console.log(`${firstName} is a child`);   // 19 yaş old için ekrana yazmaz
} else if (age > 13 && age < 19) {

    console.log(`${firstName} is a teenager.`)

} else {

    console.log(`${firstName} is ${age} years old and is a adult.`);  // 12 den büyük old,ç,n yaşını yazar

}


// undefined  kontrolu yapma

let ıd = '12345'

if (typeof ıd !== 'undefined') {


    console.log('ıd: ' + ıd);
} else {

    console.log('no ıd');

}

// Switch statements-------------------------------------------------------------------

let category = 'bilgisayar';

switch (category) {
    case 'telefon':
        console.log('telefon kategorisi');   //kategori telefon old için tel ktgri yazar     

        break;

    case 'bilgisayar':

        console.log('bilgisayar kategorisi');


        break;

    default:

        console.log('yanlış kategori');
        break;
}


//_--------------------------------------------------------------------------

var day;


//console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 5:
        day = 'Cuma';
        break;

    case 0:
        day = 'Pazar';
        break;

    case 1:
        day = 'P.tesi';
        break;
    case 2:
        day = 'Salı';
        break;
    case 3:
        day = 'Çarşamba';
        break;
    case 4:
        day = 'Perşembe';
        break;
    case 6:
        day = 'Cumartesi';
        break;
    case 7:
        day = 'Pazar';
        break;

}


console.log(`Bugün günlerden ${day}`);


//--------------------------------------------------------

const Name = 'Öznur';
const yas = 5;

switch (true) {
    case yas >= 0 && yas <= 12:

        console.log(`${Name} is a child`);

        break;


    case yas > 13 && yas < 19:

        console.log(`${Name} is a teenager.`);

        break;

    default:

        console.log(`${Name} is ${yas} years old and is an adult.`)

}




>>>>>>> c131bf314d68f4b4b8dacb83454385a69b3cd86f
