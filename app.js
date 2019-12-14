var hourNow = prompt('what time is it? 0-23');
console.log('prompt question:', hourNow);

var greeting;

if (hourNow > 18 && hourNow < 24) {
  greeting = 'good evening, everyone!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'good afternoon, everyone!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'good morning, everyone';
} else {
  greeting = 'wait, you did not give me a proper response';
}

console.log('our response:', greeting);

document.write(greeting);