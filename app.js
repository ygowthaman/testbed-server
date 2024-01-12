const express = require("express");
const cors = require("cors");

// Routers
var storyRouter = require('./app/routes/story.routes');

const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:3000"
};

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// REST Routes
const baseUrl = '/api';
app.use(`${baseUrl}/story`, storyRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});