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
    const arrayMethods3 = new ArrayMethods(["a", "b", "c", "d"]);
    const arrayMethods4 = new ArrayMethods(["a", "b", "c", "d"]);
    expect(arrayMethods3.append(arrayMethods4)).toEqual(["a", "b", "c", "d", "a", "b", "c", "d"]);


  });
  it("concatenate", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    const arrayMethods2 = new ArrayMethods([6,7,8,9,10]);
    const arrayMethods3 = new ArrayMethods([11,12,13,14,15]);
    expect(arrayMethods.concatenate(arrayMethods2, arrayMethods3)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    const arrayMethods4 = new ArrayMethods(["a", "b", "c", "d"]);
    const arrayMethods5 = new ArrayMethods(["e", "f", "g", "h"]);
    const arrayMethods6 = new ArrayMethods(["i", "j", "k", "l"]);
    expect(arrayMethods4.concatenate(arrayMethods5, arrayMethods6)).toEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]);
  });
  it ("filter", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.filter((value) => value > 3)).toEqual([4,5]);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d", "e"]);
    expect(arrayMethods2.filter((value) => value === "a")).toEqual(["a"]);
  });
  it("map", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.map((value) => value * 2)).toEqual([2,4,6,8,10]);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d", "e"]);
    expect(arrayMethods2.map((value) => value + "a")).toEqual(["aa", "ba", "ca", "da", "ea"]);
  })
  it("reduce", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.reduce((acc, value) => acc + value, 0)).toBe(15);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d", "e"]);
    expect(arrayMethods2.reduce((acc, value) => acc + value, "")).toBe("abcde");
  });
  it("reverse", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    expect(arrayMethods.reverse()).toEqual([5,4,3,2,1]);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d", "e"]);
    expect(arrayMethods2.reverse()).toEqual(["e", "d", "c", "b", "a"]);
  })
  it("forEach", () => {
    const arrayMethods = new ArrayMethods([1,2,3,4,5]);
    let result: number = 0;
    arrayMethods.forEach((value) => {
      result += value;
    });
    expect(result).toBe(15);
    const arrayMethods2 = new ArrayMethods(["a", "b", "c", "d", "e"]);
    let result2: string = "";
    arrayMethods2.forEach((value) => {
      result2 += value;
    });
    expect(result2).toBe("abcde");
    const arrayMethods3 = new ArrayMethods([true, false, true, false]);
    let result3: boolean = true;
    arrayMethods3.forEach((value) => {
      result3 = result3 && value;
    });
    expect(result3).toBe(false);
  });
});