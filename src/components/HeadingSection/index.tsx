import React from 'react'
import { Container } from './styles'

interface HeadingSectionProps {
  children: React.ReactNode
}

export const HeadingSection = ({ children }: HeadingSectionProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
