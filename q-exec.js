var q = require('q'),
    webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'chrome'}).
    build();

driver.get('http://juliemr.github.io/webdriver-bugs');

driver.controlFlow().execute(function() {
  return q.delay(50);
});
driver.executeScript(function() {
  alert('This never happens');
});

driver.sleep(5000);

driver.quit();
