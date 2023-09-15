const express = require('express');                 //all stuff we need to open up a server
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const puppeteer = require('puppeteer');
const fs = require('fs');


const app = express();                            //sets up server using express
app.use(bodyParser.urlencoded({ extended: false }));  //facilitates http exchange 
app.use(pino);    //logs the http response


app.get('/scrape', async (req, res) => {      //opens up an actual http request

    const browser = await puppeteer.launch({   //wait for puppeteer to launch server side before continuing
      headless: true,
      args: ["--disable-setuid-sandbox"],
      'ignoreHTTPSErrors': true
    });
    const page = await browser.newPage();      //page is now a new "ghost browser"
    try{
    await page.goto('https://studentaffairs.unt.edu/events-all');   //tells page to navigate to the events tab on the unt website
    }
    catch(err)    //if err then throw exeption
    {console.log("could not open browser")}   

    console.log("page is open");            //prints to terminal to give status
    console.log("scraping data");

          const eventData = await page.evaluate(() => {       //call the .evaluate function of puppeteer in an arrow function, this allows us to scrape data
             
              const eventPods= Array.from(document.querySelectorAll('.event'));  //scans the html doc into the'document' Array and puts every div with the class 'event'
              const data = eventPods.map((event)=>({      //for every element in the page with class 'event' we instantiate it as an object, and then store that in a variable called data
                
                  Title: event.querySelector('.event-title').innerText,
                  Date: event.querySelector('time').getAttribute('datetime'),
                  Description: event.querySelector('div p').innerText,
          
              }));

              return data;        //return data to the variable eventData
          }); 
          res.json(eventData);    //when the API is finished running code on the server side, we respond(res) to the request with a json version of eventData
    }
  
);

app.listen(3001, () =>            //prints on run to show that server is running
  console.log('Express server is running on localhost:3001')
);