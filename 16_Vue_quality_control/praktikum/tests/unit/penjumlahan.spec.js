import { penjumlahan } from '@/utils';

describe('test Fungsional dari utils ', () => {
    it('lakukan penjumlahan Bilangan Positif dan negatif', () => {
        expect(penjumlahan(2, 4)).toBe(6);

    });
    it('lakukan penjumlahan Bilangan  negatif', () => {
        expect(penjumlahan(-2, 4)).toBe(2);

    });
    it('lakukan penjumlahan dengan bilangan numerik', () => {
        expect(penjumlahan("2", "1")).toBe("21");
    });

});