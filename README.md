# Ingeniería de Software II - Práctica 5: Pruebas Funcionales

**Objetivo:** Automatizar pruebas funcionales de aplicaciones web utilizando Selenium Web Driver https://www.selenium.dev/

## Pre-Requisitos
- Node.js y npm
- Visual Studio Code
- Selenium Web Driver
- ChromeDriver

## Actividades
1. Implementar Casos de prueba para la funcionalidad "Percentage Calculator" (https://www.calculator.net/percent-calculator.html). Basarse en https://www.tutorialspoint.com/selenium/selenium_webdriver.htm

	- Diseñar casos de prueba: Entradas, proceso, Resultado Esperado
	![Casos de Prueba](imgs/test_cases.png)

	- Implementar los scripts de prueba
	```js
	const { Builder, By } = require('selenium-webdriver');

	async function test() {
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

		// Enter value 10 in the first number of the percent Calculator
		await driver.findElement(By.xpath('//*[@id="cpar1"]')).sendKeys('10');

		// Enter value 50 in the second number of the percent Calculator
		await driver.findElement(By.xpath('//*[@id="cpar2"]')).sendKeys('50');

		// Click Calculate Button
		await driver.findElement(By.xpath('//*[@id="content"]/table[1]/tbody/tr[2]/td/input[2]')).click();

		// Get the Result Text based on its xpath
		let result = await driver.findElement(By.xpath('//*[@id="content"]/p[2]/font/b')).getText();

		// Print a Log In message to the screen
		console.log('The result is ' + result);

		// Close the Browser.
		await driver.close();
	}

	test();
	```
	- Ejecutar los scripts de prueba
	![Ejecucion Scripts](imgs/scripts_ejecucion.png)

	- Reportar los resultados de la ejecución
	![Reporte Final](imgs/final_report.png)

2. Configurar Browser-specific WebDriver
	- Dirigirse a https://chromedriver.storage.googleapis.com/index.html para descargar ChromeDriver. Se selecciona la versión correspondiente a la del navegador:
	![Version de Chrome](imgs/chrome_version.png)
	![Version de Chrome](imgs/chromedriver_folder.png)
	![Version de Chrome](imgs/chromedriver_folder_content.png)

	- Descomprimir el zip en una carpeta y agregar el directorio a la variable de entorno `PATH`
