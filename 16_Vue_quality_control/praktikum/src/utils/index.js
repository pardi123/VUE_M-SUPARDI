export const penjumlahan = (variabelSatu, varibelDua) => {
    return variabelSatu + varibelDua;
}
export const pengurangan = (variabelSatu, varibelDua) => {
    return variabelSatu - varibelDua;
}
export const pembagian = (variableSatu, variableDua) => {
    return variableSatu / variableDua;
}
export const perkalian = (variableSatu, variableDua) => {
    return variableSatu * variableDua;
}
export const rata2 = (variableSatu, variableDua, variableTiga, variableEmpat, variableLima) => {
    return (variableSatu + variableDua + variableTiga + variableEmpat + variableLima) / 5;
}
export const sisaBagi = (variableSatu, variableDua) => {
    return variableSatu % variableDua;
}
export const luasPersegi = (sisi, sisi2) => {
    if (sisi != sisi2) {
        return "untuk melakukan pencarian luas persegi memerlukan sisi yang sama";
    } else if ((sisi, sisi2) <= 0) {
        return "sisi tidak boleh negative"
    } else {
        return sisi * sisi2;
    }
}
export const luasLingkaran = (jariJari, konstantaPi) => {
    if (konstantaPi === 3.14) {
        if (jariJari <= 0) {
            return "jari-jari tidak boleh negativ";
        } else {
            return konstantaPi * jariJari ** 2;

        }
    } else {
        return "Konstanta Pi harus 3.14 atau 22/7";
    }
}
export const volumeKubus = (sisi1, sisi2, sisi3) => {

    if ((sisi1, sisi3) === sisi2) {
        if ((sisi1, sisi2, sisi3) <= 0) {
            return "Sisi tidak boleh negative";
        } else {
            return sisi1 * sisi2 * sisi3

        }
    } else {
        return "sisi kubus harus sama"

    }

}
export const luasKubus = (volume, sisi, jumlahPersegi) => {
    if (jumlahPersegi === 6) {
        if (sisi > 0) {
            return volume = jumlahPersegi * (sisi ** 2);


        } else {
            return sisi = Math.sqrt(volume / jumlahPersegi);

        }
    } else {
        return "jumlah persegi harus 6 karena kubus terdiri dari 6 persegi"
    }
};