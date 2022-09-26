import Aos from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { HeroSection, Footer, Insights, NavBar, TiredOfGettingScammed, WhatWeOffer } from "../sections";

const Home: NextPage = () => {
	useEffect(() => {
		Aos.init();
	});
	const whatWeOfferRef = useRef(null);
	const contactUsRef = useRef(null);
	const joinWaitlistButtonRef = useRef(null);
	return (
		<>
			<Head>
				<title>Ecommerce Complaint</title>
				<link
					rel="icon"
					href="/assets/Images/eccLogo.svg"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<div className="pt-[70px] sm:pt-[80px] lg:pt-[100px]">
				<NavBar
					whatWeOfferRef={whatWeOfferRef}
					contactUsRef={contactUsRef}
					joinWaitlistButtonRef={joinWaitlistButtonRef}
				/>
				<HeroSection joinWaitlistButtonRef={joinWaitlistButtonRef} />
				<WhatWeOffer sectionRef={whatWeOfferRef} />
				<Insights />
				<TiredOfGettingScammed />
				<Footer sectionRef={contactUsRef} />
			</div>
		</>
	);
};

export default Home;
