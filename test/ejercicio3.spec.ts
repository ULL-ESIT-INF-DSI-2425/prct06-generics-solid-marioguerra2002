import { describe, expect, test } from "vitest";
import {FileManager} from "../src/ejercicio3/cFileManager";

describe("FileManager", () => {
  test("read", () => {
    const fileManager = new FileManager("test/test.txt");
    expect(fileManager.read()).toBe("Hello World!");
  });

  test("write", () => {
    const fileManager = new FileManager("test/test.txt");
    fileManager.write("Hello World!");
    expect(fileManager.read()).toBe("Hello World!");
  });
});