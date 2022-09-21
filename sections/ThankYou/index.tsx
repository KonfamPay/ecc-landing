/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ThankYouProps {
	setIsModalShowing: Dispatch<SetStateAction<boolean>>;
}

export const ThankYou: React.FC<ThankYouProps> = ({ setIsModalShowing }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2 }}
			className="fixed top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center"
		>
			<div className="relative bg-white rounded-lg sm:rounded-2xl w-fit max-w-[701px] mx-6 h-fit">
				<img
					src="../icons/thank-you.svg"
					className="w-full pr-7 sm:pr-12"
					alt=""
				/>
				<img
					src="../icons/close.svg"
					className="absolute top-[10px] sm:top-6 right-[10px] sm:right-9 w-[18px] sm:w-[30px] h-[18px] sm:h-[30px] cursor-pointer"
					alt=""
					onClick={() => {
						setIsModalShowing(false);
					}}
				/>
				<div className="pt-5 sm:pt-10 pb-7 sm:pb-14 px-3.5 sm:px-9">
					<p className="text-eccblue text-center text-[15px] sm:text-[32px]">Thank You!</p>
					<p className="text-[#434343] mt-5 text-center text-xs sm:text-lg">We have recieved your email address. You will be the first person we’ll notify when we launch soon. Thank you for being a part of project </p>
				</div>
			</div>
		</motion.div>
	);
};
