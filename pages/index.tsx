import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import HeroSection from "../sections/HeroSection";
import Insights from "../sections/Insights";
import NavBar from "../sections/NavBar";
import TiredOfGettingScammed from "../sections/TiredOfGettingScammed";
import WhatWeOffer from "../sections/WhatWeOffer";

const Home: NextPage = () => {
	const whatWeOfferRef = useRef(null);
	const contactUsRef = useRef(null);
	return (
		<div className="pt-[70px] sm:pt-[80px] lg:pt-[100px]">
			<NavBar whatWeOfferRef={whatWeOfferRef} />
			<HeroSection />
			<WhatWeOffer sectionRef={whatWeOfferRef} />
			<Insights />
			<TiredOfGettingScammed />
		</div>
	);
};

export default Home;
