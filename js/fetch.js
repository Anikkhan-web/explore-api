// console.log("fetching");
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       fetch('')
//       .then(res=>res.json())
//       .then(data=>console.log(data))

      const url = 'https://jsonplaceholder.typicode.com/todos/1'
     function loadData(){
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))

     }
     
    