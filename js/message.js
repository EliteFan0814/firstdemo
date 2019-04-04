var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz';
var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  console.log(object)
})