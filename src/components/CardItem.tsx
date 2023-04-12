import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import Image from 'next/image'

type props = {}

const CardEl = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const ImageWrapper = styled('div')`
	width: 100%;
	object-fit: cover;
`

const CardItem: React.FC<props> = () => {
	return (
		<CardEl>
			<ImageWrapper>
				<Image width={400} height={200} src='/goods1.webp' alt='1' />
			</ImageWrapper>
			<span>123</span>
		</CardEl>
	)
}

export default CardItem
