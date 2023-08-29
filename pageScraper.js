const scraperObject = {
	url: 'https://studentaffairs.unt.edu/events-all',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		
        await page.waitForSelector('.main', '.columns');
        let urls = await page.$$eval('section ol > li', links => {

            links = links.map(el => el.querySelector('div > a').href)
            return links;

        });
        console.log(urls);
	}
}

module.exports = scraperObject;