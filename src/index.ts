/**
 * Get odd number
 * @param num
 * @returns boolean
 */
export const odd = (num: number) => num % 2;
/**
 * Get even number
 * @param num
 * @return boolean
 */
export const even = (num: number) => num % 2 == 0;
/**
 * random number
 * @param max
 * @return number
 */
export const random = (max: number) => Math.random() * Math.floor(max);
