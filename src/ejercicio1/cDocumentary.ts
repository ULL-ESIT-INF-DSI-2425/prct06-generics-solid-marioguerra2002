import { IDocumentary } from "./iDocumentary";

export class Documentary implements IDocumentary {
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public duration: number,
    public director: string
  ) {}
}