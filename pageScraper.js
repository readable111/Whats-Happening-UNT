const scraperObject = {
	url: 'https://studentaffairs.unt.edu/events-all',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		
        const eventData = await page.evaluate(() => {
            const eventPods= Array.from(document.querySelectorAll('.event'));
            const data = eventPods.map((event)=>({ 
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