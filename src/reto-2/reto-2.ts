/**
 * Reto 2 - Tests rotos 💥
 * 
 * En este ejercicio se parte de unos tests que están
 * rotos. Se deben corregir las pruebas teniendo en cuenta
 * la implementación dada y anotar por qué estaba fallando.
 * 
 * El ejercicio consta de varios niveles de dificultad.
 * ¡Completa tantos como puedas! 🚀
 * 
 * NOTA:
 * - La función no se toca, ¡solo las pruebas!
 */

export function validateDateFormat(dateStr: string): boolean {
    const parts = dateStr.split(/[\/\-]/);
    if (parts.length !== 3) return false;
    const [dayStr, monthStr, yearStr] = parts;
    const day = Number(dayStr);
    const month = Number(monthStr);
    const year = Number(yearStr);
  
    if (!/^\d{2}$/.test(dayStr) || !/^\d{2}$/.test(monthStr) || !/^\d{4}$/.test(yearStr)) {
      return false;
    }
  
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }
  