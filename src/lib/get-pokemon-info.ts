interface getPokemonInfoParams {
  id: string;
}

export async function getPokemonInfo({ id }: getPokemonInfoParams) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const data = await res.json();

  return data
}
