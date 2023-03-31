// // soal 1 loop
let n = 100;
for(i=1; i<=n; i++){
    console.log(`User ke ${i}`);
}

// // soal 2 loop
let nilaiAwal;
let nilaiAkhir;
for(nilaiAwal = 0; nilaiAwal<=10; nilaiAwal++){
    console.log(`Nilai awal = ${nilaiAwal}`)
    nilaiAkhir = nilaiAwal+2;
    console.log(`Nilai akhir = ${nilaiAkhir}`);
}

// // soal 3 loop
let angka;
let hasil;
for(angka=0; angka<=20; angka++){
    hasil = angka % 2;
    if(hasil === 1){
        console.log(`${angka} adalah ganjil`);
    } else {
        console.log(`${angka} adalah genap`);
    }
}

// soal 4 loop
let hitung = 0;
let ulang = true;
    while (ulang) {
    const confirmation = confirm("Apakah Anda mau mengulang?");
        if (confirmation) {
            hitung++;
        } else {
            ulang = false;
            alert(`Perulangan sudah dilakukan sebanyak ${hitung} kali`);
        }
    }

// soal 5 loop
let repeat = true;
    while (repeat) {
    const soal = prompt("Sebutkan kepanjangan dari nama IB!", "");
        if (soal !== "Impact byte") {
            repeat;
        } else {
            repeat = false;
            alert("Selamat jawaban kamu benar!");
        }
    }