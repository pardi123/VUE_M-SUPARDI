import { luasLingkaran } from '@/utils';

describe('test utils luas lingkaran', () => {
    it('jari Jari adalah bilangan positiv', () => {
        expect(luasLingkaran(5, 3.14)).toBe(78.5);
    });
    it('jari jari adalah bilangan negative', () => {
        expect(luasLingkaran(-5, 3.14)).toBe("jari-jari tidak boleh negativ");
    });
    it('konstanta pi tidak 3.14', () => {
        expect(luasLingkaran(5, 3.12)).toBe("Konstanta Pi harus 3.14 atau 22/7")
    });
})