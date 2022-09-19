const WhatWeOffer = () => {
	return (
		<div>
			<header className="flex flex-col w-screen items-center">
				<div className="flex flex-row w-auto justify-between items-center">
					<img
						className="lg:w-[40px] lg:h-[38px] w-[15px] h-[15px]"
						src="./assets/Images/WhatWeOffer/boxes.svg"
						alt=""
					/>
					<div className="w-auto flex flex-row justify-between lg:mx-[100px] mx-[30px]">
						<div className=" font-medium lg:text-[41px] text-[20px]">
							What we<span className="text-eccblue mx-3">offer</span>to our users
						</div>
					</div>
					<img
						className="lg:w-[40px] lg:h-[38px] w-[15px] h-[15px]"
						src="./assets/Images/WhatWeOffer/boxes.svg"
						alt=""
					/>
				</div>
				<div className="lg:w-[600px] w-[80%] mt-4">
					<p className=" text-center">We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel </p>
				</div>
			</header>
			<div className="lg:block hidden active:scale-90 transition-[200ms]">
				<main className="flex flex-col w-[60vw] mx-auto mt-[100px] ">
					<div className="w-full flex justify-end mb-4">
						<div className="flex flex-col items-center ">
							<div>
								<img
									className="w-[60px] h-[60px]"
									src="./assets/Images/WhatWeOffer/file.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="./assets/Images/WhatWeOffer/arrow-green.svg"
									alt=""
								/>
							</div>
						</div>

						<div className="text-justify w-[40%] ml-12">
							<p className="text-[18px] font-semibold">Easy Complaint Filing and Resolution</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel </p>
						</div>
					</div>

					<div className="w-full flex  flex-row justify-start mb-4">
						<div className="text-justify w-[40%] mr-12 ">
							<p className="text-[18px] font-semibold">Quick search through thousands of Scam Records</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel </p>
						</div>
						<div className="flex flex-col items-center ">
							<div>
								<img
									className="w-[60px] h-[60px]"
									src="./assets/Images/WhatWeOffer/redIcon.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="./assets/Images/WhatWeOffer/arrowRed.svg"
									alt=""
								/>
							</div>
						</div>
					</div>

					<div className="w-full flex justify-end mb-4">
						<div className="flex flex-col items-center ">
							<div>
								<img
									className="w-[60px] h-[60px]"
									src="./assets/Images/WhatWeOffer/blueIcon.svg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="./assets/Images/WhatWeOffer/arrowBlue.svg"
									alt=""
								/>
							</div>
						</div>
						<div className="text-justify w-[40%] ml-12">
							<p className="text-[18px] font-semibold">Write a complaint letter</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel </p>
						</div>
					</div>

					<div className="w-full flex  flex-row justify-start mb-4">
						<div className="text-justify w-[40%] mr-12">
							<p className="text-[18px] font-semibold">{`Use an escrow service (Konfampay)`}</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel </p>
						</div>
						<div>
							<div>
								<img
									className="w-[60px] h-[60px]"
									src="./assets/Images/WhatWeOffer/konfampayIcon.svg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</main>
			</div>

			{/*the mobile view starts here*/}
			<div className="lg:hidden">
				<main className="px-4 mt-[70px]">
					<div className="mb-4">
						<img
							className="h-[41px] w-[41px]"
							src="./assets/Images/WhatWeOffer/file.svg"
							alt=""
						/>
						<div className="text-left my-4 text-[14px]">
							<p className=" font-semibold text-[16px]  mb-2">Easy Complaint Filing and Resolution</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel</p>
						</div>
						<img
							className="h-[52px] ml-4 "
							src="./assets/Images/WhatWeOffer/greenArrowShort.svg"
							alt=""
						/>
					</div>

					<div className="mb-4">
						<img
							className="h-[41px] w-[41px]"
							src="./assets/Images/WhatWeOffer/redIcon.svg"
							alt=""
						/>
						<div className="text-left my-4 text-[14px]">
							<p className=" font-semibold text-[16px]  mb-2">Quick search through thousands of Scam Records</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel</p>
						</div>
						<img
							className="h-[52px] ml-4 "
							src="./assets/Images/WhatWeOffer/arrowRedShort.svg"
							alt=""
						/>
					</div>

					<div className="mb-4">
						<img
							className="h-[41px] w-[41px]"
							src="./assets/Images/WhatWeOffer/blueIcon.svg"
							alt=""
						/>
						<div className="text-left my-4 text-[14px]">
							<p className=" font-semibold text-[16px]  mb-2">Write a complaint letter</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel</p>
						</div>
						<img
							className="h-[52px] ml-4 "
							src="./assets/Images/WhatWeOffer/arrowBlueShort.svg"
							alt=""
						/>
					</div>

					<div className="mb-4">
						<img
							className="h-[41px] w-[41px]"
							src="./assets/Images/WhatWeOffer/konfampayIcon.svg"
							alt=""
						/>
						<div className="text-left my-4 text-[14px]">
							<p className=" font-semibold text-[16px] mb-2">{`Use an escrow service (Konfampay)`}</p>
							<p>We are the voice of consumers. Diam eget elementum pellentesque et urna. Sed velit quis mauris, amet vel pellentesque et urna. Sed velit quis mauris, amet vel</p>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default WhatWeOffer;
