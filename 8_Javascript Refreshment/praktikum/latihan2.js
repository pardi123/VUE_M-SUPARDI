//3.Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, 
//Sita tersimpan dalam variabel bernama b, dan Ayutersimpan dalam variable bernama c. 
//  Jawab:
console.log();

console.log('jawaban no 3')
const foo = ['budi', 'sita', 'ayu'];
let a, b, c;
[a, b, c] = foo;
console.log("ini a = " + a);
console.log("ini b = " + b);
console.log("ini c = " + c);
console.log();


//4.Kalian memiliki sebuah variabel berikut (let bdays = ['10-17','05-19','20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) 
//sehingga output yang akan keluar dalam console menjadi [ '10/17', '05/19', '20/19' ]
console.log("jawaban nomor 4");
let bdays = ['10-17', '05-19', '20-19'];
bdays = ['10/17', '05/19', '20/19'];
console.log(bdays);
//5.Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dengan dua. 
//Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]
console.log();

let value = [1, 2, 3, 4, 5, 6];
const hasil = value.map(x => x * 2);
console.log("jawaban nomor 5")
console.log(hasil);
//6.Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) 
//Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [ 2, 3, 5, 12 ]
console.log();

let arr = [1.5, 2.56, 5.1, 12.33];
const hasil5 = arr.map(x => Math.round(x));
console.log("jawaban nomor 6");
console.log(hasil5);