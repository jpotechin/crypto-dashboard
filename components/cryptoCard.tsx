import { ICryptoCard } from '../interfaces/home.interface';

const CryptoCard = (props: { cryptoData: ICryptoCard }): JSX.Element => {
	const { logoUrl, fakeGraphUrl, marketCapUrl, priceChangeUrl } = props.cryptoData;

	console.log('Data: ', props.cryptoData);

	return (
		<div className="flex flex-wrap overflow-hidden">
			<div className="w-1/2 overflow-hidden">{logoUrl}</div>
			<div className="w-1/2 overflow-hidden">{fakeGraphUrl}</div>
			<div className="w-1/2 overflow-hidden">{marketCapUrl}</div>
			<div className="w-1/2 overflow-hidden">{priceChangeUrl}</div>
		</div>
	);
};

export default CryptoCard;
