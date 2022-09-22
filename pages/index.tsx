import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { HeroSection, Footer, Insights, NavBar, TiredOfGettingScammed, WhatWeOffer } from "../sections";

const Home: NextPage = () => {
	const whatWeOfferRef = useRef(null);
	const contactUsRef = useRef(null);
	return (
		<>
			<Head>
				<title>Ecommerce Complaint</title>
				<link
					rel="icon"
					href="/assets/Images/eccLogo.svg"
				/>
			</Head>
			<div className="pt-[70px] sm:pt-[80px] lg:pt-[100px]">
				<NavBar
					whatWeOfferRef={whatWeOfferRef}
					contactUsRef={contactUsRef}
				/>
				<HeroSection />
				<WhatWeOffer sectionRef={whatWeOfferRef} />
				<Insights />
				<TiredOfGettingScammed />
				<Footer sectionRef={contactUsRef} />
			</div>
		</>
	);
};

export default Home;
