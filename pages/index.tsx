import Head from 'next/head';
import Navbar from '../components/navbar-top';

export default function Home(): JSX.Element {
	return (
		<div>
			<Head>
				<title>Cryptocurrency Dashboard</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main></main>
		</div>
	);
}
