import { PokemonStats } from '../../types/pokemon'
import { Container, Progress } from './styles'

interface StatsListProps {
	stats: PokemonStats[]
	bgColor: string
}

export const StatsList = ({ ...props }: StatsListProps) => {
	function getInitials(name: string) {
		switch (name) {
			case 'hp':
				return 'HP'
			case 'attack':
				return 'ATK'
			case 'defense':
				return 'DEF'
			case 'special-attack':
				return 'SATK'
			case 'special-defense':
				return 'SDEF'
			case 'speed':
				return 'SPD'
			default:
				break
		}

		return name
	}

	return (
		<Container>
			{props.stats.map((stat, index) => (
				<li key={index}>
					<span className="name">{getInitials(stat.stat.name)}</span>
					<span className="base">
						{stat.base_stat.toString().padStart(3, '0')}
					</span>

					<Progress
						bgColor={props.bgColor}
						percent={(stat.base_stat / 255) * 100}
					>
						<div className="progress-bar" />
					</Progress>
				</li>
			))}
		</Container>
	)
}
