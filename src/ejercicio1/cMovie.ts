import { IMovie } from "./iMovie";


export class Movie implements IMovie {
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public duration: number,
    public director: string

  ) {}
  
}
