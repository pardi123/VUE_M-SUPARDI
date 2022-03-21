# Komponent Vue

   1. Module export import

    * apa itu javascript module 

            modul bisa berisi kelas atau pustaka fungsi untuk tujuan tertentu.modul hanya sebuah file.satu kode skrip adalah satu modul
    * perbedaan Module Regular dan Regular script

            Modul bisa memuat satu sama lain dan menggunakan pengarah khusus export dan import untuk fungsi pertukaran memanggil fungsi dari satu modul ke modul lain nya contoh CJS(import semua isi),ESM(import yang dibutuhkan saja)

    * Export

        Digunakan untuk menyediakan fungsi object, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import dan ada 2 tipe export yaitu

            -Named exports adalah export nol atau per modul
            -Default exports adalah export  satu permodul

    * import 

        import digunakan untuk mengambil variable obyek atau fungsi yang disediakan moduk lain,ada 4 tipe import yaitu

            - importing defaults (import target)
            - import multiple exports (import {target})
            - rename multiple exports (import {target as})
            - import defaults + multple (import targetDefault, {target as})

   2.  Komponent yang dapat digunakan kembali

        * apa itu komponent Vue yang dapat digunakan kembali

            sebuah komponent file tunggal vue yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda dan kelebihan nya adalah lebih rapi,lebih mudah dirawat, lebih berkualitas
    
    3. paradigma Fungsi pembantu

        * apa itu paradigma pembantu 

            sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda

# taks

pada taks kali ini kami membuat aplikasi todo list dengan menggunakan komponent vue dan list yang kami buat bisa di edit dan di hapus

1. source code list todos

![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/11_Vue_Fundamental/screenshots/tugas%20vue%20fundamental.JPG)   

2. disini saya menambahkan 2 list todos 

![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/13_Komponent%20Vue/screenshots/tugas%20komponen%20vue%20hasil%20list.JPG)

3. dan disini saya mengedit list kedua dan menghasil kan list seperti digambar

![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/13_Komponent%20Vue/screenshots/tugas%20komponen%20vue%20hasil%20edit.JPG)

4. dan list kedua saya hapus dan menghasilkan list seperti

![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/13_Komponent%20Vue/screenshots/tugas%20komponen%20vue%20hasil%20hapus.JPG)
