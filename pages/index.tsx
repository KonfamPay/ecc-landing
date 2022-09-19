import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../sections/NavBar";
import { ThankYou } from "../sections/ThankYou";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<ThankYou />
		</div>
	);
};

export default Home;
