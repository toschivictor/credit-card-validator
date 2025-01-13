import express from 'express';

const router = express.Router();

router.post('/validate', (req, res) => {
	res.json({ valid: true });
});

export default router;
