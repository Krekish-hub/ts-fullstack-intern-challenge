import { Router } from 'express';
import axios from 'axios';

const router = Router();
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';
const api_key = "live_nek8Fvwu6pvQPjOaLShIztxjh7JcdtF0WI8UK6eD1hIRjKX9j1rJyspr1wLiFq99";

router.get('/cats', async (req, res) => {
  try {
    const response = await axios.get(CAT_API_URL, {
      params: { limit: 5 },
      headers: { 'x-api-key': api_key }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cats:', error);
    res.status(500).json({ error: 'Error fetching cats' });
  }
});

export default router;
