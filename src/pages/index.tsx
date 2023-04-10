import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Card, styled } from '@mui/material'
import sc from 'styled-components'

export const CustomButton = styled(Button)`
	:hover {
		color: black;
	}
`

const Title = sc.h1`
  color: red;  

`

export const CustomCard = styled(Card)``

const index = () => {
	return (
		<>
			<CustomButton variant='outlined' size='small' startIcon={<DeleteIcon />}>
				Delete
			</CustomButton>
			<CustomCard>
				<Title>1221</Title>
				<span>123</span>
			</CustomCard>
		</>
	)
}

export default index
