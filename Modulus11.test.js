import * as t from "https://deno.land/std/testing/asserts.ts";
import { Modulus11 } from "./Modulus11.js";

Deno.test("calc", () => {
  t.assertEquals(Modulus11.calc(20151119), 4);
  t.assertEquals(Modulus11.calc("20151119"), 4);
  t.assertEquals(Modulus11.calc(16201), 9);
});
/*
Deno.test("check", () => {
  t.assert(Modulus11.check(5724));
  t.assert(Modulus11.check("5724"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Modulus11.addCheckDigit(572), 5724);
  t.assertEquals(Modulus11.addCheckDigit("572"), "5724");
  t.assertEquals(Modulus11.addCheckDigit("000572"), "0005724");
});
Deno.test("algorithm", () => {
  t.assertEquals(Modulus11.calc("1"), 3);
  t.assertEquals(Modulus11.calc("11"), 7);
  t.assertEquals(Modulus11.calc("111"), 9);
  t.assertEquals(Modulus11.calc("1111"), 5);
  t.assertEquals(Modulus11.calc("00001111"), 5);
  t.assertEquals(Modulus11.calc("11110"), 3);
});
*/
