import { describe, test, expect, vi } from "vitest";
import { PokemonType, Pokemon, Pokedex, Combat } from "../src/ejercicio-1";

describe("Pokemon class tests", () => {
  test("Should create a new Pokemon", () => {
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
    expect(pikachu).toBeInstanceOf(Pokemon);
  });
  test("Should add a new Pokemon to the Pokedex", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByName("Pikachu")).toEqual(pikachu);
  });
  test("Should search a Pokemon by type", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    const bulbasaur = new Pokemon(
      "Bulbasaur",
      6.9,
      7,
      PokemonType.Hierba,
      49,
      49,
      45,
      45,
    );
    // an electric pokemon to see 2 pokemons in the array
    const raichu = new Pokemon(
      "Raichu",
      30,
      8,
      PokemonType.Electrico,
      90,
      55,
      110,
      60,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    pokedex.addPokemon(bulbasaur);
    pokedex.addPokemon(raichu);
    expect(pokedex.searchByType(PokemonType.Electrico)).toEqual([
      pikachu,
      raichu,
    ]);
  });
  test("Should search a Pokemon by name", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    const bulbasaur = new Pokemon(
      "Bulbasaur",
      6.9,
      7,
      PokemonType.Hierba,
      49,
      49,
      45,
      45,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    pokedex.addPokemon(bulbasaur);
    expect(pokedex.searchByName("Charmander")).toEqual(charmander);
  });
  test("Should search a Pokemon by weight", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    expect(pokedex.searchByWeight(6)).toEqual([pikachu]);
  });
  test("Should throw an error if the Pokemon already exists", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(() => pokedex.addPokemon(pikachu)).toThrowError(
      "Pokemon already exists",
    );
  });
  test("Should return undefined if the Pokemon does not exist", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByName("Charmander")).toBeUndefined();
  });
  test("Should return undefined if there is no Pokemon with that type", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByType(PokemonType.Fuego)).toBeUndefined();
  });
  test("Should return undefined if there is no Pokemon with that weight", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByWeight(8)).toBeUndefined();
  });
  test("Should search a Pokemon by speed", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    expect(pokedex.searchBySpeed(65)).toEqual([charmander]);
  });
  test("Should return undefined if there is no Pokemon with that speed", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchBySpeed(100)).toBeUndefined();
  });
  test("Should search a Pokemon by hp", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    expect(pokedex.searchByHp(35)).toEqual([pikachu]);
  });
  test("Should return undefined if there is no Pokemon with that hp", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByHp(100)).toBeUndefined();
  });
  test("Should search a Pokemon by height", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    expect(pokedex.searchByHeight(6)).toEqual([charmander]);
  });
  test("Should return undefined if there is no Pokemon with that height", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByHeight(8)).toBeUndefined();
  });
  test("Should search a Pokemon by attack", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    expect(pokedex.searchByAttack(52)).toEqual([charmander]);
  });
  test("Should return undefined if there is no Pokemon with that attack", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByAttack(60)).toBeUndefined();
  });
  test("Should search a Pokemon by defense", () => {
    const pokedex = new Pokedex();
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
    const charmander = new Pokemon(
      "Charmander",
      8.5,
      6,
      PokemonType.Fuego,
      52,
      43,
      65,
      39,
    );
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(charmander);
    expect(pokedex.searchByDefense(43)).toEqual([charmander]);
  });
  test("Should return undefined if there is no Pokemon with that defense", () => {
    const pokedex = new Pokedex();
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
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByDefense(60)).toBeUndefined();
  });
});

describe("Combat class tests", () => {
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
  const charmander = new Pokemon(
    "Charmander",
    8.5,
    6,
    PokemonType.Fuego,
    52,
    43,
    65,
    39,
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
  // pokemon tipo agua
  const squirtle = new Pokemon(
    "Squirtle",
    9,
    6,
    PokemonType.Agua,
    44,
    48,
    65,
    43,
  );
  const combat = new Combat(pikachu, charmander);
  const combat2 = new Combat(pikachu, bulbasaur);
  const combat3 = new Combat(pikachu, squirtle);
  test("Given two pokemons, return the value of efectiveness", () => {
    expect(combat.getEfectiveness(pikachu, charmander)).toBe(1);
    expect(combat2.getEfectiveness(pikachu, bulbasaur)).toBe(1);
    expect(combat3.getEfectiveness(pikachu, squirtle)).toBe(2);
  });
  test("Given two pokemons, in case getEfectiveness does not find the value, return 1", () => {
    const invalidPokemon = new Pokemon(
      "Invalid",
      6,
      4,
      PokemonType.Inventado,
      55,
      40,
      90,
      35,
    );
    combat.getEfectiveness(pikachu, invalidPokemon);
    expect(combat.getEfectiveness(pikachu, invalidPokemon)).toBeUndefined();
    // calcular daño da error si no encuentra la efectividad
    expect(() => combat.calculateDamage(pikachu, invalidPokemon)).toThrowError(
      "No se ha encontrado la efectividad",
    );
  });
  test("Start the combat between two pokemons", () => {
    const combat = new Combat(pikachu, charmander);
    const consoleSpy = vi.spyOn(console, "log"); // spy on console.log
    combat.start();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Comienza el combate entre Pikachu y Charmander",
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Pikachu ataca a Charmander y le hace 63.95 de daño",
    );
    expect(consoleSpy).toHaveBeenCalledWith("Charmander no tiene vida");
    expect(consoleSpy).toHaveBeenCalledWith("Charmander ha sido derrotado");
    expect(consoleSpy).toHaveBeenCalledWith("Pikachu ha ganado el combate");
  });
  test("Should calculate the damage between two pokemons", () => {
    const combat = new Combat(pikachu, bulbasaur);
    const consoleSpy = vi.spyOn(console, "log"); // spy on console.log
    combat.start();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Comienza el combate entre Pikachu y Bulbasaur",
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Pikachu ataca a Bulbasaur y le hace 56.12 de daño",
    );
    expect(consoleSpy).toHaveBeenCalledWith("Bulbasaur tiene 53.88 de vida");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Bulbasaur ataca a Pikachu y le hace 61.25 de daño",
    );
    expect(consoleSpy).toHaveBeenCalledWith("Pikachu no tiene vida");
    expect(consoleSpy).toHaveBeenCalledWith("Pikachu ha sido derrotado");
    expect(consoleSpy).toHaveBeenCalledWith("Bulbasaur ha ganado el combate");
  });
});
