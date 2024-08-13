
 const url = 'https://jsonplaceholder.typicode.com/postsa';

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts)
    mostrarPosts(posts);

  } catch (error) {
    
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error en la conexion a la API, por culpa de Elon Moks",
    });
  }
}

function mostrarPosts(posts){
  const ul = document.createElement('ul');
  const posteos = document.getElementById('post-data');
  posts.forEach(post => {
    const li = document.createElement('li');
    li.classList.add('post');
    li.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.body}</p>
    `;
    ul.appendChild(li);
  });
  posteos.appendChild(ul);
}