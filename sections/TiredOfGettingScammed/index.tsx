import { useState } from "react";
import { ThankYou } from "..";

export const TiredOfGettingScammed = () => {
	const [isModalSHowing, setIsModalShowing] = useState<boolean>(false);
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
					// window.alert("Message sent!");
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
			<div className="flex px-[0px] lg:px-[100px] justify-between items-center py-[20px] lg:pt-[235px] my-[100px] lg:mt-0">
				<div className="bg-[#F1F7FE] px-[] lg:px-[32px] lg:rounded-[20px] pt-[74px] pb-[36px] lg:py-[82px] w-full relative">
					<div className="lg:w-[700px] flex flex-col gap-[16px]">
						<h1
							data-aos="fade-up"
							className="text-[#0B63C5] text-[18px] text-center lg:text-left lg:text-[30px] px-[30px] lg:px-[0] font-medium"
						>
							Tired of Getting Scammed by Online Vendors and Complanies?
						</h1>
						<p
							data-aos="fade-up"
							className="text-[#434343] text-[14px] text-center lg:text-left lg:text-[20px] px-[30px] lg:px-[0]"
						>
							Join our fight against unsatisfied services and scam cases. Sign up for our waitlist to be the first person to know when we launch.{" "}
						</p>
						<form
							className="lg:pt-[66px] px-[24px] lg:px-[unset] flex gap-[7px] w-[100%] lg:gap-[21px]"
							onSubmit={handleContactFormSubmit}
						>
							<input
								type="email"
								className="placeholder:text-[#B4A5A5] text-[12px] lg:text-[18px] w-[250px] lg:w-[520px] rounded-[5px] outline-none bg-[#FFFFFF] lg:rounded-[12px] px-[10px] py-[6px] lg:p-[16px] text-[#000000]"
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
								className="py-[6px] px-[12px] lg:py-[16px] lg:px-[28px] bg-[#0B63C5] font-medium rounded-[5px] lg:rounded-[12px] text-[#FFFFFF] text-[12px] lg:text-[18px] shadow-[0px_2px_0px_rgba(0,0,0,1)] lg:shadow-[0px_5px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-md transition-all lg:active:translate-y-[5px] cursor-pointer"
								value="Join Waitlist"
							/>
						</form>
					</div>
					<div className="rounded-[20px] border-[#0B63C5] border-[3px] border-dashed p-[8px] lg:p-[28px] lg:w-[434px] absolute top-[-70px] left-[50%] translate-x-[-50%] lg:left-[unset] lg:translate-x-[unset] lg:right-[-50px] flex justify-center">
						<img
							src="assets/Images/awareness.png"
							alt="awareness"
							className="w-[110px] lg:w-[378px]"
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
						className="absolute left-[81px] lg:left-[unset] top-[-35px] lg:top-[unset] w-[14.43px] lg:w-[unset] lg:bottom-[29px] lg:right-[337px]"
					/>
				</div>
			</div>
			{isModalSHowing && <ThankYou setIsModalShowing={() => setIsModalShowing(!isModalSHowing)} />}
		</>
	);
};
