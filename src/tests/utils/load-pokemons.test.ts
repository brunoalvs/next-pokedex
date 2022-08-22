import { createMocks, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import { loadPokemons } from '@/utils/load-pokemon'

describe('loadPokemons', () => {
  function mockRequestResponse(method: RequestMethod = 'GET') {
    const { req, res }: { req: NextApiRequest, res: NextApiResponse } = createMocks({ method })
    return { req, res }
  }

  it('should return an array of pokemons', async () => {
    const { req, res } = mockRequestResponse()
    // eslint-disable-next-line
    console.log('req', req)
    // eslint-disable-next-line
    console.log('res', res)
    const pokemons = await loadPokemons()
    expect(pokemons).toBeInstanceOf(Array)
  })
})
