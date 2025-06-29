function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      const newElement = document.createElement("p");
      newElement.textContent = data.id;
      document.body.appendChild(newElement);
    })
    .catch(error => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}
