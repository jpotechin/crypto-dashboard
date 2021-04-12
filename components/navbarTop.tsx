import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbarTop.module.scss';
import Button from '@material-ui/core/Button';

export default function NavBarTop(): JSX.Element {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleNavToggle = (): void => {
		setShowDropdown(!showDropdown);
	};

	return (
		/* 
		logo left ---- links ---- Signin / Get Started button
		*/

		<header
			className={`flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative ${styles.navContainer}`}
		>
			<a href="#" className="block">
				<span className="cursor-default font-bold uppercase block mt-2 md:mt-0 md:inline text-blue-900 block">
					Coin Incubator
				</span>
			</a>
			<button
				className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
				onClick={handleNavToggle}
			>
				<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					></path>
				</svg>
			</button>

			<nav className="absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:items-center md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 ">
				<ul className={`md:flex ${showDropdown ? 'block' : 'hidden'} `}>
					<li className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						<Link href="/">
							<a className="nav-link">Home</a>
						</Link>
					</li>
					<li className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						<Link href="/prices">
							<a className="nav-link">Prices</a>
						</Link>
					</li>
					<li className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						<Link href="/learn">
							<a className="nav-link">Learn</a>
						</Link>
					</li>
					<li className="md:hidden block md:inline hover:underline m-2 md:m-0 md:ml-4">
						<Link href="/signin">
							<a className="nav-link">Sign in</a>
						</Link>
					</li>
					<li className="md:hidden block md:inline hover:underline m-2 md:m-0 md:ml-4">
						<Link href="/signup">
							<a className="nav-link">Sign up</a>
						</Link>
					</li>
				</ul>
				<div className="hidden md:inline-block ">
					<Link href="/signin">
						<a className="block md:inline hover:underline m-2 md:m-0 md:ml-4 pr-4 nav-link">
							Sign in
						</a>
					</Link>
					<Link href="/signup" passHref>
						{/* <button
							className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-3 py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl ${styles.btn} ${styles.animate}`}
						>
							Get Started
						</button> */}
						<Button variant="outlined" color="primary">
							Get Started
						</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
}
