# Vue CLI
   1. Pengertian Vue CLI 
       * Vue ClI adala perkakas standar untuk memudahkan penyetelan / pembuatan aplikasi vue baru
       * dan webpack adalah sebuah module bundler , digunakan untuk menggabungkan seluruh modul project aplikasi berupa file Javascript,HTML,CSS , gambar dan lain lain menjadi satu file (tipe yang sama)
       * cara kerja Vue CLI
             * pasang vue cli dengan menggunakan perintah $npm install -g @vue/cli/vue
             * untuk memastikan vue cli sudah terpasang dengan baik jalankan vue --version jika vue terpasang dengan baik maka akan memunculkan versi vue yang di installation
             * inisiasi aplikasi untuk membuat sebuah aplikasi baru jalankan 
                 * vue create <nama Aplikasi> perintah ini digunakan untuk membuat folder baru yang berisikan file-file vue
                 * vue create perintah ini digunakan untuk memasang vue pada folder yang kita gunakan saat ini

    2. Vue Component Tunggal 

        * apa itu vue komponen tunggal : komponent file tunggal memungkinkan kita membangun serluruh komponen(struktur,gaya,dan fungsi) dalam satu file .Dan .sebagian besar editor kode menyediakan penyorotan sintaks dan linting komponen file tunggal memiliki ekstensi .vue
        * cara kerja komponen file tunggal terdapat 3 tag utama pada komponen file tunggal yaitu < template > < script >  dan < style >
            * Template sama seperti html body memuat me-render HTML Tag pada umumnya
            * script Memuat Syntak Javascript juga menerima atribut lang yang biasanya untuk penggunaan typescript
            * style memuat sintaks CSS juga dapat menerima atribut lama yang biasanya untuk penggunaaan CSS preprosesor seperti Stylus. SCSS Atribut Tambahan Lain nya adalah scoped. yang bearti CSS hanya akan diterapkan di komponen ini saja.

    3. Vue Struktur Folder

        * Default atau bawaan
            * pada dasarnya direktori yang kita pilih dengan setelan bawaan akan tampak seperti Berikut
                * ![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/12_Vue_CLI/screenshots/screenshots%20penjelasan%20vue%20cli.JPG)
                * assest di direktori ini kita akan menyimpan semua file assets seperti halnya menyimpan font , ikon , gambar , style ,dll
                * components di derektori ini, kita akan menyimpan semua file komponen file tunggal vue 
                * Router di dalam direktori ini kita dapat menyimpan semua file yang terkait dengan vue router Vue-router adalah library untuk mengatur routing alamat aplikasi Vue
                * Store ini adalah direktori penyimpanan vuex tempat kita dapat menyimpan semua file terkait vuex vuex adala library untuk mengatur penyimpanan state berbasis global pada aplikasi vue
                * view isinya mirip direktori components , yaitu komponen file tunggal namun yang membedakan adalah pada direktori ini digunakan sebagai halaman dimana file dalam direktori ini langsung berhubungan dengan router sedangkan file di direktori components berhubungan langsung dengan file di direktori views atau sesama folder components
                * Test Direktori ini berada di luar direktori src, karena direktori ini tidak berhubungan langsung dengan file yang dibutuhkan untuk proses pengembangan berisi berkas untuk melakukan unit testing komponen atau fungsi yang ada di dalam direktori src 


# Taks
       
 1. pada taks kali ini kami menggunakan vue komponen tunggal dan tugas nya seperti gambar dibawah ini k


![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/12_Vue_CLI/screenshots/taks%20vue%20cli.JPG)

2. jawaban 

    * source code
        ![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/12_Vue_CLI/screenshots/jawaban%201%20vue%20cli.JPG)

    * hasil
    *  menginputkan list 
    
      ![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/12_Vue_CLI/screenshots/source%20code%20vue%20cli.JPG)

    * menampilkan tulisan hebat bila list telah mencapai 4

    ![screenshots Jawaban no 1](https://github.com/pardi123/VUE_M-SUPARDI/blob/main/12_Vue_CLI/screenshots/jawaban%20vue%20cli%202.JPG)