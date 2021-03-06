import Image from 'next/image'
import { Container } from './styles'

export const PokeBallLoader = () => {
	return (
		<Container>
			<Image className="loader" src="/favicon.svg" width={50} height={50} />
		</Container>
	)
}
