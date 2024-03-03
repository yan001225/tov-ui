export function test() {
  console.log('test')
}

/**
 * Returns a random integer between `a` (inclusive) and `b` (exclusive).
 *
 * @param a - the minimum integer
 * @param b - the maximum integer
 * @returns a random integer between `a` (inclusive) and `b` (exclusive)
 */
export function mathRandomInt(a: number, b: number): number {
  if (a > b) {
    const c = a
    a = b
    b = c
  }
  return Math.floor(Math.random() * (b - a + 1) + a)
}
