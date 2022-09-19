import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../sections/NavBar";
import { ThankYou } from "../sections/ThankYou";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<div className="fixed top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
				<ThankYou />
			</div>
		</div>
	);
};

export default Home;
