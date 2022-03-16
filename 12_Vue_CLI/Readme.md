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
                * 
