import { volumeKubus } from '@/utils';
describe('test utils luas kubus', () => {
    it("sisi kubus sama", () => {
        expect(volumeKubus(2, 2, 2)).toBe(8);
    });
    it("sisi kubus tidak sama", () => {
        expect(volumeKubus(2, 3, 4)).toBe("sisi kubus harus sama")
    });
    it("sisi bernilai negative", () => {
        expect(volumeKubus(-2, -2, -2)).toBe("Sisi tidak boleh negative")
    });
});