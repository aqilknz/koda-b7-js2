let totalPembelanjaan = 600000;

if (totalPembelanjaan < 500000) {
  diskon = 0;
} else if (totalPembelanjaan >= 500000 && totalPembelanjaan <= 1000000) {
  diskon = totalPembelanjaan * 0.05;
} else {
  diskon = totalPembelanjaan * 0.1;
}

const totalAkhir = totalPembelanjaan - diskon;

console.log('Total Pembelanjaan', totalPembelanjaan);
console.log('Mendapat diskon sebesar', diskon);
console.log('Total Akhir adalah ', totalAkhir);
