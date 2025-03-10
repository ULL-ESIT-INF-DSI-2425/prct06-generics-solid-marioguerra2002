/**
 * Interface IStreamableSearchByGenre that contains the method searchByGenre
 */
export interface IStreamableSearchByGenre<T> {
  searchByGenre(genre: string): T[];
}