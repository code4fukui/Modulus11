# Modulus11.js

A checksums, Modulus11(weight2-7) Algorithm in JavaScript (ES module)

- [全国地方公共団体コード](https://www.soumu.go.jp/main_content/000137948.pdf)
- [個人番号（マイナンバー）](https://www.j-lis.go.jp/data/open/cnt/3/1282/1/H2707_qa.pdf)
- [住民票コード](https://www.soumu.go.jp/main_content/000766944.pdf)
- [運転免許証](https://www.npa.go.jp/laws/notification/koutuu/menkyo/menkyo19810910.pdf)

## how to use

```js
import { Modulus11 } from "https://code4fukui.github.io/Modulus11.js/Modulus11.js";

console.log(Modulus11.calc(18207)); // 9
console.log(Modulus11.check(182079)); // true
console.log(Modulus11.addCheckDigit(18207)); // 182079
```


## test

```
deno test
```

## shortcut

```js
import { Modulus11 } from "https://js.sabae.cc/Modulus11.js";
```

## sample app

[Modulus11.js test](https://code4fukui.github.io/Modulus11.js/)

## related

- [Verhoeff.js](https://github.com/code4fukui/Verhoeff.js)
- [Luhn.js](https://github.com/code4fukui/Luhn.js)
