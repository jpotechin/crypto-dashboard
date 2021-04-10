import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cryptocurrency Dashboard</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Welcome</h1>
			</main>
		</div>
	);
}
