var ad= prompt("adınızı giriniz :");
var ogrno= prompt("öğrenci no :");
var cinsiyet= prompt("cinsiyet :");
var ders= prompt("ders adı :");
var not1= prompt("not1");
var not2= prompt("not2");
var ortalama=(Number(not1)+Number(not2))/2;




console.log(ogrno+ " numaralı "+ ad +"("+cinsiyet+")" + " isimli öğrecinin "+ ders + " dersinden aldığı ortalama "+ ortalama);