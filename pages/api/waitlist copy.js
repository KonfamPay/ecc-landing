// Get Contact Form Data and send email with nodemailer
import nodemailer from "nodemailer";
import { connectToDb, getDb } from "./db";

export default async function handler(req, res) {
	const { email } = req.body;
	let db;
	connectToDb((err) => {
		console.log(1);
		if (!err) {
			db = getDb();
		}
	});

	if (!email) {
		return res.status(400).json({ error: "All fields are required" });
	}

	// Create transporter
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "adetunjiadeyinka29@gmail.com",
			pass: "tvgcjaqkdchssgin",
		},
	});

	// Create mail options
	const mailOptions = {
		from: "adetunjiadeyinka29@gmail.com",
		to: email,
		replyTo: "adetunjiadeyinka29@gmail.com",
		subject: ` — Contact Form: adetunjiadeyinka.com`,
		text: email,
		html: `
			<h1>Hello there</h1>
			<h2>Email:</h2>
			<p>${email}</p>
		`,
	};

	try {
		// Send email
		await transporter.sendMail(mailOptions, (err, info) => {
			db.collection("waitlistCollection")
				.insertOne(email)
				.then((result) => {
					res.status(200).json(result);
				})
				.catch((err) => res.status(500).json({ error: "Could not create a new document" }));
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			return res.status(200).json({ message: "Email sent" });
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

// import express from "express";
// import { ObjectId } from "mongodb";
// import { connectToDb, getDb } from "./db";

// const app = express();
// app.use(express.json());

// //db connection
// let db;
// connectToDb((err) => {
// 	if (!err) {
// 		app.listen(3000, () => {
// 			console.log("App listening on port 3000");
// 		});
// 		db = getDb();
// 	}
// });

// app.post("/wait", (req, res) => {
// 	const book = req.body;

// 	db.collection("books")
// 		.insertOne(book)
// 		.then((result) => {
// 			res.status(201).json(result);
// 		})
// 		.catch((err) => res.status(500).json({ error: "Could not create a new document" }));
// });
