import Card from './card';
import Middle from './middle';
import RightBar from './rightbar';

const Container = (): JSX.Element => {
	return (
		<div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full ">
			<div className="px-8 py-1">
				<p className="text-gray-500 text-lg">Joseph</p>
				<p className="font-bold text-2xl transform -translate-y-2">Hi!</p>
			</div>
			<div className="flex p-4 space-x-3">
				<Card title="TOTAL" balance={0.409079} icon={0} />
				<Card title="AVAILABLE" balance={0.300079} icon={1} />
				<Card title="CLAIMABLE REWARD" balance={0.00216} icon={2} />
				<Card title="DELEGATED" balance={0.339079} icon={3} />
			</div>
			<div className="flex  ml-3 mt-6 space-x-6  mr-4">
				<Middle />
				<RightBar />
			</div>
		</div>
	);
};

export default Container;
