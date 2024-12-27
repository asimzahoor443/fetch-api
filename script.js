fetch('https://jsonplaceholder.typicode.com/users/11')
  .then((res) => {
    if (!res.ok) {
      throw new Error('Not ok');
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
