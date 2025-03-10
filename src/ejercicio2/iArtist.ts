import { iDiscography } from './iDiscography';

export interface iArtist {
  name: string;
  mensualListeners: number;
  discography: iDiscography[];
}

