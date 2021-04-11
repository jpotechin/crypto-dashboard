import Head from 'next/head';
import Navbar from '../components/navbarTop';
import CryptoCard from '../components/cryptoCard';
import styles from '../styles/Home.module.scss';
import Button from '@material-ui/core/Button';
import { ICryptoCard } from '../interfaces/home.interface';

export default function Home(): JSX.Element {
	const cryptoData: ICryptoCard[] = [
		{
			logoUrl: 'BTC',
			fakeGraphUrl: 'Fake Graph',
			marketCapUrl: 'Market Cap',
			priceChangeUrl: 'Price Change',
		},
		{
			logoUrl: 'ETH',
			fakeGraphUrl: 'Fake Graph',
			marketCapUrl: 'Market Cap',
			priceChangeUrl: 'Price Change',
		},
		{
			logoUrl: 'Dogecoin',
			fakeGraphUrl: 'Fake Graph',
			marketCapUrl: 'Market Cap',
			priceChangeUrl: 'Price Change',
		},
	];

	return (
		<div className={styles.homeContainer}>
			<Head>
				<title>Cryptocurrency Dashboard</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>
				<div className="w-screen flex justify-center align-center flex-wrap">
					<div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-center">
						<div className="text-6xl font-semibold text-gray-900 leading-none">
							Grow your digital future
						</div>
						<div className="mt-6 text-3xl font-light text-true-gray-500 antialiased ">
							The easist way to buy and sell cryptocurrency
						</div>
						<div className="mt-6 text-xl font-light text-true-gray-500 antialiased ">
							Coin Incubator is the easiest place to buy and sell cryptocurrency. Buy and Sell
							Bitcoin and 30+ Other Digital Currencies
						</div>
						<div className="mt-6 text-xl font-light text-true-gray-500 antialiased py-1 px-1 flex justify-center">
							{/* <div className="flex justify-center "> */}
							<input
								type="search"
								className="shadow rounded border-0 p-3 min-w-50"
								placeholder="Enter your email address"
							/>
							{/* Hammer out if you like classic vs Material Design */}
							{/* <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl">
							Get Started
						</button> */}
							<Button variant="contained" color="primary">
								Get Started
							</Button>
						</div>
						<div className="mt-6 text-sm font-light text-true-gray-500 ">
							No waitlist - available for download now.
						</div>
					</div>
				</div>
				<div className="mt-6 flex flex-wrap justify-between mx-6">
					{cryptoData.map((data, index) => (
						<CryptoCard cryptoData={data} key={index} />
					))}
				</div>
			</main>
		</div>
	);
}
