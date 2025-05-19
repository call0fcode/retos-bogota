import { sumNumbers } from "./reto-1";

describe('Fácil', () => {
  it('debe sumar enteros positivos', () => {
    expect(sumNumbers([1, 2, 3])).toBe(6);
  });
});

describe.skip('Medio', () => {
  it('debe ignorar los números decimales', () => {
    expect(sumNumbers([1, 2.5, 3])).toBe(4);
  });
});

describe.skip('Difícil', () => {
  it('debe sumar también arrays anidados', () => {
    expect(sumNumbers([1, [2, 2.5]])).toBe(3);
  });
});