import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../sections/HeroSection";
import Insights from "../sections/Insights";
import NavBar from "../sections/NavBar";
import TiredOfGettingScammed from "../sections/TiredOfGettingScammed";
import WhatWeOffer from "../sections/WhatWeOffer";

const Home: NextPage = () => {
	return (
		<div className="pt-[70px] sm:pt-[80px] lg:pt-[100px]">
			<NavBar />
			<HeroSection />
			<WhatWeOffer />
			<Insights />
			<TiredOfGettingScammed />
		</div>
	);
};

export default Home;
