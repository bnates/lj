function buildApp(msg, target) {
  var hourNow = prompt(msg);
  console.log('prompt question:', hourNow);
  
  var greeting;
  
  if (hourNow > 18 && hourNow < 24) {
    greeting = 'good evening, ' + target;
  } else if (hourNow > 12 && hourNow < 24) {
    greeting = 'good afternoon, ' + target;
  } else if (hourNow >= 0 && hourNow < 24) {
    greeting = 'good morning, ' + target;
  } else {
    greeting = 'wait, you did not give me a proper response';
  }
  
  console.log('our response:', greeting);
  
  document.write(greeting);
}

buildApp('what time is it in 24 hour timing', 'everyone');