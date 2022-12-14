import Box from "../../Components/InsightBoxes";
import CountUp from "react-countup";

export const Insights: React.FC = () => {
	return (
		<div className="mt-[100px]">
			<div className="lg:block hidden h-[370px] bg-gradient-to-r from-[#0B63C5] to-[#073D79]">
				<div className="flex flex-row max-w-[1290px] mx-auto">
					<div className="w-[50%] px-[100px] flex flex-col items-center justify-center text-white">
						<p className="font-semibold text-[30px] ">Quick Insight into our Complaints Statistics</p>
						<p className="my-4">We are the voice of Consumers. We are solely driven by the lines of thought that business is not just a transaction, but a relationship that allows both parties to benefit.</p>
						<div className="flex w-full items-start mt-3">
							<button className="bg-white w-auto py-3.5 px-3.5 rounded-md text-eccblue flex flex-row space-x-3.5">
								<img
									src="./assets/Images/downloadIcon.svg"
									alt=""
								/>
								<p>Download Full Report</p>
							</button>
						</div>
					</div>
					<div className="w-[60%] flex flex-col items-center ">
						<div className="flex flex-row relative bottom-5 ">
							<Box
								direction="left"
								type="big"
								item1="Total Complaints"
								item2={"43,764"}
								item3="Confirmed Causes"
								item4={"38,200"}
							/>
							<Box
								direction="right"
								type="big"
								item1="Scam Cases"
								item2={"30,605"}
								item3="Unsatisfied Transactions"
								item4={"7,595"}
							/>
						</div>
						<div
							data-aos="fade-up"
							className="flex flex-col justify-center items-center w-[220px] h-[200px] bg-white border-[3px] top-7  relative border-solid border-eccblue rounded-[14px]"
						>
							<p className="font-semibold text-[16px]">Value of complaints</p>
							<div className="font-semibold text-[20.4px] flex flex-row items-center text-eccblue">
								<img
									className="w-[20px] h-[20px]"
									src="./assets/Images/NairaSign.svg"
									alt=""
								/>{" "}
								<span> {"903,291,695"}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="lg:hidden flex flex-col bg-gradient-to-r from-[#0B63C5] to-[#073D79] items-center">
				<div className="text-white mt-6 px-4 text-center ">
					<p className="text-[20px]">Quick Insight into our Complaints Statistics</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex flex-col gap-7 mb-6 mt-8 sm:flex-row">
						<Box
							direction="left"
							type="small"
							item1="Total Complaints"
							item2={"43,764"}
							item3="Confirmed Causes"
							item4={"38,200"}
						/>
						<Box
							direction="right"
							type="small"
							item1="Scam Cases"
							item2={"30,605"}
							item3="Unsatisfied Transactions"
							item4={"7,595"}
						/>
					</div>
					<div
						data-aos="fade-up"
						className="flex flex-col justify-center items-center w-[175px] h-[160px] bg-white border-[1px] top-7 border-solid border-eccblue rounded-[14px]"
					>
						<p className="font-semibold text-[12px]">Value of complaints</p>
						<div className="font-semibold text-[14.4px] flex flex-row items-center text-eccblue">
							<img
								className="w-[14px] h-[14px]"
								src="./assets/Images/NairaSign.svg"
								alt=""
							/>{" "}
							<span>{"903,291,695"}</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center w-[80%] text-white px-3 mt-6">
					<p className="text-center">We are the voice of Consumers. We are solely driven by the lines of thought that business is not just a transaction, but a relationship that allows both parties to benefit.</p>
					<button className="bg-white w-auto items-center p-2 rounded-md text-eccblue flex mb-8 flex-row space-x-3.5 mt-5 text-[14px] ">
						<img
							className="w-[14px] h-[14px]"
							src="./assets/Images/downloadIcon.svg"
							alt=""
						/>
						<p>Download Full Report</p>
					</button>
				</div>
			</div>
		</div>
	);
};
