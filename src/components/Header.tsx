import Container from '@/ui/Container'
import DevicesIcon from '@mui/icons-material/Devices'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Search = styled('div')`
	position: relative;
	cursor: pointer;
	display: flex;
`

const SearchIconWrapper = styled('div')`
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
`

const SearchInput = styled(InputBase)`
	padding-left: 35px;
	width: 150px;
	cursor: pointer;
`

const Header: React.FC = () => {
	return (
		<Container>
			<AppBar sx={{ background: '#fff', color: '#000' }} position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, alignItems: 'center', display: 'flex' }}
					>
						<DevicesIcon />
						<span style={{ marginLeft: '10px' }}>Shop</span>
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<SearchInput
							placeholder='Search goods'
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Container>
	)
}

export default Header
