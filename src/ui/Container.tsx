import styled from 'styled-components'

type props = {
	children: JSX.Element
}

const ContainerEl = styled.h1`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`

const Container: React.FC<props> = ({ children }) => {
	return <ContainerEl>{children}</ContainerEl>
}

export default Container
