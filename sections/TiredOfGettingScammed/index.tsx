import { useEffect, useState } from "react";
import { ThankYou } from "..";

export const TiredOfGettingScammed = () => {
	const [isModalSHowing, setIsModalShowing] = useState<boolean>(false);
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
				}
			} catch (error: any) {
				window.alert("Error Sending Message 😢. Try again 🤕.");
				setFormState({
					submitted: true,
					success: false,
					message: error.message,
				});
			}
		} else {
			window.alert("Email Address should be longer than 10 characters");
		}
	};
	return (
		<>
			<div className="flex px-[0px] xl:px-[100px] justify-between items-center py-[20px] xl:pt-[235px] my-[100px] xl:mt-0">
				<div className="bg-[#F1F7FE] px-[] xl:px-[32px] xl:rounded-[20px] pt-[74px] pb-[36px] xl:py-[82px] w-full relative">
					<div className="xl:w-[700px] flex flex-col gap-[16px]">
						<h1
							data-aos="fade-up"
							className="text-[#0B63C5] text-[18px] text-center xl:text-left xl:text-[30px] px-[30px] xl:px-[0] font-medium"
						>
							Tired of Getting Scammed by Online Vendors and Brands?
						</h1>
						<p
							data-aos="fade-up"
							className="text-[#434343] text-[14px] text-center xl:text-left xl:text-[20px] px-[30px] xl:px-[0]"
						>
							We make it easy for you to get your money back or get a replacement or compensation.
						</p>
						<form
							className="xl:pt-[66px] px-[24px] xl:px-[unset] flex justify-center gap-[7px] w-[100%] xl:gap-[21px]"
							onSubmit={handleContactFormSubmit}
						>
							<input
								type="email"
								className="placeholder:text-[#B4A5A5] text-[12px] xl:text-[18px] w-[250px] lg:w-[520px] rounded-[5px] outline-none bg-[#FFFFFF] xl:rounded-[12px] px-[10px] py-[6px] xl:p-[16px] text-[#000000]"
								placeholder="Enter your email address here"
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
								className="py-[6px] px-[12px] xl:py-[16px] xl:px-[28px] bg-[#0B63C5] font-medium rounded-[5px] xl:rounded-[12px] text-[#FFFFFF] text-[12px] xl:text-[18px] shadow-[0px_2px_0px_rgba(0,0,0,1)] xl:shadow-[0px_5px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-md transition-all xl:active:translate-y-[5px] cursor-pointer"
								value="Join Waitlist"
							/>
						</form>
					</div>
					<div className="rounded-[20px] border-[#0B63C5] border-[3px] border-dashed p-[8px] xl:p-[28px] xl:w-[434px] absolute top-[-70px] left-[50%] translate-x-[-50%] xl:left-[unset] xl:translate-x-[unset] xl:right-[-50px] flex justify-center">
						<img
							src="assets/Images/awareness.png"
							alt="awareness"
							className="w-[110px] xl:w-[378px]"
						/>
					</div>
					<img
						src="assets/Images/blackDots.png"
						alt="black-dot"
						className="w-[30px] lg:w-[unset] absolute bottom-[-15px] lg:bottom-[unset] left-[24px] lg:top-[-40px] lg:left-[48px]"
					/>
					<img
						src="assets/Images/blueDots.png"
						alt="blue-dot"
						className="w-[30px] lg:w-[unset] absolute top-[-15px] lg:top-[unset] right-[15px] lg:bottom-[-28px] lg:right-[95px]"
					/>
					<img
						src="assets/Images/blackPolygon.png"
						alt="black-polygon"
						className="absolute w-[14.43px] lg:w-[unset] right-[138px] lg:right-[unset] bottom-[1px] lg:bottom-[-45px] lg:left-[48px]"
					/>
					<img
						src="assets/Images/smallBlackPolygon.png"
						alt="black-polygon"
						className="absolute w-[14.43px] lg:w-[unset] top-[12px] lg:top-[unset] right-[86px] bottom-[-65px] lg:right-[280px]"
					/>
					<img
						src="assets/Images/bluePolygon.png"
						alt="Blue-polygon"
						className="absolute left-[81px] lg:left-[unset] lg:hidden xl:block top-[-35px] lg:top-[unset] w-[14.43px] lg:w-[unset] lg:bottom-[29px] lg:right-[337px]"
					/>
				</div>
			</div>
			{isModalSHowing && <ThankYou setIsModalShowing={() => setIsModalShowing(!isModalSHowing)} />}
		</>
	);
};
