import * as t from "https://deno.land/std/testing/asserts.ts";
import { Modulus11 } from "./Modulus11.js";

Deno.test("calc", () => {
  t.assertEquals(Modulus11.calc(18207), 9);
  t.assertEquals(Modulus11.calc("18207"), 9);
  t.assertEquals(Modulus11.calc(16201), 9);
});
Deno.test("check", () => {
  t.assert(Modulus11.check(182079));
  t.assert(Modulus11.check("182079"));
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
