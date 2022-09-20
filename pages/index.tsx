import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NavBar from "../sections/NavBar";
import { ThankYou } from "../sections/";

const Home: NextPage = () => {
	const [isModalShowing, setIsModalShowing] = useState<boolean>(false);
	const ref = useRef();
	useEffect(() => {
		const checkIfClickedOutside = (e: any) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (isModalShowing && ref.current && !ref.current.contains(e.target)) {
				setIsModalShowing(false);
			}
		};

		document.addEventListener("mousedown", checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [isModalShowing]);
	useEffect(() => {
		if (isModalShowing == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isModalShowing]);
	return (
		<div>
			<NavBar />
			<button onClick={() => setIsModalShowing((oldState) => !oldState)}>dqwdeqd</button>
			{isModalShowing && <ThankYou setIsModalShowing={setIsModalShowing} />}
		</div>
	);
};

export default Home;
