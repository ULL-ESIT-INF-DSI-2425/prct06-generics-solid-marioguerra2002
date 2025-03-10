import { iFly } from './iFly';
import { Bird } from './cBird';

export class Sparrow extends Bird implements iFly {
  constructor(
    public name: string,
    public color: string,
    public weight: number,
  ) {
    super(name, color, weight);
  }
  fly(): void {
    console.log(`${this.name} is flying`);
  }
}
