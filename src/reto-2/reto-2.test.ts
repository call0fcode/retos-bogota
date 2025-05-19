import { validateDateFormat } from './reto-2';

// ¿Por qué falla esta prueba?

describe('Fácil', () => {
    it('debe retornar true para una fecha válida', () => {
        expect(validateDateFormat("31/04/2021")).toBe(true);
    });
});

// ¿Por qué falla esta prueba?

describe.skip('Medio', () => {
    it('debe retornar true para una fecha válida', () => {
        expect(validateDateFormat("01/2/2021")).toBe(true);
    });
});

// ¿Por qué falla esta prueba?

describe.skip('Difícil', () => {
    it('debe validar correctamente una fecha de año bisiesto', () => {
        const result = validateDateFormat("29/02/2100");

        expect(typeof result).toBe(Boolean);
        expect(result).toBeTruthy();
    });
});
