// Demo

var sentence = " Template Literals or template strings is the ability Have multi-line strings with ";
var url=  "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";


// karakter sayısı
console.log(sentence.length);

// kaçkelimeden oluşuyor

console.log(sentence.trim().split(' ').length);

// küçük harfe çevirme

console.log(sentence.toLowerCase());

console.log(sentence.toLocaleUpperCase());

// cümlenin başındaki ve sonundaki boşlukları silme

console.log(sentence.trim());

// cümledeki '-' işaretini çıkın

console.log(sentence.replace('-',''));

// url içindeki //http kısmını çıkın



console.log(url.slice(7));

var str='http://';

console.log(url.substring(str.length));

// url hangi protocolu kullanmaktadır

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url ' .com ' ifadesini içeriyormu

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLowerCase().replace(/ /g,'-').replace(/ı/g,'i')
.replace(/ü/g,'u')


)







