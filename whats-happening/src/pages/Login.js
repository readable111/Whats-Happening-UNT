import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import LoginComponent from '../components/LoginComponent';

function Login() {
  const [user, setUser] = useState(null);

  // Callback function to handle the credential response.
  function handleCredentialResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  return (
    <div className="App">
      <LoginComponent onLogin={handleCredentialResponse} />
      {user && (
        <div>
          <h2>Welcome {user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
