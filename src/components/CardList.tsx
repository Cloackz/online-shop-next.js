import Item from '@/components/CardItem'
import Container from '@/ui/Container'
import { Grid } from '@mui/material/'

import data from '@/components/data.json'

type ListProps = {}

const CardList: React.FC = () => {
	return (
		<Container>
			<Grid
				sx={{ marginTop: '50px' }}
				container
				justifyContent='center'
				spacing={2}
			>
				{data.map(item => (
					<Grid item>
						<Item {...item} key={item.id} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CardList
