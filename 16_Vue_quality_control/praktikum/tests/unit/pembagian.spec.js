import { pembagian } from '@/utils';

describe('test fungsional utls function pembagian', () => {
    it('Pembagian bilangan positif', () => {
        expect(pembagian(10, 2)).toBe(5);
    });
    it(' pembagian bilangan positif dan bilangan negatif', () => {
        expect(pembagian(10, -2)).toBe(-5);
        expect(pembagian(-10, 2)).toBe(-5);

    });
    it('pembagian bilangan negatif', () => {
        expect(pembagian(-10, -2)).toBe(5);
    })
})