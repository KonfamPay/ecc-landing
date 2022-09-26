import { RefObject, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NavBarProps {
	whatWeOfferRef: RefObject<HTMLDivElement>;
	contactUsRef: RefObject<HTMLDivElement>;
	joinWaitlistButtonRef: RefObject<HTMLFormElement>;
}

export const NavBar: React.FC<NavBarProps> = ({ whatWeOfferRef, contactUsRef, joinWaitlistButtonRef }) => {
	const [scrollReport, setScrollReport] = useState(0);
	useEffect(() => {
		window?.addEventListener("scroll", () => {
			setScrollReport(window.pageYOffset);
			console.log(window.pageYOffset);
		});
		return () =>
			window?.removeEventListener("scroll", () => {
				setScrollReport(window.pageYOffset);
			});
	}),
		[];
	const [mobileNavShowing, setMobileNavShowing] = useState(false);
	const navItemVariants = {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.22 } },
	};
	return (
		<nav className="bg-clearblue flex px-[20px] lg:px-[100px] justify-between items-center py-[20px] fixed top-0 left-0 right-0 z-20">
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.22 }}
				className="w-[42px] z-50 lg:w-[65px]"
				src="/assets/Images/eccLogo.svg"
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.22 }}
				className="hidden md:flex gap-x-[67px] text-black text-[18px]"
			>
				<p
					style={{ color: scrollReport < 600 ? "#0B63C5" : "black" }}
					className="text-eccblue cursor-pointer"
					onClick={() => window?.scrollTo({ top: 0, behavior: "smooth" })}
				>
					Home
				</p>
				<p
					style={{ color: scrollReport >= 600 && scrollReport < 2500 ? "#0B63C5" : "black" }}
					onClick={() => whatWeOfferRef.current?.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" })}
					className="cursor-pointer"
				>
					What we offer
				</p>
				<p
					className="cursor-pointer"
					style={{ color: scrollReport >= 2500 ? "#0B63C5" : "black" }}
					onClick={() => contactUsRef.current?.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" })}
				>
					Contact us
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.22 }}
				className="flex md:block gap-x-[18px] items-center"
			>
				<button
					onClick={() => joinWaitlistButtonRef.current?.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" })}
					className="h-[30px] lg:h-[60px] sm:h-[40px] w-[97px] sm:w-[120px] lg:w-[166px] font-semibold bg-eccblue text-[12px] sm:text-[15px] lg:text-[18px] rounded-[5px] lg:rounded-[12px] shadow-[0px_2px_0px_rgba(0,0,0,1)] lg:shadow-[0px_5px_0px_rgba(0,0,0,1)] relative active:translate-y-[2px] lg:active:translate-y-[5px] active:shadow-md transition-all text-white"
				>
					Join Waitlist
				</button>
				<div
					onClick={() => setMobileNavShowing(true)}
					className="block md:hidden active:scale-90 transition-[200ms]"
				>
					<img src="/assets/Images/mobileHamburgerNav.svg" />
				</div>
			</motion.div>
			<AnimatePresence>
				{mobileNavShowing && (
					<motion.nav
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.22 }}
						className="fixed top-0 left-0 right-0 bottom-0 bg-clearblue overflow-hidden md:hidden"
					>
						<div className="w-full h-full flex flex-col justify-center items-center relative bottom-[10px] xxsm:gap-y-[30px] xsm:gap-y-[79px]">
							<div className="flex flex-col items-center text-[22px] text-black xsm:gap-y-[50px]  py-[20px] xxsm:gap-y-[25px]">
								<motion.p
									variants={navItemVariants}
									style={{ color: scrollReport < 347 ? "#0B63C5" : "black" }}
									initial={{ opacity: 0, y: 50 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.22 } }}
									onClick={() => {
										setMobileNavShowing(false);
										window.scrollTo({ top: 0, behavior: "smooth" });
									}}
								>
									Home
								</motion.p>
								<motion.p
									variants={navItemVariants}
									initial={{ opacity: 0, y: 50 }}
									style={{ color: scrollReport >= 347 && scrollReport < 1800 ? "#0B63C5" : "black" }}
									exit={{ opacity: 0 }}
									onClick={() => {
										setMobileNavShowing(false);
										whatWeOfferRef.current?.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
									}}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.22 } }}
								>
									What we offer
								</motion.p>
								<motion.p
									variants={navItemVariants}
									initial={{ opacity: 0, y: 50 }}
									exit={{ opacity: 0 }}
									style={{ color: scrollReport >= 1800 ? "#0B63C5" : "black" }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.22 } }}
									onClick={() => {
										setMobileNavShowing(false);
										contactUsRef.current?.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
									}}
								>
									Contact us
								</motion.p>
							</div>
							<motion.button
								initial={{ opacity: 0, y: 50 }}
								exit={{ opacity: 0 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									setMobileNavShowing(false);
									joinWaitlistButtonRef.current?.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
								}}
								animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.22 } }}
								className="font-bold text-[14.67px] w-[142px] h-[44px] bg-eccblue rounded-[7.24px] text-white"
							>
								Join Waitlist
							</motion.button>
							<motion.div
								animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, delay: 0.4 } }}
								initial={{ opacity: 0, scale: 0.6 }}
								exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.25, delay: 0.4 } }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									setMobileNavShowing(false);
								}}
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
