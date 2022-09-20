/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";

const Contact = () => {
	const [contactFormData, setContactFormData] = useState({
		email: "",
	});
	const [formState, setFormState] = useState({
		submitted: false,
		success: false,
		message: null,
	});

	const handleContactFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/waitlist", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactFormData),
			});

			if (response.status === 200) {
				setFormState({ submitted: true, success: true });
				setContactFormData({
					email: "",
				});
				window.alert("Message sent!");
			}
		} catch (error) {
			window.alert("Error Sending Message 😢. Try again 🤕.");
			setFormState({
				submitted: true,
				success: false,
				message: error.message,
			});
		}
	};
	return (
		<>
			<div className="mt-[60px] mx-auto justify-center">
				<div className="">
					<div className="mx-[30px] md:mx-[60px] lg:mx-[60px]">
						<p className="text-white font-[600] text-[40px]">Let&apos;s chat</p>
						<hr className="light-blue border-[3px] w-[85px] mt-[16px]" />
					</div>
					<div className="text-white mt-[80px] mx-[30px] lg:ml-[60px] lg:mr-[120px]">
						<form onSubmit={handleContactFormSubmit}>
							<div className="mt-[45px] grid grid-cols-1 md:grid-cols-2 gap-y-[33px] gap-x-[46px]">
								<div className="flex flex-col space-y-[45px]">
									<input
										type="text"
										name="name"
										placeholder="What’s your email ?"
										className="grey placeholder:-pl-[15px] placeholder:text-[16px] placeholder:text-white text-[16px] px-[20px] h-[70px] rounded-[30px] outline-none"
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
										className="mt-[40px] custom-shadow rounded-full text-center items-center justify-center grey w-[170px] h-[70px] duration-500 ease-in delay-[10ms] hidden md:block"
										value="Send Message"
									/>
								</div>
							</div>
							<input
								type="submit"
								id="submit"
								className="mt-[40px] custom-shadow mx-auto rounded-full text-center grey w-[170px] h-[60.3px] duration-500 ease-in delay-[10ms] md:hidden"
								value="Send Message"
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
