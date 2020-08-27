import 'dotenv/config';
import cors from 'cors'
import express from 'express';
import path from 'path';

const app = express();
app.use(cors());
const port = process.env.PORT;

// Routes
app.get('/', (req, res) => {
	res.send('Recived a GET HTTP method');
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})

