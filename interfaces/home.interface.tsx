export interface ICryptoCard {
	logoUrl: string;
	logoDetail: {
		coin: string;
		coinAlt: string;
	};
	fakeGraphUrl: string;
	marketCap: string;
	priceChange: string;
	priceChangePositive: boolean;
}
