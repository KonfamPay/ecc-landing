import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../sections/NavBar";
import TiredOfGettingScammed from "../sections/TiredOfGettingScammed";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<TiredOfGettingScammed />
		</div>
	);
};

export default Home;
