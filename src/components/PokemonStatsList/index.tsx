import { PokemonStat } from '@/types/pokemons';
import { HeadingSection } from '../HeadingSection';
import { Container, List, Progress, StatItem, StatName } from './styles'

interface PokemonStatsListProps {
  stats: PokemonStat[];
}

export const PokemonStatsList = ({ stats }: PokemonStatsListProps) => {
  return (
    <Container>
      <HeadingSection>
        Stats
      </HeadingSection>
      <List>
        {stats.map((stat) => (
          <StatItem key={stat.stat.name}>
            <StatName>
              {stat.stat.name.replace('-', ' ')}
            </StatName>
            <Progress value={stat.base_stat} max={getMaxStat(stat)} />
          </StatItem>
        ))}
      </List>
    </Container>
  );
}

function getMaxStat(stat: PokemonStat) {
  switch (stat.stat.name) {
    case 'hp':
      return 255;
    case 'attack':
      return 190;
    case 'defense':
      return 230;
    case 'special-attack':
      return 194;
    case 'special-defense':
      return 230;
    case 'speed':
      return 180;
    default:
      break
  }
}

// MAX Stats
// HP: 255
// Attack: 190
// Defense: 230
// Special Attack: 194
// Special Defense: 230
// Speed: 180

