/**
 * Interface IStreamableSearchByName that contains the method searchByName
 */
export interface IStreamableSearchByName<T> {
  searchByName(name: string): T[];
}