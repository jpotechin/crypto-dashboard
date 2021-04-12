import AllOutIcon from '@material-ui/icons/AllOut';
import DoneIcon from '@material-ui/icons/Done';
import EcoIcon from '@material-ui/icons/Eco';
import LockIcon from '@material-ui/icons/Lock';

const Style = 'text-white text-xs';

const arrayIcon = [
	<AllOutIcon fontSize="small" className={Style} key={'AllOutIcon'} />,
	<DoneIcon fontSize="small" className={Style} key={'Done Icon'} />,
	<EcoIcon fontSize="small" className={Style} key={'Eco Icon'} />,
	<LockIcon fontSize="small" className={Style} key={'Lock Icon'} />,
];
const Color = [
	'from-indigo-500 to-blue-500',
	'from-blue-400 to-blue-300',
	'from-green-500 to-green-400',
	'from-yellow-600 to-yellow-500',
];

const Card = (props: { icon: number; balance: number; title: string }): JSX.Element => {
	const { icon, balance, title } = props;
	const newBalance = (balance * 59930.9).toFixed(2); // 1 BTC = $59930.90;

	return (
		<div
			className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${Color[icon]}`}
		>
			<div className="flex justify-between">
				<div></div>
				<div className=" w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
					{arrayIcon[icon]}
				</div>
			</div>
			<p className="text-gray-200 text-xs  ">{title}</p>
			<p className="text-gray-50 text-lg  font-semibold  ">{balance} BTC</p>
			<p className="text-gray-300  text-sm ">${newBalance}</p>
		</div>
	);
};

export default Card;
