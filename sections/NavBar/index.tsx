import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
	const [mobileNavShowing, setMobileNavShowing] = useState(false);
	const navItemVariants = {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.22 } },
	};
	return (
		<nav className="bg-clearblue flex px-[20px] lg:px-[100px] justify-between items-center py-[20px] fixed z-30 top-0 left-0 right-0">
			<img
				className="w-[42px] z-50 lg:w-[65px]"
				src="/assets/Images/eccLogo.svg"
			/>
			<div className="hidden md:flex gap-x-[67px] text-black text-[18px]">
				<p className="text-eccblue">Home</p>
				<p className="">What we offer</p>
				<p className="">Contact us</p>
			</div>
			<div className="flex md:block gap-x-[18px] items-center">
				<button className="h-[30px] lg:h-[60px] sm:h-[40px] w-[97px] sm:w-[120px] lg:w-[166px] font-semibold bg-eccblue text-[12px] sm:text-[15px] lg:text-[18px] rounded-[5px] lg:rounded-[12px] shadow-[0px_2px_0px_rgba(0,0,0,1)] lg:shadow-[0px_5px_0px_rgba(0,0,0,1)] relative active:translate-y-[2px] lg:active:translate-y-[5px] active:shadow-md transition-all">Join Waitlist</button>
				<div
					onClick={() => setMobileNavShowing(true)}
					className="block md:hidden active:scale-90 transition-[200ms]"
				>
					<img src="/assets/Images/mobileHamburgerNav.svg" />
				</div>
			</div>
			<AnimatePresence>
				{mobileNavShowing && (
					<motion.nav
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.22 }}
						className="fixed top-0 left-0 right-0 bottom-0 bg-clearblue overflow-hidden md:hidden"
					>
						<div className="w-full h-full flex flex-col justify-center items-center relative bottom-[10px] gap-y-[79px]">
							<div className="flex flex-col items-center text-[22px] text-black gap-y-[50px]">
								<motion.p
									variants={navItemVariants}
									initial={{ opacity: 0, y: 50 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.22 } }}
								>
									Home
								</motion.p>
								<motion.p
									variants={navItemVariants}
									initial={{ opacity: 0, y: 50 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.22 } }}
								>
									What we offer
								</motion.p>
								<motion.p
									variants={navItemVariants}
									initial={{ opacity: 0, y: 50 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.22 } }}
								>
									Contact us
								</motion.p>
							</div>
							<motion.button
								initial={{ opacity: 0, y: 50 }}
								exit={{ opacity: 0 }}
								whileTap={{ scale: 0.95 }}
								animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.22 } }}
								className="font-bold text-[14.67px] w-[142px] h-[44px] bg-eccblue rounded-[7.24px] "
							>
								Join Waitlist
							</motion.button>
							<motion.div
								animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, delay: 0.4 } }}
								initial={{ opacity: 0, scale: 0.6 }}
								exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.25, delay: 0.4 } }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setMobileNavShowing(false)}
								className="relative -bottom-[70px] w-[48px] h-[48px] bg-eccblue rounded-full flex items-center justify-center"
							>
								<img src="/assets/Images/closeIcon.svg" />
							</motion.div>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</nav>
	);
};
export default NavBar;
