const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const puppeteer = require('puppeteer');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


app.get('/', async (req, res) => {

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-setuid-sandbox"],
      'ignoreHTTPSErrors': true
    });
    const page = await browser.newPage();
    try{
    await page.goto('https://studentaffairs.unt.edu/events-all');
    }
    catch(err)
    {console.log("could not open browser")}
    await console.log("page is open");
    console.log("called scraper function");

          const eventData = await page.evaluate(() => {
             
              const eventPods= Array.from(document.querySelectorAll('.event'));  //scans the html doc into the'document' Array and puts every div with the class 'event'
              const data = eventPods.map((event)=>({
                
                  Title: event.querySelector('.event-title').innerText,
                  Date: event.querySelector('time').getAttribute('datetime'),
                  Description: event.querySelector('div p').innerText,
          
              }));

              return data;
          }); 
          res.send(eventData);
    }
  
);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);