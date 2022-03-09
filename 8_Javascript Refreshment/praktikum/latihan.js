//1.Tulis ulang kode di bawah, dan simpan dengan format javascript. 
//a. Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
//b.Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console. 
//c.Lakukan pemanggilan untuk function perkenalan pada baris 31.
//d.Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah

var a = 5;
let b = "Kampus Merdeka ";
const nama = "budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function Perkenalan() {
    let asal = "Indonesia";

    return console.log("Perkenalkan nama saya " + nama +
        " Nomor Urut " +
        a +
        "Sekarang sedang Mengikuti " +
        b +
        "Berasal dari " +
        asal);
}
if (terdaftar === true) {
    console.log(nama + "Terdaftar sebagai kegiatan kampus merdeka");
}

//2. jawab pertanyaan  dibawah sesuai program  dengan materi yang dijelaskan 
//  a.jelaskan kenapa  baris 21,22,23 tidak dapat tampil
//      jawab:karena isi dari variable terdaftar adalah flase sedangkan baris 21 harus isi dari variable terdaftar adalah true
//  b.jelaskan kenapa deklarasi pada baris 26 menyebabkan error 
//      jawab karena variable const nilainya tidak dapat diubah apabila telah di deklarasikan 
//  c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.    
//      jawab:tidak dapat karena variable asal berada dalam fungsi perkenalan dan hanya dapat digunakan apabila kita memanggil fungsi tersebut


a = b;
const budi = lengkap_arr.filter(budi2 => budi2 === "budi");
console.log("Array = " + budi);
console.log("a adalah = " + a);
console.log("b adalah  = " + b);
Perkenalan();