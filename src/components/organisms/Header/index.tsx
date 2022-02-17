import { Container } from './styles'

type HeaderProps = {
	title: string
	subtitle: string
}

export const Header = ({ title, subtitle, ...props }: HeaderProps) => {
	return (
		<Container>
			<h1 className="title">{title}</h1>
			<p>{subtitle}</p>
			{/* <input
				type="search"
				placeholder="Search for a Pokémon"
				value={searchText}
				onChange={e => onSearchTextChange(e.target.value)}
				onSubmit={onSearchSubmit}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						onSearchSubmit()
					}
				}}
			/> */}
		</Container>
	)
}
