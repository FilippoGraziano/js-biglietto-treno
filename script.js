const age = prompt(`Quanti anni hai?`);
const km = prompt(`Quanti km devi percorrere?`);

const priceForKm = 0.21;

let importo = parseInt(km) * priceForKm;
let totalPrice = 0

//r calcolo sconto
if (age < 18) {
    importo = importo - (20 / 100 * importo)
}
else if (age > 65) {
    importo = importo - (40 / 100 * importo)
};

totalPrice = importo;

//r   € value
totalPrice = importo.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'EUR',
});

//r display in console and html
console.log(totalPrice);
document.getElementById(`prezzo-biglietti`).innerHTML = `${totalPrice}`;