# Modulus11

全国地方公共団体コード、個人番号（マイナンバー）、住民票コード、運転免許証などで使用される、Modulus11(weight2-7)チェックディジット アルゴリズムを提供する JavaScript ライブラリです。

## デモ
[Modulus11.js test](https://code4fukui.github.io/Modulus11/)

## 機能
- チェックディジットの計算
- チェックディジットの検証
- チェックディジットの追加

## 使い方

```js
import { Modulus11 } from "https://code4fukui.github.io/Modulus11/Modulus11.js";

console.log(Modulus11.calc(18207)); // 9
console.log(Modulus11.check(182079)); // true
console.log(Modulus11.addCheckDigit(18207)); // 182079
```

## テスト
```
deno test
```

## ライセンス
CC0 1.0 Universal