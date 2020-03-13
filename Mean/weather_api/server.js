
	console.log("**********SERVER***********")
	const express = require('express');
    const app = express();
    const bodyParser = require('body-parser')
	app.use(express.static( __dirname + '/public/dist/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
	require ('./server/config/routes.js')(app)
	app.listen(4200, () => console.log("listening on port 4200"));