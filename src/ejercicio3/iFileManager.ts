
export interface iFileManager {
  read(): string;
  write(data: string): void;
}