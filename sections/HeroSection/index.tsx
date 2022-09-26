import { RefObject, useEffect, useState } from "react";
import { ThankYou } from "..";
import { motion } from "framer-motion";

interface HeroSectionProps {
	joinWaitlistButtonRef: RefObject<HTMLFormElement>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ joinWaitlistButtonRef }) => {
	const [isModalSHowing, setIsModalShowing] = useState<boolean>(false);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	useEffect(() => {
		if (isModalSHowing == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isModalSHowing]);
	const [contactFormData, setContactFormData] = useState({
		email: "",
	});
	const [formState, setFormState] = useState<any>({
		submitted: false,
		success: false,
		message: null,
	});

	const handleContactFormSubmit = async (e: any) => {
		e.preventDefault();
		setIsDisabled(true);
		if (contactFormData.email.length > 10) {
			try {
				const response = await fetch("https://eccwaitlistbackend.herokuapp.com/waitlist", {
					method: "POST",
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contactFormData).trim(),
				});

				if (response.status === 201) {
					setFormState({ submitted: true, success: true });
					setContactFormData({
						email: "",
					});
					setIsModalShowing(true);
					setIsDisabled(false);
				} else if (response.status === 205) {
					window.alert("You have already registered for the waitlist 🎉");
					setIsDisabled(false);
				}
			} catch (error: any) {
				window.alert("Error Sending Message 😢. Try again 🤕.");
				setFormState({
					submitted: true,
					success: false,
					message: error.message,
				});
				setIsDisabled(false);
			}
		} else {
			window.alert("Email Address should be longer than 10 characters");
		}
	};
	return (
		<>
			<section className="md:pt-[80px] bg-clearblue relative w-full">
				<motion.h1
					initial={{ opacity: 0, scale: 1.2, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.4 }}
					className="text-center pt-[17px] text-[24px] md:text-[36px] lg:text-[48px] font-semibold md:font-medium max-w-[229px] md:max-w-[810px] mx-auto"
				>
					<span className="relative">
						M
						<motion.img
							initial={{ opacity: 0, scale: 0.7 }}
							animate={{ opacity: 1, scale: 1, transition: { delay: 2, duration: 0.4 } }}
							className="absolute bottom-[19px] md:-top-[35px] -left-[18px] md:-left-[33px]"
							src="/assets/Images/Mtopleft.svg"
						/>
					</span>
					ake &{" "}
					<span className="text-eccblue relative ">
						resolve
						<motion.img
							initial={{ opacity: 0, scale: 0.7 }}
							animate={{ opacity: 1, scale: 1, transition: { delay: 2, duration: 0.4 } }}
							className="absolute -bottom-[5px] right-0"
							src="/assets/Images/dashedLine.svg"
						/>
					</span>{" "}
					complaints easily
					<motion.figure
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 1.3 } }}
					>
						<motion.img
							animate={{ rotateZ: [0, 720], transition: { repeat: Infinity, duration: 4 } }}
							className="absolute left-[5.5%] sm:left-[7%] md:left-[40px] lg:left-[85px] top-[45px] md:top-[130px] w-[20px] md:w-[30px] lg:w-[44px]"
							src="/assets/Images/triangle1.png"
						/>
					</motion.figure>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4, delay: 0.85 }}
					className=" text-[14px] md:text-[17px] lg:text-[20px] max-w-[377px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1027px] text-center mx-auto mt-[14px] px-[15px] md:mt-[15px] text-[#434343]"
				>
					E-commerce Complaint helps consumers address brand problems. It extends the usual complaint redressal process, allowing consumers to readily file grievances and have them resolved. We utilise Social Media, SMS, Email, and phone calls to add responsibility to grievances.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 1.3 }}
					className="mt-[36px] justify-center"
				>
					<form
						ref={joinWaitlistButtonRef}
						onSubmit={handleContactFormSubmit}
					>
						<div className="flex w-full max-w-[329px] lg:max-w-[713px] gap-x-[7px] lg:gap-x-[21px]  mx-auto pb-[100px] md:pb-[140px] lg:pb-[178px]">
							<input
								type="email"
								placeholder="Enter email address here"
								className="focus:outline-0 rounded-[5px] lg:rounded-[12px] placeholder:text-[12px] text-[12px] lg:placeholder:text-[18px] lg:text-[18px] pl-[10px] lg:pl-[15px] lg:py-[17px] w-full max-w-[225px] md:max-w-[526px]"
								value={contactFormData.email}
								onChange={(e) =>
									setContactFormData({
										...contactFormData,
										email: e.target.value,
									})
								}
							/>
							<input
								type="submit"
								id="submit"
								className={`w-[97px] md:w-[160px] lg:w-[160px] h-[30px] lg:h-[60px] font-semibold text-white text-[12px] lg:text-[18px] rounded-[5px] lg:rounded-[12px] bg-eccblue shadow-[0px_2px_0px_rgba(0,0,0,1)]  lg:shadow-[0px_5px_0px_rgba(0,0,0,1)] ${!isDisabled ? "active:translate-y-[2px] active:shadow-md transition-all lg:active:translate-y-[5px] cursor-pointer" : "cursor-not-allowed"}`}
								value="Join Waitlist"
								disabled={isDisabled}
							/>
						</div>
					</form>
				</motion.div>
			</section>
			<div className="max-h-[150px] md:max-h-none relative flex justify-center mb-[31px] sm:mb-[105px] md:mb-[230px] lg:mb-[350px]">
				<img
					className="w-full absolute top-0 -z-10"
					src="/assets/Images/curveImage.svg"
				/>
				<figure className="relative scale-[0.3] md:scale-75 sm:scale-50 lg:scale-90 xl:scale-100 bottom-[56px] lg:bottom-[9px] sm:bottom-[40px] md:bottom-[20px] xl:bottom-0 ">
					<motion.img
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { delay: 0.8 },
						}}
						className="absolute -top-[200px] -left-[100px] md:-top-[150px] lg:-top-[200px] md:-left-[68px] lg:-left-[158px] md:w-[90px] lg:w-[143px]"
						src="/assets/Images/arrow1.svg"
					/>
					<motion.figure
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 1 } }}
					>
						<motion.img
							animate={{ scale: [0.8, 1, 0.8], transition: { duration: 3, repeat: Infinity } }}
							src="/assets/Images/rightDots.svg"
							className="absolute -right-[100px] md:-right-[80px] xl:-right-[180px] 2xl:-right-[240px] md:-top-[120px] -top-[100px]"
						/>
					</motion.figure>
					<motion.figure
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 1 } }}
					>
						<motion.img
							animate={{ scale: [0.8, 1, 0.8], transition: { duration: 3, repeat: Infinity } }}
							src="/assets/Images/LeftDots.svg"
							className="absolute md:-left-[90px] -left-[125px] lg:-left-[120px] xl:-left-[160px] 2xl:-left-[230px] top-[90px] md:top-[80px] lg:top-[100px]"
						/>
					</motion.figure>
					<motion.img
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.2 }}
						className="relative -top-[20px] min-w-[787px] max-w-[787px] w-full"
						src="/assets/Images/herobg.svg"
					/>
					<figure className="absolute left-[calc(50%-315px)] -top-[110px]">
						<figure className="relative">
							<motion.img
								initial={{ opacity: 0, scale: 0.8, y: 80 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ delay: 1.5, duration: 0.4 }}
								className="w-full max-w-[630px]"
								src="/assets/Images/desktopDashboard.png"
							/>
							<motion.img
								initial={{ opacity: 0, scale: 0.8, y: 80 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ delay: 1.7, duration: 0.4 }}
								className="absolute w-full max-w-[160px] top-[218px] -right-[70px]"
								src="/assets/Images/mobileDashboard.png"
							/>
						</figure>
					</figure>
				</figure>
			</div>
			{isModalSHowing && <ThankYou setIsModalShowing={() => setIsModalShowing(!isModalSHowing)} />}
		</>
	);
};
