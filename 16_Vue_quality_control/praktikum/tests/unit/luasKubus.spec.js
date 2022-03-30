import { luasKubus } from '@/utils';

describe('test utils luas kubus', () => {
    it("mencari luas kubus", () => {
        expect(luasKubus(0, 10, 6)).toBe(600);
    });
    it("jumlah persegi tidak sama dengan 6", () => {
        expect(luasKubus(600, 4, 10)).toBe("jumlah persegi harus 6 karena kubus terdiri dari 6 persegi")
    });
    it("mencari sisi kubus", () => {
        expect(luasKubus(600, 0, 6)).toBe(10)
    })
});