//email incluse//

let email = ['anna@gmail.com','fabio@gmail.com','matteo@gmail.com','pietro@gmail.com'];
console.log(email);

// Corpo centrale
let inserisciEmail = prompt ('Inserisci la tua mail');

if (email.includes(inserisciEmail)) {
    alert ('Email già presente al sistema, benvenuto')
    console.log('Email già presente al sistema, benvenuto')
}

else 
 {
    prompt ('Benvenuto, scrivi OK per continuare')
    console.log(email);


}
//

//Bonus//

let nuovoIscritto = prompt('Inserisci la tua email');
email.push (nuovoIscritto);
console.log('iscritti');


