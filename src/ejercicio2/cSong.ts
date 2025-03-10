import { iSong } from "./iSong";

export class Song implements iSong {
  /**
   * Creates an instance of Song.
   * @param name - The name of the song.
   * @param duration - The duration of the song in minutes.
   * @param genre - The genre of the song.
   * @param single - Whether the song is a single.
   * @param reproductions - The number of reproductions.
   */
  constructor(
    public name: string,
    public duration: number,
    public genre: string,
    public single: boolean,
    public reproductions: number,
  ) {}
}