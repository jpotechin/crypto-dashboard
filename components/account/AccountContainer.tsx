import styles from '../../styles/account/AccountContainer.module.scss';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { useRouter } from 'next/router';

const AccountContainer = (): JSX.Element => {
	const router = useRouter();
	const path = router.pathname;
	const isSignup = path === '/signup' ? true : false;
	const headerTag = isSignup ? 'Sign up' : 'Sign in';

	return (
		<div className={`${styles.accountPage}`}>
			<div className={`${styles.accountContainer}`}>
				<div className={`${styles.topContainer}`}>
					<div className={`${styles.backdrop}`}></div>
					<div className={`${styles.headerContainer}`}>
						<h2 className={`${styles.headerText}`}>Welcome</h2>
						{!isSignup ? <h2 className={`${styles.headerText}`}>Back</h2> : <></>}
						<h5 className={`${styles.smallText}`}>{headerTag} to continue</h5>
					</div>
				</div>
				<div className={`${styles.innerContainer}`}>
					{isSignup ? <SignupForm /> : <SigninForm />}
				</div>
			</div>
		</div>
	);
};

export default AccountContainer;
