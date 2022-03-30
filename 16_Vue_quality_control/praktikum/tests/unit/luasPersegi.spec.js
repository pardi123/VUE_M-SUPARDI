import { luasPersegi } from '@/utils';

describe('test utils luasPersegi', () => {
    it("kedua variable sisi sama", () => {
        expect(luasPersegi(4, 4)).toBe(16);
    });
    it("kedua variable sisi tidak sama", () => {
        expect(luasPersegi(4, 3)).toBe("untuk melakukan pencarian luas persegi memerlukan sisi yang sama")
    });
    it("kedua Variable sisi negatif", () => {
        expect(luasPersegi(-4, -4)).toBe("sisi tidak boleh negative")
    })
});