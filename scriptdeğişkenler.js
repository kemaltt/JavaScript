

// Müşteri Adı
//         soyadı
//         tc kimlik
//         sipariş toplamı
//         cinsiyet
//         adres bilgisi
//         hobiler
var costomerName = 'Sena'
var costomerLastName = 'Tütüncü'

var fullName = 'Sena Tütüncü'
var musteriId = '12345678910'

var gender = false; // erkek true ,kadın false

var address = {
    city :'Kayseri',
    district :'Talas',
    body : 'Kamber Mah.No:101'
}

// array

var hobbies =['Sinema','Kitap','Spor'];

// Sipariş Toplamı

var Order1=Number('100');
var Order2=Number('150');

var totalOrder= Order1 + Order2;

console.log(totalOrder);

// Sipariş Toplamı

var order3 = Number('100.2');
var order4 = Number('150.5');


var totalOrder = order3+order4;

console.log(totalOrder);

// Sipariş Toplamı tam sayı olarak



var order5 = Number('100.2'); // var order5=parseInt('100.2')
var order6 = Number('150.5');

var totalOrder= parseInt(order5+order6);

console.log(totalOrder);


// Doğum yılına göre yaş hesapla

const yearOfBirht = 1986; // const değiştirilemezolmasını istiyorsan let yada var yerine yazılabilir

//yearOfBirht=1987

console.log(new Date().getFullYear()-yearOfBirht);

// String ifadesinin karekter sayısı

var course= 'Modern Javascript Kursu'

console.log(course.length);




