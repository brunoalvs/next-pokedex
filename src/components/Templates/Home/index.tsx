import { Container, HeaderApp, InputSearch } from './styles'

type HomeProps = {
	children: React.ReactNode
	search: {
		value: string
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	}
}

export const Home = ({ children, search }: HomeProps) => {
	return (
		<Container>
			<HeaderApp>
				<h1 className="title">Pokedex</h1>
				<p>
					Search for a Pokémon by name or using its National Pokédex number.
				</p>
				<InputSearch
					type="search"
					placeholder="Search"
					value={search.value}
					onChange={search.onChange}
				/>
			</HeaderApp>
			<section>{children}</section>
		</Container>
	)
}
