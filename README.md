[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/hGiCucuU)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=18564998)

[![CI tests](https://github.com/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-marioguerra2002/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-marioguerra2002/actions/workflows/ci.yml)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-marioguerra2002/badge.svg)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-marioguerra2002)


# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

## Objetivo
En esta práctica resolveremos una serie de ejercicios para profundizar en el uso de clases e interfaces genéricas en TypeScript, aplicando los principios SOLID de diseño orientado a objetos.

## Requisitos previos
1. Aceptar la asignación de GitHub Classroom asociada a esta práctica.
2. Obtener un informe de cubrimiento de código utilizando **Vitest** y **Coveralls**.
3. Seguir una estructura de proyecto organizada, colocando cada ejercicio en un directorio `ejercicio-n/` dentro de `src/`.
4. Aplicar desarrollo dirigido por pruebas (**TDD**), incluyendo pruebas unitarias para verificar el correcto funcionamiento del código y su robustez ante entradas no válidas.
5. Documentar el código con **TSDoc**.

---

## Ejercicios

### **Ejercicio 1 - DSIflix**
Diseñar un modelo de datos para una plataforma de streaming que incluya películas, series y documentales.

1. Definir una interfaz genérica `Streamable` con métodos de búsqueda por nombre, año, etc.
2. Crear una clase abstracta `BasicStreamableCollection<T>` que implemente `Streamable`, dejando algunos métodos como abstractos.
3. Extender `BasicStreamableCollection` para modelar colecciones de **series, películas y documentales**.
4. Aplicar los principios SOLID, especialmente **Interface Segregation**, dividiendo la interfaz `Streamable` si es necesario.

---

### **Ejercicio 2 - Ampliando la biblioteca musical**

1. Mejorar el diseño de la biblioteca musical para cumplir con los principios SOLID.
2. Incluir una nueva entidad `Single`, diferenciándola de un álbum.
3. Hacer que la clase **Discografía** sea genérica, permitiendo almacenar **discos, singles o ambos**.

---

### **Ejercicio 3 - Gestor de ficheros**

Código base:
```typescript
import * as fs from "fs";

class FileManager {
  constructor(private filePath: string) {}

  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }

  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}
```

#### **Análisis SOLID**
- **Violación del principio de Responsabilidad Única (SRP)**: La clase maneja tanto la lógica de acceso a archivos como la gestión de errores.
- **Solución**: Separar la funcionalidad en diferentes clases: una para acceso a archivos y otra para manejar logs de errores.

---

### **Ejercicio 4 - Impresoras y escáneres**

Código base:
```typescript
interface PrintableScannable {
  print(): void;
  scan(): void;
}

class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...');
  }
  scan(): void {} // Método innecesario
}

class Scanner implements PrintableScannable {
  print(): void {} // Método innecesario
  scan(): void {
    console.log('Scanning...');
  }
}
```

#### **Análisis SOLID**
- **Violación del principio de Segregación de Interfaces (ISP)**: Se obliga a `Printer` a implementar `scan()` y a `Scanner` a implementar `print()` sin necesidad.
- **Solución**: Dividir la interfaz en `IPrintable` y `IScannable`.

---

### **Ejercicio 5 - Servicio de mensajería**

Código base:
```typescript
class EmailService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

class ShortMessageService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

class Notifier {
  constructor(private notificationService: EmailService | ShortMessageService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
```

#### **Análisis SOLID**
- **Violación del principio de Abierto/Cerrado (OCP)**: `Notifier` depende directamente de `EmailService` y `ShortMessageService`, lo que dificulta agregar nuevos tipos de notificación.
- **Solución**: Utilizar una interfaz `INotificationService` que permita agregar nuevos servicios sin modificar `Notifier`.

---

### **Ejercicio 6 - No todos los pájaros vuelan**

Código base:
```typescript
class Bird {
  fly(): void {
    console.log("Flying...");
  }
}

class Sparrow extends Bird {}
class Penguin extends Bird {} // Problema: ¡Los pingüinos no vuelan!
```

#### **Análisis SOLID**
- **Violación del principio de Sustitución de Liskov (LSP)**: `Penguin` hereda `fly()` de `Bird`, pero no puede volar.
- **Solución**: Extraer `IFlyingBird` y `INonFlyingBird`, asegurando que cada clase implemente la interfaz adecuada.

```typescript
interface IFlyingBird {
  fly(): void;
}

class Sparrow implements IFlyingBird {
  fly(): void {
    console.log("Flying...");
  }
}

class Penguin {
  swim(): void {
    console.log("Swimming...");
  }
}
```

---

## Conclusión
Esta práctica refuerza el uso de **clases e interfaces genéricas** en TypeScript y la aplicación de los **principios SOLID**, mejorando la mantenibilidad y escalabilidad del código.
