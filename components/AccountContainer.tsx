import styles from '../styles/AccountContainer.module.scss';

const AccountContainer = (): JSX.Element => {
	return (
		<div className={`${styles.accountPage}`}>
			<div className={`${styles.accountContainer}`}>
				<div className={`${styles.topContainer}`}>
					<div className={`${styles.backdrop}`}></div>
				</div>
			</div>
		</div>
	);
};

export default AccountContainer;
