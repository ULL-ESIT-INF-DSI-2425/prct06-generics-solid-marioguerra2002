import { iArtist } from "./iArtist";
import { Discography } from "./cDiscography";
import { iSong } from "./iSong";

export class Artist implements iArtist {
  /**
   * Creates an instance of Artist.
   * @param name - The name of the artist.
   * @param mensualListeners - The number of monthly listeners.
   * @param discography - The list of discographies.
   */
  constructor(
    public name: string,
    public mensualListeners: number,
    public discography: Discography<iSong>[], 
    // se cambia de iDiscography a Discography<iSong> porque no sabemos el tipo de canciones que tendrá la disc
    // ya que puede ser de tipo Single o Album
  ) {}

  /**
   * Adds a discography to the artist.
   * @param discography - The discography to add.
   * @throws Error if the discography already exists.
   */
  addDiscography(discography: Discography<iSong>): void {
    if (this.discography.find((d) => d.name === discography.name)) {
      throw new Error("Discography already exists");
    }
    this.discography.push(discography);
  }
}