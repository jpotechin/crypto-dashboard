import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (): JSX.Element => {
	return (
		<div className="flex shadow-xl bg-gray-50 p-3 h-screen justify-between">
			<div className="flex space-x-3">
				<p className="text-gray-400">Address</p>
				<p className="text-gray-400">3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</p>
				<CropLandscapeIcon className="text-grey-300" />
				<DashboardIcon className="text-grey-300" />
			</div>
			<div className="flex space-x-2">
				<AppsIcon className="text-grey-300" />
			</div>
			<div className="flex space-x-2">
				<AppsIcon className="text-grey-300" />
			</div>
			<div className="flex space-x-2 text-gray-300 mr-3">
				<ExitToAppIcon className="text-grey-300" />
				<p className="text-gray-600">Close</p>
			</div>
		</div>
	);
};

export default Header;