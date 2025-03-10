import { iSong } from "./iSong";
import { iDiscography } from "./iDiscography";

export class Discography<T extends iSong> implements iDiscography {
  constructor(
    public name: string,
    public year: number,
    public songs: T[]
  ) {}
  addSong(song: T): void {
    this.songs.push(song);
  }
}