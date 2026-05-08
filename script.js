const age = prompt(`Quanti anni hai?`);
const km = prompt(`Quanti km devi percorrere?`);

const priceForKm = 0.21;
const importo = parseInt(km) * priceForKm;
const totalPrice = importo.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'EUR',
});

if (age < 18) {
    const totalImport = importo - (20 / 100 * importo)
    const totalPrice = totalImport.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'EUR',
    });
    console.log(`${totalPrice}`);
    document.getElementById(`prezzo-biglietti`).innerHTML = `${totalPrice}`;
}
else if (age > 65) {
    const totalImport = importo - (40 / 100 * importo)
    const totalPrice = totalImport.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'EUR',
    });
    console.log(`${totalPrice}`);
    document.getElementById(`prezzo-biglietti`).innerHTML = `${totalPrice}`;
}
else {
    console.log(`${totalPrice}`)
    document.getElementById(`prezzo-biglietti`).innerHTML = `${totalPrice}`
};