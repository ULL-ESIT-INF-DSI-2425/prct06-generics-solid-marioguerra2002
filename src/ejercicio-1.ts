/**
 * Enumeración que representa los tipos de Pokémon.
 */
export enum PokemonType {
  Fuego = "Fuego",
  Agua = "Agua",
  Hierba = "Hierba",
  Electrico = "Electrico",
}
/**
 * Interfaz que define las propiedades esenciales de un Pokémon.
 */
export interface PokemonParts {
  name: string;
  weight: number;
  height: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
}
/**
 * Clase que representa un Pokémon con sus atributos principales.
 */
export class Pokemon implements PokemonParts {
  /**
   * Crea un Pokémon.
   * @param name - Nombre del Pokémon
   * @param weight - Peso del Pokémon
   * @param height - Altura del Pokémon
   * @param type - Tipo del Pokémon
   * @param attack - Valor de ataque del Pokémon
   * @param defense - Valor de defensa del Pokémon
   * @param speed - Velocidad del Pokémon
   * @param hp - Puntos de vida del Pokémon
   */
  constructor(
    public name: string,
    public weight: number,
    public height: number,
    public type: PokemonType,
    public attack: number,
    public defense: number,
    public speed: number,
    public hp: number,
  ) {}
}
/**
 * Clase que representa una Pokédex, encargada de almacenar y gestionar Pokémon.
 */
export class Pokedex {
  private pokemons: Pokemon[] = [];
  /**
   * Añade un nuevo Pokémon a la Pokédex.
   * @param pokemon - Pokémon a añadir
   * @throws Error si el Pokémon ya existe en la Pokédex
   */
  addPokemon(pokemon: Pokemon): void {
    if (this.pokemons.find((p) => p.name === pokemon.name)) {
      throw new Error("Pokemon already exists");
    }
    this.pokemons.push(pokemon);
  }
  /**
   * Busca Pokémon por tipo.
   * @param type - Tipo de Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchByType(type: PokemonType): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.type === type)) {
      // some comprueba si hay algun elemento que cumpla la condición
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.type === type);
    // devuelve un array con los pokemons que coincidan con el tipo (filter coge los elementos que cumplan la condición)
  }
  /**
   * Busca un Pokémon por su nombre.
   * @param name - Nombre del Pokémon a buscar
   * @returns El Pokémon encontrado o `undefined` si no existe
   */
  searchByName(name: string): Pokemon | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.name === name)) {
      return undefined;
    }
    return this.pokemons.find((pokemon) => pokemon.name === name);
  }
  /**
   * Busca Pokémon por peso.
   * @param weight - Peso del Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchByWeight(weight: number): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.weight === weight)) {
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.weight === weight);
  }
  /**
   * Busca Pokémon por altura.
   * @param height - Altura del Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchByHeight(height: number): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.height === height)) {
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.height === height);
  }
  /**
   * Busca Pokémon por ataque.
   * @param attack - Valor de ataque del Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchByAttack(attack: number): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.attack === attack)) {
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.attack === attack);
  }
  /**
   * Busca Pokémon por defensa.
   * @param defense - Valor de defensa del Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchByDefense(defense: number): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.defense === defense)) {
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.defense === defense);
  }
  /**
   * Busca Pokémon por velocidad.
   * @param speed - Velocidad del Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchBySpeed(speed: number): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.speed === speed)) {
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.speed === speed);
  }
  /**
   * Busca Pokémon por puntos de vida (HP).
   * @param hp - Puntos de vida del Pokémon a buscar
   * @returns Un array con los Pokémon encontrados o `undefined` si no hay coincidencias
   */
  searchByHp(hp: number): Pokemon[] | undefined {
    if (!this.pokemons.some((pokemon) => pokemon.hp === hp)) {
      return undefined;
    }
    return this.pokemons.filter((pokemon) => pokemon.hp === hp);
  }
}
/**
 * Clase que representa un combate entre dos Pokémon.
 */
export class Combat {
  /**
   * Crea un combate entre dos Pokémon.
   * @param pokemon1 - Primer Pokémon
   * @param pokemon2 - Segundo Pokémon
   */
  constructor(
    public pokemon1: Pokemon,
    public pokemon2: Pokemon,
  ) {}
  /**
   * Matriz de efectividad de los tipos de Pokémon.
   */
  private efectivenessMatrix: Map<PokemonType, Map<PokemonType, number>> =
    new Map([
      [
        PokemonType.Fuego,
        new Map([
          [PokemonType.Fuego, 1],
          [PokemonType.Agua, 0.5],
          [PokemonType.Hierba, 2],
          [PokemonType.Electrico, 1],
        ]),
      ],
      [
        PokemonType.Agua,
        new Map([
          [PokemonType.Fuego, 2],
          [PokemonType.Agua, 1],
          [PokemonType.Hierba, 0.5],
          [PokemonType.Electrico, 0.5],
        ]),
      ],
      [
        PokemonType.Hierba,
        new Map([
          [PokemonType.Fuego, 0.5],
          [PokemonType.Agua, 2],
          [PokemonType.Hierba, 1],
          [PokemonType.Electrico, 1],
        ]),
      ],
      [
        PokemonType.Electrico,
        new Map([
          [PokemonType.Fuego, 1],
          [PokemonType.Agua, 2],
          [PokemonType.Hierba, 1],
          [PokemonType.Electrico, 1],
        ]),
      ],
    ]);
  /**
   * Obtiene la efectividad del ataque de un Pokémon contra otro.
   * @param pokemon1 - Pokémon atacante
   * @param pokemon2 - Pokémon defensor
   * @returns El factor de efectividad o `undefined` si no se encuentra
   */
  // lo pongo publico para poder hacer las pruebas
  public getEfectiveness(
    pokemon1: Pokemon,
    pokemon2: Pokemon,
  ): number | undefined {
    return (
      this.efectivenessMatrix.get(pokemon1.type)?.get(pokemon2.type) ??
      undefined
    ); // ?? 1 es para que si no encuentra el valor devuelva 1 y ? es para que si no encuentra el valor devuelva undefined
  }
  /**
   * Calcula el daño infligido por un Pokémon a otro.
   * @param attacker - Pokémon atacante
   * @param defender - Pokémon defensor
   * @returns El daño calculado
   */
  public calculateDamage(attacker: Pokemon, defender: Pokemon): number {
    const effectiveness = this.getEfectiveness(attacker, defender);
    if (effectiveness === undefined) {
      throw new Error("No se ha encontrado la efectividad");
    }
    let damage: number =
      50 * (attacker.attack / defender.defense) * effectiveness;

    return parseFloat(damage.toFixed(2));
  }
  /**
   * Inicia el combate entre los dos Pokémon.
   */
  start(): void {
    // void porque al final se va a hacer en cada ronda un console.log
    let attacker = this.pokemon1;
    let defender = this.pokemon2;
    console.log(
      `Comienza el combate entre ${attacker.name} y ${defender.name}`,
    );
    while (attacker.hp > 0 && defender.hp > 0) {
      const damage = this.calculateDamage(attacker, defender);
      // calculo el daño en cada ronda en función del atacante y el defensor (sus tipos y stats)
      defender.hp -= damage; // le resto el daño al hp del defensor
      console.log(
        `${attacker.name} ataca a ${defender.name} y le hace ${damage} de daño`,
      );
      if (defender.hp <= 0) {
        console.log(`${defender.name} no tiene vida`);
        console.log(`${defender.name} ha sido derrotado`);
        console.log(`${attacker.name} ha ganado el combate`);
        break;
      }
      console.log(`${defender.name} tiene ${defender.hp} de vida`);

      [attacker, defender] = [defender, attacker]; // intercambio de valores
    }
  }
}

const pikachu = new Pokemon(
  "Pikachu",
  6,
  4,
  PokemonType.Electrico,
  55,
  40,
  90,
  35,
);
const bulbasaur = new Pokemon(
  "Bulbasaur",
  6.9,
  7,
  PokemonType.Hierba,
  49,
  49,
  45,
  110,
);

const pokedex = new Pokedex();
pokedex.addPokemon(pikachu);
pokedex.addPokemon(bulbasaur);

const combat = new Combat(pikachu, bulbasaur);
combat.start();
