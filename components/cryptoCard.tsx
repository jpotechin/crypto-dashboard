const CryptoCard = (): JSX.Element => {
	const logo = 'Logo';
	const fakeGraph = 'Fake Graph';
	const marketCap = 'Market Cap';
	const priceChange = 'Price Change';

	return (
		<div className="flex flex-wrap overflow-hidden">
			<div className="w-1/2 overflow-hidden">{logo}</div>
			<div className="w-1/2 overflow-hidden">{fakeGraph}</div>
			<div className="w-1/2 overflow-hidden">{marketCap}</div>
			<div className="w-1/2 overflow-hidden">{priceChange}</div>
		</div>
	);
};

export default CryptoCard;
