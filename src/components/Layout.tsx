import Header from '@/components/Header'

type LayoutProps = {
	children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
		</>
	)
}

export default Layout
