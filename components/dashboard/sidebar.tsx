import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import LayersIcon from '@material-ui/icons/Layers';

const Sidebar = (): JSX.Element => {
	return (
		<div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
			<div className="border-b py-3 mt-1 flex justify-around">
				<p className="cursor-default font-bold uppercase mt-2 md:mt-0 md:inline text-blue-900 block">
					Coin Incubator
				</p>
				<p> |</p>
				<p className="text-gray-400 text-lg">Wallet</p>
			</div>
			<div className="p-4 space-y-4">
				<div className="space-y-4">
					<h1 className="text-gray-500">MENU</h1>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<DonutLargeIcon className="text-grey-300" />
						<p className="">Dashboard</p>
					</div>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<ClearAllIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg">Transactions</p>
					</div>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<ArrowUpwardIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg">Send</p>
					</div>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<ArrowDownwardIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg">Receive</p>
					</div>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<SwapHorizIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg">Buy</p>
					</div>
				</div>
			</div>
			<div className="p-4 space-y-4">
				<div className="space-y-5">
					<h1 className="text-gray-500">DELEGATION</h1>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<LockOutlinedIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg ">Delegate</p>
					</div>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<EcoOutlinedIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg">Claim Rewards</p>
					</div>
				</div>
			</div>

			<div className="p-4 space-y-4">
				<div className="space-y-5">
					<h1 className="text-gray-500">STAKING</h1>
				</div>
				<div>
					<div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
						<LayersIcon className="text-grey-300" />
						<p className="text-grey-600 text-lg">Validate</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
