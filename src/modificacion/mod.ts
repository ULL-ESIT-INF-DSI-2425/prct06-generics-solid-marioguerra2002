/**
 * Class that contains methods to modify an array or give information about it.
 */
export class ArrayMethods <T> {
  private array: T[];

  constructor(array: T[]) {
    this.array = array;
  }
  /**
   * Funtion that takes the array
   * @returns Array
   */
  getArray(): T[] {
    return this.array;
  }
  /**
   * Function that counts the number of elements in the array.
   * @returns the number of elements in the array.
   */
  length_(): number {
    let count = 0;
    for (const element of this.array) {
      if (element !== undefined) {
        count++;
      }
    }
    return count;
  }
  /**
   * Function that appends an array to the original array.
   * @param array2 - Array to append to the original array.
   * @returns Both arrays concatenated.
   */
  append(array2: ArrayMethods<T>): T[] {

    for (let i = 0; i < array2.length_(); i++) {
      let size = this.length_();
      this.array[size] = array2.getArray()[i];
    }
    return this.array;
  }
  /**
   * Function that concatenates multiple arrays.
   * @param lists - List of arrays to concatenate.
   * @returns All arrays concatenated.
   */
  concatenate(...lists: ArrayMethods<T>[]): T[] {
    let result: ArrayMethods<T> = new ArrayMethods([]);
    result.append(this);
    for (const list of lists) {
      for (let i = 0; i < list.length_(); i++) {
        let size = result.length_();
        result.getArray()[size] = list.getArray()[i];
      }
    }
    return result.getArray();
  }
  /**
   * Function that filters the array based on a condition.
   * @param callback - The condition to filter the array.
   * @returns Values that meet the condition.
   */
  filter(callback: (value: T) => boolean): T[] {
    let result: ArrayMethods<T> = new ArrayMethods([]);
    for (let i = 0; i < this.length_(); i++) {
      let size = result.length_();
      if (callback(this.array[i])) {
        result.getArray()[size] = this.array[i];
      }
    }
    return result.getArray();
  }
  /**
   * Function that changes the values of the array based on a condition.
   * @param callback - The condition to apply to the array.
   * @returns The array with the new values modified by the condition.
   */
  map(callback: (value: T) => T): T[] {
    let result: ArrayMethods<T> = new ArrayMethods([]);
    for (let i = 0; i < this.length_(); i++) {
      let result_size = result.length_();
      result.getArray()[result_size] = callback(this.array[i]);
    }
    return result.getArray();
  }
  /**
   * Function that reduces the array to a single value.
   * @param callback - The condition to reduce the array.
   * @param initialValue - The initial value to start the reduction.
   * @returns The array reduced to a single value.
   */
  reduce(callback: (acc: T, value: T) => T, initialValue: T): T {
    let result = initialValue;
    for (let i = 0; i < this.length_(); i++) {
      result = callback(result, this.array[i]);
    }
    return result;
  }
  /**
   * Function that reverses the array.
   * @returns The array reversed.
   */
  reverse(): T[] {
    let result: ArrayMethods<T> = new ArrayMethods([]);
    for (let i = this.length_() - 1; i >= 0; i-- ) {
      result.getArray()[result.length_()] = this.array[i];
    }
    return result.array;
  }
  /**
   * Function that applies a condition to the array without returning anything.
   * This function doesnt modify the array.
   * @param callback - The condition to apply to the array.
   */
  forEach(callback: (value: T) => void): void {
    for (let i = 0; i < this.length_(); i++) {
      callback(this.array[i]);
    }
  }
}