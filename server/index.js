import express from 'express';

import path from 'path';

let app = express();


app.get('/*',(req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => console.log('running on localhost:', PORT_NUMBER))