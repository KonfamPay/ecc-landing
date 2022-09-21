import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import HeroSection from "../sections/HeroSection";
import { Footer, Insights, NavBar, TiredOfGettingScammed, WhatWeOffer } from "../sections";
import { useState } from "react";

const Home: NextPage = () => {
	const whatWeOfferRef = useRef(null);
	const contactUsRef = useRef(null);
	return (
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
	);
};

export default Home;
