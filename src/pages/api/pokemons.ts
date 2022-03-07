// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		pokemons: [
			{
				id: 1,
				name: 'Bulbasaur',
				type: 'grass',
				image:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
			},
			{
				id: 2,
				name: 'Ivysaur',
				type: 'grass',
				image:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
			},
			{
				id: 3,
				name: 'Venusaur',
				type: 'grass',
				image:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
			},
		],
	})
}
