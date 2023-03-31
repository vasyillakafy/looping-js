# Tugas Looping
## No.1
Melakukan perulangan untuk menampilkan "User ke 1" sampai "User ke 100"

Pertama inisialisasikan variabel n dengan angka 100, karena banyaknya user maksimal adalah 100.

Lalu melakukan perulangan menggunakan for loop, dengan menginisialisasi nilai awal pada variabel i dengan angka 1, 
kondisi perulangan dimana i <= n. Menggunakan tanda <=, karena angka 100nya juga akan ditampilkan. Lalu incremental step.

Statementnya yaitu tampilkan kedalam halaman HTML menggunakan document.writeln().

## No.2
Melakukan perulangan untuk melakukan penambahan nilai sebanyak 10 kali.
 
Pertama deklarasikan variabel nilaiAwal dan nilaiAkhir.

Lalu lakukan perulangan menggunakan for loop dengan menginisialisasikan nilaiAwal dengan angka 0. Lalu berikan kondisi
untuk melakukan perulangan, dimana nilaiAwal <= 10 (Seperti soal, penambahan sebanyak 10 kali). Dan incremental step.

Di dalam statement terdapat console.log() untuk menampilkan nilaiAwal. Setelah menampilkan nilaiAwal, tambahkan nilaiAwal
dengan angka 2, lalu simpan ke dalam variabel nilaiAkhir. Selanjutnya tampilkan nilaiAkhir menggunakan console.log().

Maka output yang dihasilkan yaitu iterasi nilaiAwal dan diikuti dengan nilaiAkhir.

## No.3
Melakukan perulangan untuk melakukan pengecekan angka ganjil dan genap dalam rentang 0-20.

Pertama deklarasikan variabel angka dan hasil.

Lakukan perulangan menggunakan for loop dengan menginisialisasikan nilaiAwal dengan angka 0. Lalu berikan kondisi dimana
angka <= 20 (Seperti perintah di soal, iterasi 0 sampai 20). Dan incremental step.

Di dalam statement, dilakukan operasi aritmatika menggunakan modulus. Dimana setiap angka yang dilooping akan dimodulus dengan 2.
Lalu hasil dari operasi itu disimpan ke dalam variabel hasil.

Selanjutnya terdapat percabangan yang akan mengecek apakah variabel hasil === 1. Jika true, sistem akan menampilkan console.log(`angka adalah ganjil`);.
Jika kondisi tersebut false, sistem akan menampilkan console.log(`angka adalah genap`);.

## No.4
Menampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();

Pertama menginisialisasi variabel hitung dengan angka 0, dan variabel ulang dengan true.

Lakukan perulangan menggunakan while do. Didalam perulangan tersebut terdapat confirm("Apakah Anda mau mengulang?"); 
yang akan ditampilkan pada setiap iterasi. 

Jika user tetap melakukan perulangan, setiap perulangan tersebut akan dihitung dan disimpan ke dalam variabel hitung. 

Jika user klik batal pada pop up confirm, maka akan menampilkan alert(`Perulangan sudah dilakukan sebanyak ${hitung} kali`);

## No.5
Melakukan looping untuk membuat kuis.

Pertama inisialisasi variabel ulang dengan true. 
Lakukan perulangan menggunakan while do. Didalam perulangan tersebut terdapat variabel soal yang berisi prompt("Sebutkan kepanjangan dari nama IB!", ""); 
Dan sistem akan mengambil inputan yang diberi oleh user. 

Di dalam statement terdapat percabangan untuk mengecek inputan dari user.
Jika variabel soal atau inputan user tidak sama dengan "Impact byte", maka akan dilakukan perulangan lagi dengan menampilkan prompt. Perulangan akan
tetap terjadi sampai user memberikan inputan yang benar.
Jika variabel soal sama dengan "Impact byte", maka sistem akan menampilkan alert("Selamat jawaban kamu benar!");
