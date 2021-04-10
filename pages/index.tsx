import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
	return (
		<div>
			<Head>
				<title>Cryptocurrency Dashboard</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.container}>
				<Grid container direction="row" justify="center" alignItems="center">
					<h1>Welcome</h1>
				</Grid>
			</main>
		</div>
	);
}
