import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Insights from "../sections/Insights";
import NavBar from "../sections/NavBar";
import WhatWeOffer from "../sections/WhatWeOffer";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<WhatWeOffer />
			<Insights />
		</div>
	);
};

export default Home;
