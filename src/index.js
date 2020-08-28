import 'dotenv/config';
import cors from 'cors'
import express from 'express';
import models from './models';
import routes from './routes'


const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use((req, res, next) => {
	req.context = {
		models,
		me: models.users[1],
	}

	next();
});

// ROUTES
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})
