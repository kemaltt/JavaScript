//  Loops
// For--------------------------------------------

for (let i=0;i<=10;i++) {
   
    if (i==4) {

        //console.log('en sevdiğim rakama: ' + i);
        continue;  // tekrar 4rakamanı yazmaz, 5 ten devam eder
        
    }

    if (i==7) {

    //console.log(`en sevmediğim rakam : 7`);
    break;  // 7 den sonrasını bırakır
        
    }



//console.log(i);
    
}

//  While loop---------------------------------------

// for (let i=0; i<10; i++) {

// console.log(i);

//}

// let i =0
// while (i<10) {
//     console.log(i);
//     i++;
// }

// do-,while loop-----------------------------------------------

// let i=0

// do {
//     console.log(i);
//     i++
// }while (i<10) 



// let sonuc =1;
// for (let i =10; i> 0; i--) {
//     console.log(i);
//    // sonuc+=i;  // 1 den 10 a kadar toplamlar
   
//           if (i%2==1) {  //  tek ve çift sayıları çarpar
//         sonuc*=i;
//     }
// }
//  console.log(sonuc);

// for (let i= 0;i<3;i++){

//     for (let j=0;j<3;j++){

//         console.log(`i:${i} j:${j}`);

//     }


// }


// Loops in Array & Objects

let cars =['Bmw','Mercedes','Toyata'];

let people= [
    {firsName : 'Orhan',lastName : 'Tütüncü'},
    {firsName : 'Sena',lastName : 'Tütüncü'},
    {firsName : 'Öznur',lastName : 'Tütüncü'}
];

//Arrays

// for (let i=0;i<cars.length; i++){

//     console.log(cars[i]); //  ekrena araçları yazdırır
// }

// Objects
for (let i=0;i<people.length;i++){

    console.log(people[i].firsName);

}
 
// for -in-----------------------------------------------------

//Arrays

// for (let i in cars){
//     console.log(i); // ekrana 0,1,2 yazar
//     console.log(`index :${i} value :${cars[i]}`);
// }

for (let i in people){

    console.log(`index :${i} value :${people[i].firsName}`);
    
}

// for each------------------------------------------------

// cars.forEach(function (item) {
//     console.log(item);
    
// })

people.forEach(function(item) {

    console.log(item.firsName);
    
})


//  map-----------------------------------------------------

let val=people.map(function (item) {
     
    return item.firsName + ' '+ item.lastName;
})

console.log(val);

//-------

let numbers =[1,5,6,8,10];

let num = numbers.map(function(n) {

    return n*n;
    
})

console.log(num);