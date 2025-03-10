import { Movie } from "./cMovie";
import { BasicStreamableCollection } from "./cBasicStremeableCollection";

export class MovieCollection extends BasicStreamableCollection<Movie> {
  constructor(public collection: Movie[]) {
    super(collection);
  }
  searchByYear(year: number): Movie[] {
    return this.collection.filter((movie) => movie.year === year);
  }
  searchByName(name: string): Movie[] {
    return this.collection.filter((movie) => movie.title === name);
  }
  searchByGenre(genre: string): Movie[] {
    return this.collection.filter((movie) => movie.genre === genre);
  }
  insert(movie: Movie): void {
    this.collection.push(movie);
  }
  getMovies(): Movie[] {
    return this.collection;
  }
}