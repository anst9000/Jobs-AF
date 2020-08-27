import 'dotenv/config';
import cors from 'cors'
import express from 'express';

const app = express();
app.use(cors());
const port = process.env.PORT;


// Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
})


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})
