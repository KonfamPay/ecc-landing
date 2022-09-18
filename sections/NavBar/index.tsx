const NavBar = () => {
	return (
		<nav className="bg-[#F1F7FE] flex px-[20px] lg:px-[100px] justify-between items-center py-[20px]">
			<img
				className="w-[42px] lg:w-[65px]"
				src="/assets/Images/eccLogo.svg"
			/>
			<div className="hidden md:flex gap-x-[67px] text-black text-[18px]">
				<p className="text-eccblue">Home</p>
				<p className="">What we offer</p>
				<p className="">Contact us</p>
			</div>
			<div className="flex md:block gap-x-[18px] items-center">
				<button className="h-[30px] lg:h-[60px] sm:h-[40px] w-[97px] sm:w-[120px] lg:w-[166px] font-semibold bg-eccblue text-[12px] sm:text-[15px] lg:text-[18px] rounded-[5px] lg:rounded-[12px] shadow-[0px_2px_0px_rgba(0,0,0,1)] lg:shadow-[0px_5px_0px_rgba(0,0,0,1)] relative active:translate-y-[2px] lg:active:translate-y-[5px] active:shadow-md transition-all">Join Waitlist</button>
				<div className="block md:hidden active:scale-90 transition-[200ms]">
					<img src="/assets/Images/mobileHamburgerNav.svg" />
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
