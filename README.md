# Modulus11

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A check digit algorithm, Modulus11(weight2-7).

## Demo
[Modulus11.js test](https://code4fukui.github.io/Modulus11/)

## Features
- Supports common use cases for Modulus11 check digits, such as:
  - [National Local Government Codes](https://www.soumu.go.jp/main_content/000137948.pdf)
  - [My Number (Individual Number)](https://www.j-lis.go.jp/data/open/cnt/3/1282/1/H2707_qa.pdf)
  - [Resident Record Codes](https://www.soumu.go.jp/main_content/000766944.pdf)
  - [Driver's Licenses](https://www.npa.go.jp/laws/notification/koutuu/menkyo/menkyo19810910.pdf)

## Usage
### in JavaScript (ES module)

```js
import { Modulus11 } from "https://code4fukui.github.io/Modulus11/Modulus11.js";

console.log(Modulus11.calc(18207)); // 9
console.log(Modulus11.check(182079)); // true
console.log(Modulus11.addCheckDigit(18207)); // 182079
```

### Test
```
deno test
```

## Related
- [Verhoeff.js](https://github.com/code4fukui/Verhoeff)
- [Luhn.js](https://github.com/code4fukui/Luhn)

## License
[CC0 1.0 Universal](LICENSE)