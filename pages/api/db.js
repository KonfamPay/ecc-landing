import { MongoClient } from "mongodb";

let dbConnection;
let uri = "mongodb+srv://itzadetunji:adetunjimay29@mernapp.f11zmes.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
	connectToDb: (cb) => {
		MongoClient.connect(uri)
			.then((client) => {
				dbConnection = client.db();
				console.log(dbConnection);
				return cb();
			})
			.catch((err) => {
				console.log(err);
				return cb(err);
			});
	},
	getDb: () => dbConnection,
};
