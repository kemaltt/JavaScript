// Object Literals

let val;

let person = {

    firstName: 'Orhan',
    lastName: 'Tütüncü',
    age: 8,
    hobbies: ['musıc', 'game'],
    address: {

        city: 'Kayseri',
        country: 'Türkiye'
    },

    getBirthYear : function () {

        return 2021- this.age;

    }
}

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.country;
val = person.address['city'];
val = person.getBirthYear();





// console.log(val);
// console.log(typeof person);

//--------------------------------------------------------------


let people =[ 
    
    {  firstName: 'Orhan', lastName: 'Tütüncü',},
    {  firstName: 'Sena', lastName: 'Tütüncü',},
    {  firstName: 'Oznur', lastName: 'Tütüncü',},

]

val = people[2];    // Oznur bilgilerini yazdırır
val = people[1].firstName;  // Sena yazacak

for (let i = 0; i < people.length; i++) {
    
   // console.log(people[i].firstName);             // 0,1,2sıra ile ekrana yazacak
    
}
// console.log(val);
// console.log(typeof people);



// uygulama-----------------------------------------------------------


// Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
// Araç Bilgileri:

//    id : bmw116d_1234
//    model : 116d
//    yil : 2015
//    renk : white
//    servis kayitlari : 
//          id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
//             servis detayı:
//             id : 1 işlem : yağ değişimi ücret : 300
//             id : 2 işlem : filtre değişimi ücret: 300
//             id : 3 işlem : fren hidroliği ücret: 300
         
//          id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
//             id : 1 işlem : yağ değişimi ücret : 350
//             id : 2 işlem : filtre değişimi : 350
//             id : 3 işlem : fren hidroliği : 300
//             id : 3 işlem : balata değişimi : 800 



var aracBilgileri = [

    {

        id : 'bmw116d_123',
        model : '116d',
        yil : 2015,
        renk : 'white',
        servisKayitlari :[
            {
                id : 'bmw116d_1234_1',
                tarih : '30.01.2016',
                km : '13000',
                toplamUcret : 900,
                detay : [
                    { id : 'bmw116d_1234_1_1',aciklama : 'yağ değişimi',ücret :300},
                    { id : 'bmw116d_1234_1_2',aciklama : 'filtre değişimi',ücret :300},
                    { id : 'bmw116d_1234_1_3',aciklama : 'fren hidroliği değişimi',ücret :300}
                        ]
            },
    
            
                {
                    id : 'bmw116d_1234_2',
                    tarih : '10.01.2017',
                    km : '128000',
                    toplamUcret : 1800,
                    detay : [
                        {id : 'bmw116d_1234_2_1',aciklama : 'yağ değişimi',ücret :350},
                        {id : 'bmw116d_1234_2_2',aciklama : 'filtre değişimi',ücret :350},
                        {id : 'bmw116d_1234_3_3',aciklama : 'fren hidroliği değişimi', ücret :300},
                        {id : 'bmw116d_1234_4_3',aciklama : 'balata değişimi',ücret :800}
                            ]
                 },
        ]
    },
    {

        id : 'bmw118i_123',
        model : '1bmw118i',
        yil : 2015,
        renk : 'white',
        servisKayitlari :[
            {
                id : 'bbmw118i_1234_1',
                tarih : '30.01.2016',
                km : '13000',
                toplamUcret : 900,
                detay : [
                    { id : 'bmw118i_1234_1_1',aciklama : 'yağ değişimi',ücret :300},
                    { id : 'bmw118i_1234_1_2',aciklama : 'filtre değişimi',ücret :300},
                    { id : 'bbmw118i_1234_1_3',aciklama : 'fren hidroliği değişimi',ücret :300}
                        ]
            },
    
            
                {
                    id : 'bmw118i_1234_2',
                    tarih : '10.01.2017',
                    km : '128000',
                    toplamUcret : 1800,
                    detay : [
                        {id : 'bmw118i_1234_2_1',aciklama : 'yağ değişimi',ücret :350},
                        {id : 'bmw118i_1234_2_2',aciklama : 'filtre değişimi',ücret :350},
                        {id : 'bmw118i_1234_3_3',aciklama : 'fren hidroliği değişimi', ücret :300},
                        {id : 'bmw118i_1234_4_3',aciklama : 'balata değişimi',ücret :800}
                            ]
                 },
        ]
    },
    {

        id : 'bmw320d_123',
        model : 'bmw320d',
        yil : 2015,
        renk : 'white',
        servisKayitlari :[
            {
                id : 'bbmw320d_1234_1',
                tarih : '30.01.2016',
                km : '13000',
                toplamUcret : 900,
                detay : [
                    { id : 'bmw320d_1234_1_1',aciklama : 'yağ değişimi',ücret :300},
                    { id : 'bmw320d_1234_1_2',aciklama : 'filtre değişimi',ücret :300},
                    { id : 'bmw320d_1234_1_3',aciklama : 'fren hidroliği değişimi',ücret :300}
                        ]
            },
    
            
                {
                    id : 'bbmw320d_1234_2',
                    tarih : '10.01.2017',
                    km : '128000',
                    toplamUcret : 1800,
                    detay : [
                        {id : 'bmw320d_1234_2_1',aciklama : 'yağ değişimi',ücret :350},
                        {id : 'bmw320d_1234_2_2',aciklama : 'filtre değişimi',ücret :350},
                        {id : 'bmw320d_1234_3_3',aciklama : 'fren hidroliği değişimi', ücret :300},
                        {id : 'bmw320d_1234_4_3',aciklama : 'balata değişimi',ücret :800}
                            ]
                 },
        ]
    }

];

console.log(aracBilgileri[2]);
console.log(aracBilgileri[1].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[0]);
console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[0].detay);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0]);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ücret);



// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);


