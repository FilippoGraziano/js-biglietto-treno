const age = prompt (`Quanti anni hai?`);
const km = prompt (`Quanti km devi percorrere?`);

const priceForKm = 0.21;
const totalPrice = km * priceForKm;

if (age < 18) {
    console.log (`€${totalPrice - (20 / 100 * totalPrice)}`);
    document.getElementById (`prezzo-biglietti`).innerHTML=`€${totalPrice - (20 / 100 * totalPrice)}`;
}
else if (age > 65) {
    console.log (`€${totalPrice - (40 / 100 * totalPrice)}`)
    document.getElementById (`prezzo-biglietti`).innerHTML=`€${totalPrice - (40 / 100 * totalPrice)}`;
}
else {
    console.log (`€${totalPrice}`)
    document.getElementById (`prezzo-biglietti`).innerHTML=`€${totalPrice}`
};