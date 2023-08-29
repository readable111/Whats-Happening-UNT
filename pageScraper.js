const scraperObject = {
	url: 'https://studentaffairs.unt.edu/events-all',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		//waits for the scraper to finish
        const eventData = await page.evaluate(() => { //eventData will store all of our event data
            const eventPods= Array.from(document.querySelectorAll('.event'));  //scans the html doc into the'document' Array and puts every div with the class 'event'
            const data = eventPods.map((event)=>({ //scraping data from website and putting it into objects
                Title: event.querySelector('.event-title').innerText,
                Date: event.querySelector('time').getAttribute('datetime'),
                Description: event.querySelector('div p').innerText,
        
            }));
            return data;
        });

        console.log(eventData);
        console.log("done");
	}
}

module.exports = scraperObject;