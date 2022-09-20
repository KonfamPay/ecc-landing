// Get Contact Form Data and send email with nodemailer
import nodemailer from "nodemailer";
import { connectToDb, getDb } from "./db";

export default async function handler(req, res) {
	let db;
	connectToDb((err) => {
		if (!err) {
			db = getDb();
			console.log(err);
		}
	});
	const { email } = req.body;

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

	const addTo = () => {
		db.collection("waitlist")
			.insertOne(email)
			.then((result) => {
				res.status(201).json(result);
			})
			.catch((err) => res.status(500).json({ error: "Could not create a new document" }));
	};

	try {
		addTo();
		// Send email
		await transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			return res.status(200).json({ message: "Email sent" });
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}
