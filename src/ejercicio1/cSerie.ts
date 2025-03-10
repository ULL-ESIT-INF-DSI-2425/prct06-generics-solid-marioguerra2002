import { ISerie } from './iSerie';

export class Serie implements ISerie {
  constructor(
    public title: string,
    public genre: string,
    public year: number,
    public seasons: number,
    public episodes: number
  ) {}
}
