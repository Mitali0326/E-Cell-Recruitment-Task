
const name =document.getElementById('name');
const email =document.getElementById('email');
const message =document.getElementById('message');
const sendbtn =document.getElementById('sendbtn');

const rootRef = db.ref('users')
sendbtn.enaddEventListener('click' ,(e)=>{
  const autoId = rootRef.push().key
  rootRef.child(autoId).set({
    name:name.value,
    email:email.value,
    message:message.value 

  })
  window.location.href("./contact.html") 

})
