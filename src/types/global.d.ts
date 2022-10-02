import { ParsedUrlQuery } from 'querystring';

export interface QParams extends ParsedUrlQuery {
  name: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      types: {
        normal: string;
        fire: string;
        water: string;
        electric: string;
        grass: string;
        ice: string;
        fighting: string;
        poison: string;
        ground: string;
        flying: string;
        psychic: string;
        bug: string;
        rock: string;
        ghost: string;
        dragon: string;
        dark: string;
        steel: string;
        fairy: string;
      }
    };
    body: string;
    text: string;
    shape: string;
  }
}
