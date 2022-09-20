import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../sections/HeroSection";
import { Footer, Insights, NavBar, TiredOfGettingScammed, WhatWeOffer } from "../sections";

const Home: NextPage = () => {
	return (
		<div className="pt-[70px] sm:pt-[80px] lg:pt-[100px]">
			<NavBar />
			<HeroSection />
			<WhatWeOffer />
			<Insights />
			<TiredOfGettingScammed />
			<Footer />
		</div>
	);
};

export default Home;
