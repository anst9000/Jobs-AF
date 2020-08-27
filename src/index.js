import 'dotenv/config';
import cors from 'cors'
import express from 'express';
import path from 'path';

const app = express();
app.use(cors());
const port = process.env.PORT;



// Routes
app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});



app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
})

