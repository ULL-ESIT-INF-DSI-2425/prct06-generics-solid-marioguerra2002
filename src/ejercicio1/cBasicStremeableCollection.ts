import { IStreamable } from "./iStreamable";
import { IStreamableSearchByYear } from "./iStreamableSearchByYear";
import { IStreamableSearchByName } from "./iStreamableSearchByName";
import { IStreamableSearchByGenre } from "./iStreamableSearchByGenre";

export abstract class BasicStreamableCollection<T> implements IStreamable<T>, IStreamableSearchByYear<T>, IStreamableSearchByName<T>, IStreamableSearchByGenre<T> {

  constructor(public collection: T[]) {
    this.collection = collection;
  }
  abstract searchByYear(year: number): T[];
  abstract searchByName(name: string): T[];
  abstract searchByGenre(genre: string): T[];
  // son abstractos porque no se puede implementar en esta clase, ya que no se sabe como se va a implementar en las clases hijas
}