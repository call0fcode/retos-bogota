import { countWords } from './reto-3';

describe('Fácil', () => {
    it('debe contar palabras simples, en minúscula', () => {
        expect(countWords('one two two')).toEqual({ one: 1, two: 2 });
    });
});

describe('Medio', () => {
    it('debe contar palabras ignorando puntuación y mayúsculas', () => {
        const input = "It's nice, it's good!";
        expect(countWords(input)).toEqual({ its: 2, nice: 1, good: 1 });
    });
});