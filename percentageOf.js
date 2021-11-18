const { Builder, By } = require('selenium-webdriver');

async function percentageOf(a, b) {
	let driver = await new Builder().forBrowser('chrome').build();

	// Puts an Implicit wait, Will wait for 10 seconds before throwing exception
	driver.manage().setTimeouts( { implicit: 10000 } );

	// Launch website
	await driver.get('https://www.calculator.net/percent-calculator.html');
	
	// Maximize the browser
	await driver.manage().window().maximize();

	// Click on Math Calculators
	await driver.findElement(By.xpath('//*[@id="octitle"]/a')).click();

	// Click on Percent Calculators
	await driver.findElement(By.xpath('//*[@id="content"]/table[2]/tbody/tr/td/div[3]/a')).click();

	// Enter value of the first number of the percent Calculator
	await driver.findElement(By.xpath('//*[@id="cpar1"]')).sendKeys(a);

	// Enter value of the second number of the percent Calculator
	await driver.findElement(By.xpath('//*[@id="cpar2"]')).sendKeys(b);

	// Click Calculate Button
	await driver.findElement(By.xpath('//*[@id="content"]/table[1]/tbody/tr[2]/td/input[2]')).click();

	// Get the Result Text based on its xpath
	let result = await driver.findElement(By.xpath('//*[@id="content"]/p[2]/font/b')).getText();

	// Close the Browser.
	await driver.close();

	// Return the value of the Result
	return result;
}

module.exports = percentageOf;
