var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("express-handlebars");
var bodyParser = require("body-parser");

var admin = require("firebase-admin");

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: "https://portfolio-d7a5d.firebaseio.com",
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require("./routes/index");

app.engine(
	".hbs",
	hbs({
		extname: ".hbs",
		defaultLayout: "index",
		layoutsDir: __dirname + "/views",
		partialsDir: __dirname + "/views/partials",
	})
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
