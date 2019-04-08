var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz';
var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let query = new AV.Query('formMessage')
let ul = document.querySelector('#messageList')

query.find().then(function (message) {
  console.log(message)
  let array = message.map((items) => { return items.attributes })
  console.log(array)
  array.forEach((element) => {
    let li = document.createElement('li')
    li.innerHTML = element.name + ' ：' + element.content
    ul.append(li)
  })
}, function () { })

let myMesssageForm = document.querySelector('#myMesssageForm')

myMesssageForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let name = myMesssageForm.querySelector('[name=name]').value
  let content = myMesssageForm.querySelector('[name=content]').value
  if (name && content) {
    var FormMessage = AV.Object.extend('formMessage');
    var formMessage = new FormMessage();
    formMessage.save({
      name: name,
      content: content
    }).then(function (object) {
      console.log(object)
      let li = document.createElement('li')
      li.innerHTML = object.attributes.name + '说：' + object.attributes.content
      ul.append(li)
      myMesssageForm.querySelector('[name=name]').value = ''
      myMesssageForm.querySelector('[name=content]').value = ''
    })
  } else {
    alert('内容不得为空！')
  }

})

