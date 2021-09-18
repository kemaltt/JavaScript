<<<<<<< HEAD
//Template Literals

const fullName = 'Sena Tütüncü';
const city ='Monheim';
const yearOfBirth = 2020;

let val;

val = 'my name is '+fullName+ ' I\'m '+(2021-yearOfBirth)+ ' years old '+ ' and I live in '+city;


val = `my name is ${fullName} I'm ${2021-yearOfBirth>=18? 'over 18':'under 18'} years old and I live in ${city}`;

// ternary operator ${2021-yearOfBirth>=18? 'over 18':'under 18'}

=======
//Template Literals

const fullName = 'Sena Tütüncü';
const city ='Monheim';
const yearOfBirth = 2020;

let val;

val = 'my name is '+fullName+ ' I\'m '+(2021-yearOfBirth)+ ' years old '+ ' and I live in '+city;


val = `my name is ${fullName} I'm ${2021-yearOfBirth>=18? 'over 18':'under 18'} years old and I live in ${city}`;

// ternary operator ${2021-yearOfBirth>=18? 'over 18':'under 18'}

>>>>>>> c131bf314d68f4b4b8dacb83454385a69b3cd86f
console.log(val);