import { ParsedUrlQuery } from 'querystring';

export interface QParams extends ParsedUrlQuery {
  name: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    shape: string;
  }
}
