import './DiscordAuth';

const cors = require('cors');
const express = require('express');
const passport = require('passport');
const model = require('./models/user');
const config = require('./config.json');
const functions = require('./functions/functions');
const session = require('express-session');
const path = require('path');


const app = express();


app.use(cors());
app.use(
	session({
		secret: config.secret,
		resave: true,
		saveUninitialized: false,
	}),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.get('/login', passport.authenticate('discord'));
app.get(
	`/${config.callbackURL}`,
	passport.authenticate('discord', {
		failureRedirect: '/login',
		successRedirect: '/main',
	}),
);
app.get('/', async (req, res) => {
	if (!req.user) {
		res.render('index', {
			baseURI: config.baseURI,
		});
	} else {
		res.redirect('/dashboard');
	}
});
app.get('/portfolio-details', async (req, res) => {
	if (!req.user) {
		res.render('portfolio-details', {
			baseURI: config.baseURI,
		});
		
	} else {
		res.redirect('/dashboard');
	}
});
app.get('/admin', async (req, res) => {
	if (!req.user) {
		res.render('Admin_Panel', {
			baseURI: config.baseURI,
		});
		
	} else {
		res.redirect('/dashboard');
	}
});
app.get('/username', async (req, res) => {
	if (!req.user) {
		res.render('login', {
			baseURI: config.baseURI,
		});
		
	} else {
		res.redirect('/dashboard');
	}
});
app.get('/loader', async (req, res) => {
	if (!req.user) {
		res.render('loader', {
			baseURI: config.baseURI,
		});
		
	} else {
		res.redirect('/dashboard');
	}
});
app.get('/redirect', functions.isAuthorized, async (req, res) => {
	const data = await model.findOne({ _id: req.user.id });
	data.token = functions.generateToken();
	data.save();
	res.redirect('/username');
});

app.get('/logout', (req, res) => {
	if (req.user) {
		req.logout();
		res.redirect('/');
	} else {
		res.redirect('/');
	}
});
app.use('/meme', functions.auth, require('./routes/meme'));
app.listen(config.port, () => {
	console.log(`API listening on PORT:${config.port}`);
});
