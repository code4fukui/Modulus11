# Modulus11

チェックディジットアルゴリズム、Modulus11（ウェイト2-7）。

## デモ
[Modulus11.js test](https://code4fukui.github.io/Modulus11/)

## 機能
- 以下のような、Modulus11チェックディジットの一般的なユースケースに対応しています。
  - [全国地方公共団体コード](https://www.soumu.go.jp/main_content/000137948.pdf)
  - [マイナンバー（個人番号）](https://www.j-lis.go.jp/data/open/cnt/3/1282/1/H2707_qa.pdf)
  - [住民票コード](https://www.soumu.go.jp/main_content/000766944.pdf)
  - [運転免許証](https://www.npa.go.jp/laws/notification/koutuu/menkyo/menkyo19810910.pdf)

## 使い方
### JavaScript (ESモジュール) での使用

```js
import { Modulus11 } from "https://code4fukui.github.io/Modulus11/Modulus11.js";

console.log(Modulus11.calc(18207)); // 9
console.log(Modulus11.check(182079)); // true
console.log(Modulus11.addCheckDigit(18207)); // 182079
```

### テスト
```
deno test
```

## 関連
- [Verhoeff.js](https://github.com/code4fukui/Verhoeff)
- [Luhn.js](https://github.com/code4fukui/Luhn)

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
