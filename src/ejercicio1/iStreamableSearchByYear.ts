/**
 * Interface IStreamableSearchByYear
 */
export interface IStreamableSearchByYear<T> {
  searchByYear(year: number): T[];
}