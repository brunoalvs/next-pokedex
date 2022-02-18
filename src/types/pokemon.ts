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

export interface PokemonDataResponse {
	name: string
	url: string
}
