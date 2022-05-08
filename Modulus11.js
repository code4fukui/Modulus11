const calc = (num) => {
  const s = num.toString();
  let sum = 0;
  let m = 2;
  for (let i = s.length - 1; i >= 0; i--) {
    const n = parseInt(s[i]);
    sum += m * n;
    m++;
    if (m == 8) {
      m = 2;
    }
  }
  const d = 11 - sum % 11;
  if (d == 11) {
    return 1;
  } else if (d == 10) {
    return 0;
  }
  return d;
};

const check = (num) => {
  const s = num.toString();
  return calc(s.substring(0, s.length - 1)) == s[s.length - 1];
};

const addCheckDigit = (num) => {
  if (typeof num == "string") {
    return num + calc(num);
  }
  return num * 10 + calc(num);
};

export const Modulus11 = { calc, check, addCheckDigit };
