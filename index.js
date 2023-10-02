/*

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Với phép chia lấy phần nguyên: eight(dividedBy(three())); 
=> 2 not 2.666666...

*/

function process(numOuter, calcu, numInner) {
  switch (calcu) {
    case '+':
      return numOuter + numInner;
    case '-':
      return numOuter - numInner;
    case '*':
      return numOuter * numInner;
    case '/':
      return parseInt(numOuter / numInner);
  }
}

function zero() {
  try {
    return process(0, arguments[0][0], arguments[0][1]);
  } catch {
    return 0;
  }
}
function one() {
  try {
    return process(1, arguments[0][0], arguments[0][1]);
  } catch {
    return 1;
  }
}
function two() {
  try {
    return process(2, arguments[0][0], arguments[0][1]);
  } catch {
    return 2;
  }
}
function three() {
  try {
    return process(3, arguments[0][0], arguments[0][1]);
  } catch {
    return 3;
  }
}
function four() {
  try {
    return process(4, arguments[0][0], arguments[0][1]);
  } catch {
    return 4;
  }
}
function five() {
  try {
    return process(5, arguments[0][0], arguments[0][1]);
  } catch {
    return 5;
  }
}
function six() {
  try {
    return process(6, arguments[0][0], arguments[0][1]);
  } catch {
    return 6;
  }
}
function seven() {
  try {
    return process(7, arguments[0][0], arguments[0][1]);
  } catch {
    return 7;
  }
}
function eight() {
  try {
    return process(8, arguments[0][0], arguments[0][1]);
  } catch {
    return 8;
  }
}
function nine() {
  try {
    return process(9, arguments[0][0], arguments[0][1]);
  } catch {
    return 9;
  }
}

function plus() {
  return { 0: '+', 1: arguments[0] };
}
function minus() {
  return { 0: '-', 1: arguments[0] };
}
function times() {
  return { 0: '*', 1: arguments[0] };
}
function dividedBy() {
  return { 0: '/', 1: arguments[0] };
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));
