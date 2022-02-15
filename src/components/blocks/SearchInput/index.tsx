import { Container, Input } from './styles'

type SearchInputProps = {
	onChange: (value: string) => void
	onSubmit: () => void
	value: string
	placeholder?: string
}

export const SearchInput = ({
	onChange,
	onSubmit,
	value,
	placeholder = 'Search for a Pokémon',
}: SearchInputProps) => {
	return (
		<>
			<Container>
				<Input
					type="text"
					name="search"
					placeholder={placeholder}
					value={value}
					onSubmit={onSubmit}
					onChange={e => onChange(e.target.value)}
					onKeyPress={(e: any) => {
						if (e.key === 'Enter') {
							onSubmit()
						}
					}}
				/>
			</Container>
		</>
	)
}
