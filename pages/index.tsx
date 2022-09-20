import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../sections/NavBar";

const Home: NextPage = () => {
	return (
		<div className="pt-[70px] sm:pt-[80px] lg:pt-[100px]">
			<NavBar />
		</div>
	);
};

export default Home;
