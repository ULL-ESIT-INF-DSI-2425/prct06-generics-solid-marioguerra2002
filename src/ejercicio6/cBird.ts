export class Bird {
  constructor(
    public name: string,
    public color: string,
    public weight: number,
  ) {}
  eat(): void {
    console.log(`${this.name} is eating`);
  }
}