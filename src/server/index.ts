import express from 'express';

const index = express();
const port = process.env.PORT ?? 3000;

index.use(express.static('dist/client'));

index.get('/', (req, res) => {
	res.sendFile('index.html', {root: 'dist/client'});
});

index.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
