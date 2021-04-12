import styles from '../../styles/account/AccountCommon.module.scss';
import Link from 'next/link';

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
			{/* <button type="submit" className={`${styles.roundedButton} mb-3`}>
				Sign In
			</button> */}
			<Link href="/dashboard" passHref>
				<button className={`${styles.roundedButton} mb-3`}>Sign In</button>
			</Link>
			<Link href="/signup">
				<a className={`${styles.mutedLink} my-3`}>
					Do not have an account? <span className={`${styles.boldLink}`}>Sign Up</span>
				</a>
			</Link>
			<Link href="/">
				<a className={`${styles.mutedLink} my-3`}>Return Home</a>
			</Link>
		</div>
	);
};

export default SigninForm;
