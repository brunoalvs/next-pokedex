// Api to get pokemon data from the pokeapi.co

type Pokemon = {
	name: string
	url: string
}

export class Api {
	private baseUrl = 'https://pokeapi.co/api/v2/'

	public async getPokemon(id: number): Promise<Pokemon> {
		const url = `${this.baseUrl}pokemon/${id}`
		const response = await fetch(url)
		const pokemon = await response.json()
		return pokemon
	}
}
