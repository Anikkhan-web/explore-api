// console.log('index');
// loadUser2

function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}
function displayPost(posts){
    // console.log(posts);
    // posts.map(post=>console.log(post))
   const ul = document.getElementById('user-list')
   for(const post of posts){
    const li = document.createElement('li')
    li.innerText=post.title
    ul.appendChild(li)
   }
 
}