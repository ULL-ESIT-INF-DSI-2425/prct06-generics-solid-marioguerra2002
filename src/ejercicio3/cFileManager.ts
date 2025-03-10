import * as fs from 'fs'; // Importamos el módulo fs
import { iFileManager } from './iFileManager'; // Importamos la interfaz IFileManager

export class FileManager implements iFileManager {
  constructor(
    private path: string // Definimos el atributo path de la clase FileManager
  ) {}
  read(): string {
    return fs.readFileSync(this.path, 'utf-8'); // Leemos el archivo y devolvemos su contenido
  }
  write(data: string): void {
    fs.writeFileSync(this.path, data, 'utf-8'); // Escribimos en el archivo el contenido pasado por parámetro
  }
}