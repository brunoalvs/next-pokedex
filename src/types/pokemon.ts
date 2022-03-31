export interface PokemonType {
	id: number
	name: string
	height: number
	weight: number
	damage_relations: {
		double_damage_from: [
			{
				name: string
			}
		]
		double_damage_to: [
			{
				name: string
			}
		]
		half_damage_from: [
			{
				name: string
			}
		]
	}
	sprites: {
		other: {
			['official-artwork']: {
				front_default: string
			}
		}
	}
	stats: {
		base_stat: number
		effort: number
		stat: {
			name: string
			url: string
		}
	}[]
	types: {
		slot: number
		type: {
			name: string
		}
	}[]
	abilities: {
		is_hidden: boolean
		ability: {
			name: string
		}
	}[]
}

export interface PokemonNextApiResponse {
	id: number
	name: string
	url: string
	bgColor: string
	image: string
}

export interface PokemonDetailData extends PokemonType {
	image: string
	bgColor: string
}
