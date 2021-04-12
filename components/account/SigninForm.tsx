import styles from '../../styles/account/AccountCommon.module.scss';

const SigninForm = (): JSX.Element => {
	return (
		<div className={`${styles.boxContainer}`}>
			<form className={`${styles.formContainer}`}>
				<input className={`${styles.styledInput}`} placeholder="Email" type="email" />
				<input className={`${styles.styledInput}`} placeholder="Password" type="password" />
			</form>
			<a href="#" className={`${styles.mutedLink} my-3`}>
				Forgot your Password?
			</a>
			<button type="submit" className={`${styles.roundedButton} mb-3`}>
				Sign In
			</button>
			<a href="#" className={`${styles.mutedLink} my-3`}>
				Do not have an account? <span className={`${styles.boldLink}`}>Sign Up</span>
			</a>
		</div>
	);
};

export default SigninForm;
