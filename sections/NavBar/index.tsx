const NavBar = () => {
	return (
		<nav className="bg-[#F1F7FE] flex px-[100px] justify-between items-center ">
			<img src="/assets/Images/eccLogo.svg" />
			<div className="flex gap-x-[67px] text-black">
				<p>Home</p>
				<p>What we offer</p>
				<p>Contact us</p>
			</div>
			<button className="py-[17px] px-[28px] bg-eccblue">Join Waitlist</button>
		</nav>
	);
};
export default NavBar;
