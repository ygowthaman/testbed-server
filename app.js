const express = require("express");
const cors = require("cors");
const path = require("path");

// Routers
var storyRouter = require('./app/routes/story.routes');
var countryRouter = require('./app/routes/country.routes');
var destinationRouter = require('./app/routes/destination.routes');
var landmarkRouter = require('./app/routes/landmark.routes');
var imageRouter = require('./app/routes/image.routes');

const app = express();

var corsOptions = {
  origin: "http://localhost:5173/"
};

app.use(express.static(path.resolve(__dirname, './webapp/dist')));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// REST Routes
const baseUrl = '/api';
app.use(`${baseUrl}/story`, storyRouter);
app.use(`${baseUrl}/country`, countryRouter);
app.use(`${baseUrl}/destination`, destinationRouter);
app.use(`${baseUrl}/landmark`, landmarkRouter);
app.use(`${baseUrl}/image`, imageRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './webapp/dist', 'index.html'));
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});