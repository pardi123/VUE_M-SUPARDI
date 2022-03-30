import { sisaBagi } from '@/utils';
describe('test utils function sisaBagi', () => {
    it('sisa bagi bilangan positif', () => {
        expect(sisaBagi(131, 10)).toBe(1);
    });
    it('sisa bagi bilangan negatif', () => {
        expect(sisaBagi(-10, -3)).toBe(-1)
    });
    it('sisa bagi bilangan numerik', () => {
        expect(sisaBagi("10", "4")).toBe(2);
    });
});