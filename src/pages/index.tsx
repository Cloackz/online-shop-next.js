// export const CustomButton = styled(Button)`
// 	:hover {
// 		color: black;
// 	}
// `

// const Title = sc.h1`
//   color: red;

// `

import Card from '@/components/CardItem'
import Header from '@/components/Header'

import Home from '@/pages/Home'

const index = () => {
	return (
		<>
			<Header />
			<Home />
			<Card />
		</>
	)
}

export default index
