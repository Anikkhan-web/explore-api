const user = {id: 1,name:'Gorib Amir',job:'actor'}
console.log(user);
const stringified = JSON.stringify(user)
console.log(stringified);
console.log(JSON.parse(stringified));