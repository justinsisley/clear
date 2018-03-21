import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import welcomeHandler from './controllers/welcome';
import usersHandler from './controllers/users';

// Allow port override via environment variable
const port = process.env.PORT || '8743';

// Create the Express server
const app = express();

// https://github.com/helmetjs/helmet
app.use(helmet());
// https://github.com/expressjs/morgan
app.use(morgan('common'));
// https://expressjs.com/en/4x/api.html#express.json
app.use(express.json());

// Handle requests
app.get('/', welcomeHandler);
app.get('/users', usersHandler);

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server running at http://localhost:${port}`);
});
