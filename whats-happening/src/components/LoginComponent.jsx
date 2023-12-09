import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function LoginComponent({ onLogin }) {
  useEffect(() => {
    // Initialize the Google One Tap client library
    google.accounts.id.initialize({
      client_id: '913797948876-c2rbpoib2pm1mfvsemnj9li6sf04sode.apps.googleusercontent.com',
      callback: onLogin,
    });

    // Google button
    google.accounts.id.renderButton(document.getElementById('signin_button'), {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      position: 'absolute',
      top: '10px',
      left: 'auto',
      right: 'auto',
      margin: 'auto',
    });
  }, [onLogin]);

  return (
    <div>
      <div id="signin_button"></div>
    </div>
  );
}

export default LoginComponent;
