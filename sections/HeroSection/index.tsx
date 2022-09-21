import { SetStateAction, useState } from "react";
import { ThankYou } from "../";

export const HeroSection = () => {
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
			<section className="md:pt-[80px] bg-clearblue relative w-full">
				<h1 className="text-center pt-[17px] text-[24px] md:text-[36px] lg:text-[48px] font-semibold md:font-medium max-w-[229px] md:max-w-[810px] mx-auto">
					<span className="relative">
						M
						<img
							className="absolute bottom-[19px] md:-top-[35px] -left-[18px] md:-left-[33px]"
							src="/assets/Images/Mtopleft.svg"
						/>
					</span>
					ake &{" "}
					<span className="text-eccblue relative ">
						resolve
						<img
							className="absolute -bottom-[5px] right-0"
							src="/assets/Images/dashedLine.svg"
						/>
					</span>{" "}
					complaints easily
					<img
						className="absolute left-[5.5%] sm:left-[7%] md:left-[40px] lg:left-[85px] top-[45px] md:top-[130px] w-[20px] md:w-[30px] lg:w-[44px]"
						src="/assets/Images/triangle1.png"
					/>
				</h1>
				<p className=" text-[14px] md:text-[17px] lg:text-[20px] max-w-[377px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1027px] text-center mx-auto mt-[14px] px-[15px] md:mt-[15px] text-[#434343]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel vulputate et pharetra ornare. Pellentesque orci amet in eget est enim vivamus gravida nunc. Pharetra pellentesque.
				</p>
				<div className="mt-[36px] justify-center">
					<form onSubmit={handleContactFormSubmit}>
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
								className="w-[97px] md:w-[160px] lg:w-[160px] h-[30px] lg:h-[60px] font-semibold text-white text-[12px] lg:text-[18px] rounded-[5px] lg:rounded-[12px] bg-eccblue shadow-[0px_2px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-md transition-all lg:shadow-[0px_5px_0px_rgba(0,0,0,1)] lg:active:translate-y-[5px] cursor-pointer"
								value="Join Waitlist"
							/>
						</div>
					</form>
				</div>
			</section>
			<div className="max-h-[150px] md:max-h-none relative flex justify-center mb-[31px] sm:mb-[105px] md:mb-[230px] lg:mb-[350px]">
				<img
					className="w-full absolute top-0 -z-10"
					src="/assets/Images/curveImage.svg"
				/>
				<figure className="relative scale-[0.3] md:scale-75 sm:scale-50 lg:scale-90 xl:scale-100 bottom-[56px] lg:bottom-[9px] sm:bottom-[40px] md:bottom-[20px] xl:bottom-0 ">
					<img
						className="absolute -top-[200px] -left-[100px] md:-top-[150px] lg:-top-[200px] md:-left-[68px] lg:-left-[158px] md:w-[90px] lg:w-[143px]"
						src="/assets/Images/arrow1.svg"
					/>
					<img
						src="/assets/Images/rightDots.svg"
						className="absolute -right-[100px] md:-right-[80px] xl:-right-[180px] 2xl:-right-[240px] md:-top-[120px] -top-[100px]"
					/>
					<img
						src="/assets/Images/leftDots.svg"
						className="absolute md:-left-[90px] -left-[125px] lg:-left-[120px] xl:-left-[160px] 2xl:-left-[230px] top-[90px] md:top-[80px] lg:top-[100px]"
					/>
					<img
						className="relative -top-[20px] min-w-[787px] max-w-[787px] w-full"
						src="/assets/Images/herobg.svg"
					/>
					<figure className="absolute left-[calc(50%-315px)] -top-[110px]">
						<figure className="relative">
							<img
								className="w-full max-w-[630px]"
								src="/assets/Images/desktopDashboard.png"
							/>
							<img
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
