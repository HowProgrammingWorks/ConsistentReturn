'use strict';

const f = ({ a, b }, callback) => {
  if (a < 0) {
    callback(0);
    return;
  }
  if (b > 9) {
    callback(100);
    return;
  }
  if (a === b) {
    callback(-1);
    return;
  }
  callback(b - a);
};

f({ a: 5, b: 7 }, (res) => {
  console.log(res);
  if (res === 1) return res;
});
