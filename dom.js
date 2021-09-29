// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[11];
// val = document.head;
// val = document.body;
// val = document.anchors; // html listesini
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute('src');

//console.log(val);
// Selecting Elements

//*** Single Elements

// document.getElementById('header');------------------------------------------------

// let val;

// val= document.getElementById('header');
// val= document.getElementById('header').id;
// val= document.getElementById('header').className;

// val= document.getElementById('header');

// //val =val.id;
// //val =val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.frontWeight='bold';
// //val.style.display='none';

//  document.getElementById('header').innerText='My To Do App';

//  document.getElementById('header').innerText='<b>My To Do App </b>';

//  document.getElementById('header').innerHTML='<b>My To Do App </b>';



// //console.log(val);

// // document.querySelector()----------------------------------------------------------



//    console.log(document.querySelector('.card-header'));
//    console.log(document.querySelector('div')); // ilk bulduğu div iyazdırır
//    console.log(document.querySelector('li').style.color='red'); // ilk bulduğu listeyi kırmızı yapar
//    console.log(document.querySelector('li:nth-child(2)').style.color='yellow'); // 2.satırı listeyi sarı yapar
  
//    console.log(document.querySelector('li:nth-child(3)').textContent='Task item'); // 3.satıra  task item ile değiştirir yapar


// // textContent ve innerText ,çerik değiştirmek için

// document.querySelector('li').className='list-group-item list-group-item-primary';  // class name değiştirme


// document.querySelector('li').classList.add('active'); // class name ye ekleme




//*** Multiple Elements-----------------------------------------------------

// class name------------------------------------------------------------
// document.getElementsClassName();------------

// let val;
// val = document.getElementsByClassName('list-group-item');
// // val = document.getElementsByClassName('list-group-item')[0];
// //val=val[0];
// // val = document.getElementsByClassName('list-group-item')[2];
// //val=val[2];

// val[1].style.color='blue'; // 2.class taki başlığı mavi yapar
// val[1].style.frontSize='25px';
// val[2].textContent='New item'; // 3.class taki başlık değişti

// for (let i = 0; i < val.length; i++) {
//    console.log(val[i].style.color='red');// tüm class isimlerini çevirir ve kırmızı yazar
//    console.log(val[i].textContent='New item');
   
// }

// console.log(val);


// document.getElementsClassName(); etiket isimleri--------------

// let val;

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');

// console.log(val);

//document.querySelectorAll();------------------------------Notelist

// let val;

// val = document.querySelectorAll('li');

// val.forEach(function (item,index) {

//    item.textContent=`${index} -hello`; // li içindekitümbaşlıkları hello yazdı
   
// });



// val=document.querySelectorAll('li:nth-child(even)');  //çift olanlarına ulaşır

// val.forEach(function (item) {

//    item.style.background='#ccc';
   
// });

// console.log(val);

// Traversing the Dom----------------------------------------------------

// let val;

// let list = document.querySelector('.list-group');

// val=list

// val = list.childNodes; //-----------Node List
// val = list.childNodes[0]; 
// val = list.childNodes[0].nodeName; 
// val = list.childNodes[0].nodeType;  // nodetype 1 =element,2=attribute,3=text
// val = list.childNodes[1].nodeType; 


// val = list.children; // ----------HTML collection
// val = list.children[0];
// val = list.children[2].textContent='new item';
// val = list.children[3].children;


// val = list.firstChild; //text
// val = list.firstElementChild; // ilk elemet(Lİ)
// val = list.lastChild;// text
// val = list.lastElementChild;// son element(li)

// val = list.childElementCount;// kaç elementi var

// val =list.parentNode;  // bir üst elementi
// val = list.parentElement;
// val = list.parentElement.parentElement; //üstelementin üst elementi

// val = list,

// val = list.children[0].nextSibling; // listin 1.elemanını 1.elemanına götürür
// val = list.children[0].nextElementSibling; // listin 1.elemanını 1.elementine götürür


// val = list.children[1].previousSibling; // listin 2.elemanını 1.elemanına götürür
// val = list.children[1].previousElementSibling; // listin 1.elemanını 1.elementine götürür

// console.log(val);

// for (let i = 0; i < list.childNodes.length; i++) {

//     if (list.childNodes[i].nodeType===3) {  // nodetype=1 olunca elementler,=3 olunca text

//       console.log(list.childNodes[i]);
       
//     }

      
// }

// for (let i = 0; i < list.childNodes.length; i++) {  // text lerdeyazar
//    console.log(list.childNodes[i]);
  
// }


//*** Element oluşturma --------------------------------------------------------------
   //   document.createElement('');

   const li = document.createElement('li');
   
   // add class

   li.className='list-group-item list-group-item-secondary';

   // attribute

   li.setAttribute('title','new item');
   li.setAttribute('data-id','5');

   // text node

   const text = document.createTextNode('To do new item');

   li.appendChild(text); // li nin alt elemanı olarak eklemek için appendChild


   const a = document.createElement('a');
   a.setAttribute('href','#');
   a.className='delete-item float-right';
   a.innerHTML='<i class="fas fa-times"></i>';

// append a to li 
   li.appendChild(a);

// append li to ul

document.querySelector('#task-list').appendChild(li);

   console.log(li);






