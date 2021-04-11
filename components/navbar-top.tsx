const NavBarTop = (): JSX.Element => {
	return (
		/* 
		logo left ---- links ---- Signin / Get Started button
		*/
		<nav className="container mx-auto pt-5">
			{/* <div className="w-full md:flex md:p-4 text-center md:text-left"> */}
			<div className="grid grid-cols-3">
				<div className="flex flex-row items-center">
					<span className="cursor-default font-bold uppercase block mt-2 md:mt-0 md:inline text-blue-900">
						Coin Incubator
					</span>
				</div>
				<div className="flex flex-row justify-between items-center">
					<a href="/" className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						Home
					</a>

					<a href="/prices" className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						Prices
					</a>

					<a href="/learn" className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						Learn
					</a>
				</div>
				<div className="flex flex-row justify-end items-center">
					<a href="/signin" className="block md:inline hover:underline m-2 md:m-0 md:ml-4">
						{' '}
						Sign In{' '}
					</a>
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-3 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						Get Started
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBarTop;
