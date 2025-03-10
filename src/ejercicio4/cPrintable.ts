import { iPrintable } from "./iPrintable";
import { iScaner } from "./iScaner";

export class Printer implements iPrintable{
  print(): void {
    console.log('Printing...');
  }
}

export class Scaner implements iScaner{
  scan(): void {
    console.log('Scanning...');
  }
}

export class PrinterScaner implements iPrintable, iScaner{
  print(): void {
    console.log('Printing...');
  }
  scan(): void {
    console.log('Scanning...');
  }
}