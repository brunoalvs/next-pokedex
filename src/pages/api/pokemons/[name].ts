import { NextApiRequest, NextApiResponse } from 'next'
import { pokemons } from '../../../../public/pokemons'

import { PokemonNextApiResponse } from '../../../types/pokemon'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { name } = req.query

	const pokemon: PokemonNextApiResponse = pokemons.find(
		pokemon => pokemon.name === name
	)

	if (!pokemon) {
		res.status(404).send({ error: 'Pokemon not found' })
		return
	}

	res.status(200).json(pokemon)
}
