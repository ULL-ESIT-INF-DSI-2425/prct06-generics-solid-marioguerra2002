import { describe, expect, it} from "vitest";
import { BasicStreamableCollection } from "../src/ejercicio1/cBasicStremeableCollection";
import { Movie } from "../src/ejercicio1/cMovie";
import { Serie } from "../src/ejercicio1/cSerie";
import { Documentary } from "../src/ejercicio1/cDocumentary";
import { MovieCollection } from "../src/ejercicio1/cMovieCollection";

describe("BasicStreamableCollection tests", () => {
  it("should be defined", () => {
    expect(BasicStreamableCollection).toBeDefined();
  });
  it("should be a class", () => {
    expect(typeof BasicStreamableCollection).toBe("function");
  });
  // prueba del constructor
  
});

describe ("Movie tests", () => {
  it("should be defined", () => {
    expect(Movie).toBeDefined();
  });
  it("should be a class", () => {
    expect(typeof Movie).toBe("function");
  });
  it ("create a new Movie", () => {
    const movie = new Movie("The Godfather", 1972, "Drama", 175, "Francis Ford Coppola");
    expect(movie.title).toBe("The Godfather");
    expect(movie.year).toBe(1972);
    expect(movie.genre).toBe("Drama");
    expect(movie.duration).toBe(175);
    expect(movie.director).toBe("Francis Ford Coppola");
  });
  
});

describe ("Serie tests", () => {
  it("should be defined", () => {
    expect(Serie).toBeDefined();
  });
  it("should be a class", () => {
    expect(typeof Serie).toBe("function");
  });
  it("create a new Serie", () => {
    const serie = new Serie("Breaking Bad", "Drama",2008, 5, 62);
    expect(serie.title).toBe("Breaking Bad");
    expect(serie.genre).toBe("Drama");
    expect(serie.year).toBe(2008);
    expect(serie.seasons).toBe(5);
    expect(serie.episodes).toBe(62);
  });
});

describe ("Documentary tests", () => { 
  it("should be defined", () => {
    expect(Documentary).toBeDefined();
  });
  it("should be a class", () => {
    expect(typeof Documentary).toBe("function");
  });
  it ("create a new Documentary", () => {
    const documentary = new Documentary("The Social Dilemma", 2020, "Documentary", 94, "Jeff Orlowski");
    expect(documentary.title).toBe("The Social Dilemma");
    expect(documentary.year).toBe(2020);
    expect(documentary.genre).toBe("Documentary");
    expect(documentary.duration).toBe(94);
    expect(documentary.director).toBe("Jeff Orlowski");
  });
});

describe ("MovieCollection tests", () => {
  const movie1 = new Movie("The Godfather", 1972, "Drama", 175, "Francis Ford Coppola");
  const movie2 = new Movie("The Shawshank Redemption", 1994, "Drama", 142, "Frank Darabont");
  const movie3 = new Movie("The Dark Knight", 2008, "Action", 152, "Christopher Nolan");

  const movieCollection = new MovieCollection([movie1, movie2, movie3]);
  it("should be defined", () => {
    expect(MovieCollection).toBeDefined();
  });
  it("should be a class", () => {
    expect(typeof MovieCollection).toBe("function");
  });
  it("create a new MovieCollection", () => {
    expect(movieCollection.getMovies()).toEqual([movie1, movie2, movie3]);
  });
  it ("searchByYear", () => {
    expect(movieCollection.searchByYear(2008)).toEqual([movie3]);
  });
  it ("searchByName", () => {
    expect(movieCollection.searchByName("The Shawshank Redemption")).toEqual([movie2]);
  });
  it ("searchByGenre", () => {
    expect(movieCollection.searchByGenre("Drama")).toEqual([movie1, movie2]);
  });
  it ("insert", () => {
    const movie4 = new Movie("Inception", 2010, "Action", 148, "Christopher Nolan");
    movieCollection.insert(movie4);
    expect(movieCollection.getMovies()).toEqual([movie1, movie2, movie3, movie4]);
  });
});