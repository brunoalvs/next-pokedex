import { ParsedUrlQuery } from 'querystring';

export interface QParams extends ParsedUrlQuery {
  name: string;
}
