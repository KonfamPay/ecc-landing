import React from "react";
import CountUp from "react-countup";

interface BoxProps {
	item1: string;
	item2: number;
	item3: string;
	item4: number;
	type: string;
}

const Box: React.FC<BoxProps> = ({ item1, item2, item3, item4, type }) => {
	return (
		<div>
			{type == "big" ? (
				<div
					style={{ width: "200px", marginRight: "1.5rem" }}
					className="flex flex-col items-center  justify-center h-[200px] bg-white border-[3px] mr-2 border-solid border-eccblue rounded-[14px]"
				>
					<p className="font-semibold text-[16px]">{item1}</p>
					<p className="font-semibold text-[20.4px] text-eccblue">
						<CountUp
							duration={2}
							start={0}
							end={item2}
						></CountUp>
					</p>
					<p className="font-semibold text-[16px] text-center">{item3}</p>
					<p className="font-semibold text-[20.4px] text-eccblue">
						<CountUp
							duration={2}
							start={0}
							end={item4}
						></CountUp>
					</p>
				</div>
			) : (
				<div
					style={{ width: "175px", marginRight: "0.5rem" }}
					className="flex flex-col items-center  justify-center h-[160px] bg-white border-[1px] mr-2 border-solid border-eccblue rounded-[14px]"
				>
					<p className="font-semibold text-[12px]">{item1}</p>
					<p className="font-semibold text-[14.4px] text-eccblue">
						<CountUp
							duration={2}
							start={0}
							end={item2}
						></CountUp>
					</p>
					<p className="font-semibold text-[12px] w-[80%] text-center">{item3}</p>
					<p className="font-semibold text-[14.4px] text-eccblue">
						<CountUp
							duration={2}
							start={0}
							end={item4}
						></CountUp>
					</p>
				</div>
			)}
		</div>
	);
};

export default Box;
