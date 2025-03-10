import { iSong } from './iSong';
export interface iDiscography {
  name: string;
  year: number;
  songs: iSong[];
}