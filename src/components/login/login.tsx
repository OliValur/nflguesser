import { useState } from 'react';
import auth from './auth';

function LoginButton() {
  const [error, setError] = useState(null);

  const handleLoginWithProvider = async (provider) => {
    try {
      const result = await auth.signInWithPopup(provider);
      console.log(result.user); // Display user information in the console
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError(error.message); // Display the error message to the user
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <button onClick={() => handleLoginWithProvider(new firebase.auth.GoogleAuthProvider())}>
        Login with Google
      </button>
      <button onClick={() => handleLoginWithProvider(new firebase.auth.FacebookAuthProvider())}>
        Login with Facebook
      </button>
    </div>
  );
}

export default LoginButton;