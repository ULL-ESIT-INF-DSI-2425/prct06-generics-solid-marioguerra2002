import { iSong } from "./iSong";

export class Single implements iSong {
  constructor(
    public name: string,
    public duration: number,
    public genre: string,
    public single: boolean,
    public reproductions: number,
  ) {}
  getSongType(): string {
    return this.single ? "Single" : "Album";
  }
}