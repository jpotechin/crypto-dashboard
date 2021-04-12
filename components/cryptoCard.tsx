import { ICryptoCard } from '../interfaces/home.interface';
import Image from 'next/image';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const CryptoCard = (props: { cryptoData: ICryptoCard }): JSX.Element => {
	const {
		logoUrl,
		logoDetail,
		fakeGraphUrl,
		marketCap,
		priceChange,
		priceChangePositive,
	} = props.cryptoData;

	return (
		<div className="flex flex-wrap overflow-hidden bg-white my-5  rounded-xl">
			<div className="w-1/2 overflow-hidden">
				<div className="flex justify-center items-center w-full h-full pb-2">
					<Image src={logoUrl} alt="me" width="64" height="64" />
					<div className="flex justify-center items-center wrap flex-col ml-6">
						<div>{logoDetail.coin}</div>
						<div>{logoDetail.coinAlt}</div>
					</div>
				</div>
			</div>
			<div className="w-1/2 overflow-hidden flex justify-center">
				<Image src={fakeGraphUrl} alt="me" width="150px" height="75px" />
			</div>
			<div className="w-1/2 overflow-hidden text-center">
				<div className="flex flex-col">
					<div>{marketCap}</div>
					<div>Market Cap</div>
				</div>
			</div>
			<div className="w-1/2 overflow-hidden text-center">
				<div className="flex flex-col">
					<div className={`${priceChangePositive ? 'text-green-500' : 'text-red-500'}`}>
						{priceChangePositive ? (
							<TrendingUpIcon className="mr-3" />
						) : (
							<TrendingDownIcon className="mr-3" />
						)}
						{priceChange}
					</div>
					<div>7 day % Change</div>
				</div>
			</div>
		</div>
	);
};

export default CryptoCard;
