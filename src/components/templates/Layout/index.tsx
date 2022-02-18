import { Header } from '../../organisms/Header'
import { Container } from './styles'

export const Layout = ({ children }) => {
	return (
		<>
			<Container>
				<Header
					title="Pokédex"
					subtitle="Search for a Pokémon by name or using its National Pokédex number."
				/>
				<section>{children}</section>
			</Container>
		</>
	)
}
