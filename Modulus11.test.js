import * as t from "https://deno.land/std/testing/asserts.ts";
import { Modulus11 } from "./Modulus11.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

Deno.test("calc", () => {
  t.assertEquals(Modulus11.calc(18207), 9);
  t.assertEquals(Modulus11.calc("18207"), 9);
  t.assertEquals(Modulus11.calc(16201), 9);
});
Deno.test("check", () => {
  t.assert(Modulus11.check(182079));
  t.assert(Modulus11.check("182079"));
  t.assert(Modulus11.check("182061"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Modulus11.addCheckDigit(18207), 182079);
  t.assertEquals(Modulus11.addCheckDigit("18207"), "182079");
});
Deno.test("algorithm", () => {
  t.assertEquals(Modulus11.calc("1"), 9);
  t.assertEquals(Modulus11.calc("11"), 6);
  t.assertEquals(Modulus11.calc("111"), 2);
  t.assertEquals(Modulus11.calc("1111"), 8);
  t.assertEquals(Modulus11.calc("00001111"), 8);
  t.assertEquals(Modulus11.calc("11110"), 4);
});
Deno.test("all pref", async () => {
  const url = "https://code4fukui.github.io/address-japan/data/pref.csv";
  const data = CSV.toJSON(await CSV.fetch(url));
  data.forEach(d => t.assert(Modulus11.check(d.全国地方公共団体コード)));
});
Deno.test("all city", async () => {
  const url = "https://code4fukui.github.io/address-japan/data/city.csv";
  const data = CSV.toJSON(await CSV.fetch(url));
  data.forEach(d => t.assert(Modulus11.check(d.全国地方公共団体コード)));
});
