class user {
    var id;
    var username;
    var password;

}
class userservice {
    user[] users = [];
    user();
    getalluser() {
        return users;
    }
    user getuserbyid(userid) {
        return users.filter(userid);
    }

}
// kode berikut ini dituliskan tanpa mengikuti kebiasaan - kebiasaan penulisan yang disarankan.
//berapa banyak kekurangan dalam penulisan kode tersebut
//tuliskan alasan dari tiap kekurangan tersebut

// ada 5 kekurangan pertama class user seharus nya user diawali dengan huruf besar
// class userservice seharus nya kata2 user tidak perlu lagi di ulang cukup service saja
//users seharusnya variable ini diubah menjadi service
// dan user id seharus nya variable ini hanya id saja

class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;

}
class getMobil extends kendaraan {
    void berjalan() {
        tambahkecepatan(10);
    }
    tambahkecepatan(var kecepatanbaru) {
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

//jawaban
class getKendaraan {
    var totalRoda = 0;
    var kecepatanPerJam = 0;
}
class getMobil extends getKendaraan {
    void Berjalan() {
        tambahKecepatan(10);
    }
    tambahKecepatan(var kecepatanBaru) {
        kecepatanPerJam = kecepatanPerJam + kecepatanBaru;
    }
}
void main() {
    mobilCepat = new mobil();
    for (i = 0; i < 3; i++) {
        mobilCepat.berjalan();
    }
    mobilLamban = new mobil();
    mobilLamban.berjalan();
}