import { Pokemon } from '@/types/pokemons'

export const result: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'ivysaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
        },
      },
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 62,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'venusaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        },
      },
    },
    stats: [
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 82,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 100,
        effort: 1,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  },
]
