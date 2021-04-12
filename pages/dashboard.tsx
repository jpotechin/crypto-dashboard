import Sidebar from '../components/dashboard/sidebar';
import Header from '../components/dashboard/header';

const dashboard = (): JSX.Element => {
	return (
		<div>
			<div className="flex">
				<Sidebar />
				<div>
					<Header />
				</div>
			</div>
		</div>
	);
};

export default dashboard;
