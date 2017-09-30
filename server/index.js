import express from 'express';

let app = express();


app.get('/*',(req, res) => {
	res.send('!hello');
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => console.log('running on localhost:', PORT_NUMBER))