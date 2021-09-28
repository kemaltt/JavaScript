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

let val;

val= document.getElementById('header');
val= document.getElementById('header').id;
val= document.getElementById('header').className;

val= document.getElementById('header');

//val =val.id;
//val =val.className;

val.style.fontSize='45px';
val.style.color='red';
val.style.frontWeight='bold';
//val.style.display='none';

 document.getElementById('header').innerText='My To Do App';

 document.getElementById('header').innerText='<b>My To Do App </b>';

 document.getElementById('header').innerHTML='<b>My To Do App </b>';



//console.log(val);

// document.querySelector()----------------------------------------------------------



   console.log(document.querySelector('.card-header'));
   console.log(document.querySelector('div')); // ilk bulduğu div iyazdırır
   console.log(document.querySelector('li').style.color='red'); // ilk bulduğu listeyi kırmızı yapar
   console.log(document.querySelector('li:nth-child(2)').style.color='yellow'); // 2.satırı listeyi sarı yapar
  
   console.log(document.querySelector('li:nth-child(3)').textContent='Task item'); // 3.satıra  task item ile değiştirir yapar


// textContent ve innerText ,çerik değiştirmek için

document.querySelector('li').className='list-group-item list-group-item-primary';  // class name değiştirme


document.querySelector('li').classList.add('active'); // class name ye ekleme















