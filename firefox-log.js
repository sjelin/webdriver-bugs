var webdriver = require('selenium-webdriver');

var level = 'WARNING';

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({
      'browserName': 'firefox',

      'loggingPrefs': {
        'driver': level,
        'server': level,
        'browser': level
      }
    }).build();

driver.get('http://www.google.com');

driver.executeScript('window.HELLO_WORLD = "I am in your log :("');

driver.quit();
