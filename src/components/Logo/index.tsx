import { useRouter } from 'next/router'
import { Container } from './styles'

export const Logo = () => {
  const router = useRouter()

  return (
    <Container
      onClick={() => {
        if (router.pathname !== '/') {
          router.push('/')
        }
      }}
    >
      Pokédex
    </Container >
  )
}
