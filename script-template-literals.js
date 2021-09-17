//Template Literals

const fullName = 'Sena Tütüncü';
const city ='Monheim';
const yearOfBirth = 2020;

let val;

val = 'my name is '+fullName+ ' I\'m '+(2021-yearOfBirth)+ ' years old '+ ' and I live in '+city;


val = `my name is ${fullName} I'm ${2021-yearOfBirth>=18? 'over 18':'under 18'} years old and I live in ${city}`;

// ternary operator ${2021-yearOfBirth>=18? 'over 18':'under 18'}

console.log(val);