import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/header';
import Container from '../components/dashboard/container';

const dashboard = (): JSX.Element => {
	return (
		<div className="flex w-screen h-screen">
			<Sidebar />
			<div className="w-screen ">
				<Header />
				<Container />
			</div>
		</div>
	);
};

export default dashboard;
