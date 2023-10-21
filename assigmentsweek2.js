const pokemons = [
  { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
  { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
  { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
  { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
  { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
  { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
  { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
  { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
  { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
  { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
  { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];

console.log('\n##################  Filtered Types  #################\n')

const waterPokemons = pokemons.filter((pokemon) => {
  return pokemon.type === 'Water';
});
  console.log(waterPokemons)

  console.log("Water Turundeki Pokemonlarin Isimleri:");
waterPokemons.forEach((pokemon) => {
  console.log('\t' + pokemon.name);});
  console.log("Water Turundeki Pokemonlarin Sayisi:\n\t" + waterPokemons.length);

console.log('\n##################  Doubled Experience  #################\n')


const doubledExperience = pokemons.map((pokemon) => {
  return {
    ...pokemon,
    experience: pokemon.experience * 2,
  };
});

console.log(doubledExperience);

console.log('\n##################  Pokemons Experience Condition  #################\n')

const someFirePokemonHighExperience = pokemons.some((pokemon) => {
  return pokemon.type === 'Fire' && pokemon.experience >= 70;
});
const allWaterPokemonsHighExperience = pokemons
  .filter((pokemon) => pokemon.type === 'Water')
  .every((pokemon) => pokemon.experience >= 60);

console.log("Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?:", someFirePokemonHighExperience);
console.log("Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?:", allWaterPokemonsHighExperience);

console.log('\n##################  Total Electric Pokemon Experience  #################\n')

const totalElectricExperience = pokemons.reduce((acc, pokemon) => {
  if (pokemon.type === 'Electric') {
    return acc + pokemon.experience;
  }
  return acc;
}, 0);

console.log(
  "Electric türündeki Pokemon'ların toplam deneyim puanı:\n\t" +
    totalElectricExperience
);

console.log('\n##################  Pokemons Average Experience  #################\n')

const typeAverageExperience = pokemons.reduce((acc, pokemon) => {
  return acc + pokemon.experience;
}, 0) / pokemons.length;
console.log(
  "Pokemon'ların ortalama deneyim puanı: \n\t" +
    typeAverageExperience
);
