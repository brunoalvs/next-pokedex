import { Header } from '../../organisms/Header'
import { Container, Content } from './styles'

export const Layout = ({ children }) => {
	return (
		<>
			<Container>
				<Header
					title="Pokédex"
					subtitle="Search for a Pokémon by name or using its National Pokédex number."
				/>
				<Content>{children}</Content>
			</Container>
		</>
	)
}
