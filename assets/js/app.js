function userCheck() {
  const users = [
    { userName: 'joe', password: 'joe', name: 'Joseph G' },
    { userName: 'james', password: 'james', name: 'James' }
  ]
  const userName = document.getElementById('userName');
  const password = document.getElementById('password');

  function checkUserLogin(checkLoginName) {
    return checkLoginName.userName === document.getElementById('userName').value && checkLoginName.password === document.getElementById('password').value
  }

/* Function for the find - test */
  function findUser(getUserName) {
    return getUserName.userName == document.getElementById('userName').value;
  }

  if (users.find(findUser)) {
    alert('Hello ' + users.find(findUser).name);
  } else {
    alert('Not found!');
  }

}