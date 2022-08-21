import { HeaderApp } from '@/components/HeaderApp'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <HeaderApp />
      {children}
    </div>
  )
}
