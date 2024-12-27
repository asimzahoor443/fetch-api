fetch('https://jsonplaceholder.typicode.com/users/8', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error('Not ok');
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById('p').innerHTML = data.name;
  })
  .catch((error) => {
    console.warn(error);
  });
