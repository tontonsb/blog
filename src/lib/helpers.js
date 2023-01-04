/**
 * @param {number} min
 * @param {number} max
 * @returns  number
 */
export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
