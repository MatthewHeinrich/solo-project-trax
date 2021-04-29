const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const trailsRouter = require('./routes/trail.router');
const detailsRouter = require('./routes/details.router');
const favoritesRouter = require('./routes/favorites.router');
const feedbackRouter = require('./routes/feedback.router');
const deleteRouter = require('./routes/delete.router');
const ratingRouter = require('./routes/rating.router');
const editUserRouter = require('./routes/editUser.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/trails', trailsRouter);
app.use('/api/details', detailsRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/delete', deleteRouter);
app.use('/api/rating', ratingRouter);
app.use('/api/edit', editUserRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
