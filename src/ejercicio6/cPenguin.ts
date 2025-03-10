import { iSwim } from "./iSwim";
import { Bird } from "./cBird";

export class Penguin extends Bird implements iSwim {
  constructor(
    public name: string,
    public color: string,
    public weight: number,
  ) {
    super(name, color, weight);
  }
  swim(): void {
    console.log(`${this.name} is swimming`);
  }
}