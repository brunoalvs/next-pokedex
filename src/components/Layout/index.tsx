import { HeaderApp } from '@/components/HeaderApp'
import { Container } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <HeaderApp />
      {children}
    </Container>
  )
}
