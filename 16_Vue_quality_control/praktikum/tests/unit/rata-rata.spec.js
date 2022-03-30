import { rata2 } from '@/utils';

describe('test utils function rata-rata', () => {
    it("rata-rata bilanga positif", () => {
        expect(rata2(2, 4, 6, 8, 10)).toBe(6)
    });
    it("rata-rata Bilangan Negatif", () => {
        expect(rata2(-2, -4, -6, -8, -10)).toBe(-6);
    });
    it("rata-rata bilangan numerik", () => {
        expect(rata2("1", "2", "3", "4", "5")).toBe(2469);
    });
});