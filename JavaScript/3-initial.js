'use strict';

const f = ({ a, b }, callback) => {
  if (a < 0) return callback(0);
  if (b > 9) return callback(100);
  if (a === b) return callback(-1);
  callback(b - a);
};

f({ a: 5, b: 7 }, (res) => {
  console.log(res);
  if (res === 1) return res;
});
