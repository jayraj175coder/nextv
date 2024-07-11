const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://dse2023.mahacet.org.in/dse23/index.php?show=home', { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      const notices = Array.from(document.querySelectorAll('.notice-selector')).map(notice => {
        return {
          title: notice.querySelector('h3').innerText,
          date: notice.querySelector('.date-class').innerText,
          content: notice.querySelector('p').innerText,
        };
      });
      console.log('Notices scraped:', notices); // Log notices here
      return notices;
    });
    

    await browser.close();
    res.json(data);
    console.log('Data to send:', data); // Log the data being sent
    
  } catch (error) {
    console.error('Error scraping website:', error);
    res.status(500).send('Error scraping website');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
