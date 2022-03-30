import { pengurangan } from '@/utils';

describe('test fungsional dari utls', () => {
    it('Lakukan Pengurangan Bilangan Positif', () => {
        expect(pengurangan(10, 8)).toBe(2);
    });
    it('lakukan pengurangan bilangan negative', () => {
        expect(pengurangan(-10, 8)).toBe(-18)

    });
    it('lakukan pengurangan bilangan positf dan negatif', () => {
        expect(pengurangan(10, -8)).toBe(18)

    });
});