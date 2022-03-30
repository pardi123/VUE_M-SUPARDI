import { perkalian } from '@/utils';

describe('test utils function perkalian', () => {
    it('perkalian bilangan positive', () => {
        expect(perkalian(11, 11)).toBe(121);
    })
    it('perkalian bilangan positif dan bilangan negative', () => {
        expect(perkalian(-10, 11)).toBe(-110);
        expect(perkalian(10, -11)).toBe(-110);
    });
    it('perkalian bilangan negative', () => {
        expect(perkalian(-25, -5)).toBe(125);
    });
});