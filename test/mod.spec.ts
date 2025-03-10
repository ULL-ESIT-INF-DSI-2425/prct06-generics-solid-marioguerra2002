import { describe, it, expect } from "vitest";
import { ArrayMethods } from "../src/modificacion/mod";


describe("ArrayMethods tests", () => {
  it("should be defined", () => {
    expect(ArrayMethods).toBeDefined();
  });
  it("length", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.length_()).toBe(5);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d"]);
    expect(arrayMethods2.length_()).toBe(4);
  });
  it ("append", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    const arrayMethods2 = new ArrayMethods([6,7,8,9,10]);
    expect(arrayMethods.append(arrayMethods2)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
  it("concatenate", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    const arrayMethods2 = new ArrayMethods([6,7,8,9,10]);
    const arrayMethods3 = new ArrayMethods([11,12,13,14,15]);
    expect(arrayMethods.concatenate(arrayMethods2, arrayMethods3)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
  it ("filter", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.filter((value) => value > 3)).toEqual([4,5]);
  });
  it("map", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.map((value) => value * 2)).toEqual([2,4,6,8,10]);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d", "e"]);
    expect(arrayMethods2.map((value) => value + "a")).toEqual(["aa", "ba", "ca", "da", "ea"]);
  })
});