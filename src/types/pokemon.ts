export interface PokemonType {
	id: number
	name: string
	sprites: {
		other: {
			['official-artwork']: {
				front_default: string
			}
		}
	}
	stats: [
		{
			base_stat: number
			effort: number
			stat: {
				name: string
				url: string
			}
		}
	]
	types: [
		{
			slot: number
			type: {
				name: string
			}
		}
	]
}

export interface PokemonNextApiResponse {
	id: number
	name: string
	url: string
	bgColor: string
	image: string
}
