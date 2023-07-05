'use strict';

const consistent = (a, b) => {
  if (a < 0) throw new Error('Expected positive "a"');
  if (b > 9) return b;
  if (a === b) return -1;
  const result = a + b;
  if (typeof result === 'number') return result;
  throw new Error('Result is not number');
};

try {
  const y1 = consistent(-1, 7);
  console.log({ y1 });
} catch (error) {
  console.error(error.message);
}

try {
  const y2 = consistent(5, 20);
  console.log({ y2 });
} catch (error) {
  console.error(error.message);
}

try {
  const y3 = consistent(5, 5);
  console.log({ y3 });
} catch (error) {
  console.error(error.message);
}

try {
  const y4 = consistent(5, 7);
  console.log({ y4 });
} catch (error) {
  console.error(error.message);
}

try {
  const y5 = consistent(5, '7');
  console.log({ y5 });
} catch (error) {
  console.error(error.message);
}
