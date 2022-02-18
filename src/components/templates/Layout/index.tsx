import { HeaderApp } from '../../HeaderApp'
import { Container } from './styles'

export const Layout = ({ children }) => {
	return (
		<>
			<Container>
				<HeaderApp
					title="Pokédex"
					subtitle="Search for a Pokémon by name or using its National Pokédex number."
				/>
				<section>{children}</section>
			</Container>
		</>
	)
}
