import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="bg-black text-white px-4 sm:px-11">
			<div className="flex flex-col items-center justify-center sm:font-medium  pt-14">
				<div className="w-[51px] sm:w-[100px] h-[51px] sm:h-[100px] flex items-center justify-center bg-clearblue rounded-full">
					<div className="w-[32.65px] sm:w-[65px] h-[11px] sm:h-[22px] relative">
						<Image
							src="/assets/Images/eccLogo.svg"
							alt="Picture of the author"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
				<p className="max-w-[739px] text-center text-sm sm:text-xl mt-8">Join our fight against Diam eget elementum pellentesque et urna. Sign up for our waitlist to be the first person to know when we launch. </p>
				<p className="max-w-[530px] text-center text-sm sm:text-xl mt-5">Email Address: support@ecommercecomplaint.com</p>
				<div className="mt-5 flex items-center justify-center space-x-5 sm:space-x-8">
					<Link
						href={"/"}
						passHref
					>
						<div className="w-[22px] sm:w-9 h-[22px] sm:h-9 relative cursor-pointer">
							<Image
								src="/assets/social-icons/facebook.svg"
								alt="Picture of the author"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</Link>
					<Link
						href={"/"}
						passHref
					>
						<div className="w-[22px] sm:w-9 h-[22px] sm:h-9 relative cursor-pointer">
							<Image
								src="/assets/social-icons/instagram.svg"
								alt="Picture of the author"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</Link>
					<Link
						href={"/"}
						passHref
					>
						<div className="w-[22px] sm:w-9 h-[22px] sm:h-9 relative cursor-pointer">
							<Image
								src="/assets/social-icons/twitter.svg"
								alt="Picture of the author"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</Link>
				</div>
			</div>
			<hr className="bg-white border-white w-full max-w-[1352px] mx-auto border mt-9 sm:mt-14" />
			<p className="text-center flex items-center justify-center pt-5 sm:pt-9 pb-5 sm:pb-6 text-[10px] sm:text-2xl">
				<span className="text-xs sm:text-2xl pr-2">&copy;</span>Copyright 2022. E-commerce complaints, Nigeria.
			</p>
		</div>
	);
};
