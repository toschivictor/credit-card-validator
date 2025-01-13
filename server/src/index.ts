import express from 'express';
import routes from './infrastructure/routes';

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
