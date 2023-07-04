'use strict';

const inconsistent = (a, b) => {
  if (a < 0) return false;
  if (b > 9) return b;
  if (a === b) return -1;
  const result = a + b;
  if (typeof result === 'number') return result;
};

const y1 = inconsistent(-1, 7);
const y2 = inconsistent(5, 20);
const y3 = inconsistent(5, 5);
const y4 = inconsistent(5, 7);
const y5 = inconsistent(5, '7');
console.log({ y1, y2, y3, y4, y5 });
