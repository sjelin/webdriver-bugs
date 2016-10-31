var webdriver = require('selenium-webdriver'),
    flow = webdriver.promise.controlFlow();

var val;

function runInFlow(fun) {
  return flow.execute(() => {
    return webdriver.promise.fulfilled(fun());
  });
}

runInFlow(() => {
  val = 1;
  return new Promise((resolve) => {
    resolve(webdriver.promise.fulfilled(7));
  }).then((seven) => {
    runInFlow(() => {
      return webdriver.promise.delayed(1000).then(() => {
        val = seven;
      });
    });
  });
});

runInFlow(() => {
  console.log('RESULT: val = ' + val); // 1, should be 7
});
