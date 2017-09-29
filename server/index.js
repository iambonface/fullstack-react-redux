import express from 'express';

let app = express();


app.get('/*',(req, res) => {
	res.send('!hello');
});

app.listen(3000, () => console.log('running on localhost:3000'))