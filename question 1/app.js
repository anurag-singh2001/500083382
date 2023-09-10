const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.use(express.json());

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URL parameter' });
  }

  const fetchNumbers = async (url) => {
    try {
      const response = await axios.get(url, { timeout: 500 });
      if (response.status === 200 && Array.isArray(response.data.numbers)) {
        return response.data.numbers;
      }
    } catch (error) {
      // Ignore errors due to timeouts or invalid responses
    }
    return [];
  };

  const promises = urls.map((url) => fetchNumbers(url));

  Promise.all(promises)
    .then((results) => {
      // Merge and deduplicate the numbers
      const mergedNumbers = [...new Set(results.flat())];
      const sortedNumbers = mergedNumbers.sort((a, b) => a - b);

      res.json({ numbers: sortedNumbers });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(port, () => {
  console.log(`number-management-service is listening on port ${port}`);
});
