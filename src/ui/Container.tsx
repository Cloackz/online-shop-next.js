import styled from 'styled-components'

type ContainerProps = {
	children: JSX.Element
}

const ContainerEl = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <ContainerEl>{children}</ContainerEl>
}

export default Container
