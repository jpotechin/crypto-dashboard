import styles from '../../styles/account/AccountContainer.module.scss';
import SigninForm from './SigninForm';

const AccountContainer = (): JSX.Element => {
	return (
		<div className={`${styles.accountPage}`}>
			<div className={`${styles.accountContainer}`}>
				<div className={`${styles.topContainer}`}>
					<div className={`${styles.backdrop}`}></div>
					<div className={`${styles.headerContainer}`}>
						<h2 className={`${styles.headerText}`}>Welcome</h2>
						<h2 className={`${styles.headerText}`}>Back</h2>
						<h5 className={`${styles.smallText}`}>Sign in to continue</h5>
					</div>
				</div>
				<div className={`${styles.innerContainer}`}>
					<SigninForm />
				</div>
			</div>
		</div>
	);
};

export default AccountContainer;
