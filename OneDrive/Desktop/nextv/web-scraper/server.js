const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/scrape', async (req, res) => {
  try {
    const { data } = await axios.get('https://dse2023.mahacet.org.in/dse23/index.php?show=home');
    const $ = cheerio.load(data);

    const notices = [];
    $('.notice-selector').each((index, element) => {
      notices.push({
        title: $(element).find('h3').text(),
        date: $(element).find('.date-class').text(),
        content: $(element).find('p').text(),
      });
    });

    res.json(notices);
  } catch (error) {
    console.error('Error scraping website:', error);
    res.status(500).send('Error scraping website');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
