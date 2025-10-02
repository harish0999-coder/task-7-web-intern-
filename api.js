<!DOCTYPE html>
<html>
<head>
  <title>Fetch API User Data</title>
  <style>
    .user-card {
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      border-radius: 6px;
      box-shadow: 2px 2px 12px #eee;
    }
  </style>
</head>
<body>
  <h1>Users List</h1>
  <button id="reload">Reload Data</button>
  <div id="userContainer"></div>
  <script>
    function fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) throw new Error('Network error');
          return response.json();
        })
        .then(data => {
          const container = document.getElementById('userContainer');
          container.innerHTML = '';
          data.forEach(user => {
            const div = document.createElement('div');
            div.className = 'user-card';
            div.innerHTML = `<h3>${user.name}</h3>
                             <p>Email: ${user.email}</p>
                             <p>Address: ${user.address.street}, ${user.address.city}</p>`;
            container.appendChild(div);
          });
        })
        .catch(error => {
          document.getElementById('userContainer').innerHTML = 'Failed to load data: ' + error.message;
        });
    }

    document.getElementById('reload').onclick = fetchUsers;
    window.onload = fetchUsers;
  </script>
</body>
</html>
