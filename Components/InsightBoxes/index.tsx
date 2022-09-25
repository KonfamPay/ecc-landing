import React from "react";
import CountUp from "react-countup";

interface BoxProps {
	item1: string;
	item2: string;
	item3: string;
	item4: string;
	type: string;
	direction: string;
}

const Box: React.FC<BoxProps> = ({ item1, item2, item3, item4, type, direction }) => {
	return (
		<div>
			{type == "big" ? (
				<div
					data-aos="fade-up"
					style={{ width: "200px" }}
					className="flex flex-col items-center  justify-center h-[200px] bg-white border-[3px] mr-2 border-solid border-eccblue rounded-[14px]"
				>
					<p className="font-semibold text-[16px]">{item1}</p>
					<p className="font-semibold text-[20.4px] text-eccblue">{item2}</p>
					<p className="font-semibold text-[16px] text-center">{item3}</p>
					<p className="font-semibold text-[20.4px] text-eccblue">{item4}</p>
				</div>
			) : (
				<div
					data-aos="fade-up"
					style={{ width: "175px" }}
					className="flex flex-col items-center  justify-center h-[160px] bg-white border-[1px]  border-solid border-eccblue rounded-[14px]"
				>
					<p className="font-semibold text-[12px]">{item1}</p>
					<p className="font-semibold text-[14.4px] text-eccblue">{item2}</p>
					<p className="font-semibold text-[12px] w-[80%] text-center">{item3}</p>
					<p className="font-semibold text-[14.4px] text-eccblue">{item4}</p>
				</div>
			)}
		</div>
	);
};

export default Box;
