import { Container, HeaderApp } from './styles'

export const Layout = ({ children }) => {
	return (
		<Container>
			<HeaderApp>
				<h1 className="title">Pokedex</h1>
				<p>
					Search for a Pokémon by name or using its National Pokédex number.
				</p>
			</HeaderApp>
			<section>{children}</section>
		</Container>
	)
}
