
import { Discography } from "./cDiscography";
import { Artist } from "./cArtist";
import { iSong } from "./iSong";

enum Genre {
  Pop = "Pop",
  Rock = "Rock",
  Reggaeton = "Reggaeton",
  Trap = "Trap",
  Salsa = "Salsa",
  Bachata = "Bachata",
  Merengue = "Merengue",
}

export class MusicLibrary {
  private artistsList: Artist[] = [];

  /**
   * Adds an artist to the library.
   * @param artist - The artist to add.
   * @throws Error if the artist already exists.
   */
  addArtist(artist: Artist): void {
    if (this.artistsList.find((a) => a.name === artist.name)) {
      throw new Error("Artist already exists");
    }
    this.artistsList.push(artist);
  }

  /**
   * Searches for an artist by name.
   * @param name - The name of the artist.
   * @returns The artist if found, otherwise undefined.
   */
  searchArtistByName(name: string): Artist | undefined {
    if (!this.artistsList.some((artist) => artist.name === name)) {
      return undefined;
    }
    const artist = this.artistsList.find((artist) => artist.name === name);
    if (!artist) {
      return undefined;
    }
    const formatedArtist = artist.discography.flatMap((discography) => {
      return discography.songs.map((song) => {
        return {
          Artist: artist.name,
          MonthlyListeners: artist.mensualListeners,
          Discography: discography.name,
          Year: discography.year,
          Song: song.name,
          Duration: song.duration,
          Genre: song.genre,
          Single: song.single ? "Yes" : "No",
          Reproductions: song.reproductions,
        };
      });
    });
    console.table(formatedArtist);
    return artist;
  }

  /**
   * Searches for artists by genre.
   * @param genre - The genre to search for.
   * @returns A list of artists matching the genre, or undefined if none found.
   */
  searchArtistByGenre(genre: Genre): Artist[] | undefined {
    if (
      !this.artistsList.some((artist) =>
        artist.discography.some((discography) =>
          discography.songs.some((song) => song.genre === genre),
        ),
      )
    ) {
      return undefined;
    }
    const artists = this.artistsList.filter((artist) =>
      artist.discography.some((discography) =>
        discography.songs.some((song) => song.genre === genre),
      ),
    );
    const formatedArtists = artists.flatMap((artist) => {
      return artist.discography.flatMap((discography) => {
        return discography.songs.map((song) => {
          return {
            Artist: artist.name,
            MonthlyListeners: artist.mensualListeners,
            Discography: discography.name,
            Year: discography.year,
            Song: song.name,
            Duration: song.duration,
            Genre: song.genre,
            Single: song.single ? "Yes" : "No",
            Reproductions: song.reproductions,
          };
        });
      });
    });
    console.table(formatedArtists);
    return artists;
  }

  /**
   * Displays all stored data in a formatted table.
   */
  displayInTable(): void {
    const formattedTable = this.artistsList.flatMap((artist) =>
      artist.discography.flatMap((discography) =>
        discography.songs.map((song) => ({
          Artist: artist.name,
          MonthlyListeners: artist.mensualListeners,
          Discography: discography.name,
          Year: discography.year,
          Song: song.name,
          Duration: song.duration,
          Genre: song.genre,
          Single: song.single ? "Yes" : "No",
          Reproductions: song.reproductions,
        })),
      ),
    );
    console.table(formattedTable);
  }

  /**
   * Gets the number of songs in a discography.
   * @param disco - The discography.
   * @returns The number of songs.
   */
  numberSongsPerDiscography(disco: Discography<iSong>): number {
    return disco.songs.length;
  }

  /**
   * Gets the total duration of a discography.
   * @param disco - The discography.
   * @returns The total duration.
   */
  lengthDiscography(disco: Discography<iSong>): number {
    return disco.songs.reduce((acc, song) => acc + song.duration, 0);
  }

  /**
   * Gets the total number of reproductions of a discography.
   * @param disco - The discography.
   * @returns The total reproductions.
   */
  totalReproductions(disco: Discography<iSong>): number {
    return disco.songs.reduce((acc, song) => acc + song.reproductions, 0);
  }
}