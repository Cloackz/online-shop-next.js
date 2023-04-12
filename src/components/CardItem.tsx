import { theme } from '@/ui/theme'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Button, Card, ThemeProvider, styled } from '@mui/material'
import Image from 'next/image'

type ItemProps = {
	brand: string
	model: string
	category: string
	price: number
	img: string
}

const CardEl = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 20px;
	position: relative;
`

const BrandEl = styled(Card)`
	position: absolute;
	right: 10px;
	top: 10px;
	font-size: 10px;
	font-weight: 700;
	text-transform: uppercase;
	background: #1976d2;
	color: #fff;
	padding: 6px;
	border-radius: 6px;
	z-index: 1;
`

const ImageWrapper = styled('div')`
	position: relative;
	cursor: pointer;
	margin-bottom: 20px;
	z-index: 0;
	transition: 0.6s ease-in-out;

	:hover {
		transform: scale(1.1);

		::before {
			display: block;
			transition: 0.6s ease-in-out;
		}
	}

	::before {
		content: 'click for more information';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 60%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-size: 10px;
		background: #fff;
		opacity: 0.7;
		border-radius: 6px;
		padding: 4px;
		display: none;
	}
`

const InfoWrapper = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`

const Title = styled('h3')`
	font-size: 16px;
	line-height: 20px;
`

const Price = styled('span')`
	font-size: 14px;
	line-height: 18px;
`

const CardItem: React.FC<ItemProps> = ({
	brand,
	model,
	price,
	category,
	img,
}) => {
	return (
		<CardEl>
			<BrandEl>{category}</BrandEl>
			<ImageWrapper>
				<Image width={210} height={230} src={img} alt={model} />
			</ImageWrapper>
			<InfoWrapper>
				<Title>
					<span style={{ marginRight: '5px' }}>{brand}</span>
					<span>{model}</span>
				</Title>
				<Price>{price} $</Price>
			</InfoWrapper>
			<ThemeProvider theme={theme}>
				<Button variant='outlined' endIcon={<AddShoppingCartIcon />}>
					Add to cart
				</Button>
			</ThemeProvider>
		</CardEl>
	)
}

export default CardItem
