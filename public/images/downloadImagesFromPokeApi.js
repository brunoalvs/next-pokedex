import fs from 'fs'
import request from 'request'
import { pokemons } from '../pokemons.js'

function Download(uri, filename, callback) {
	request.head(uri, function (err, res, body) {
		if (err) {
			console.error(err)
			return
		}

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)
	})
}

let data = pokemons

// console.table(data.map(pokemon => pokemon.image))

data.map((pokemon, index) => {
	Download(pokemon.image, `${index + 1}.png`, () => console.log('done'))
})

//Download(
//	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png',
//	'pokemon.png',
//	function () {
//		console.log('Done')
//	}
//)
