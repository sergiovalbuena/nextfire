import { auth, googleAuthProvider } from '../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  //1. user signed out <SignInButton />>
  //2. user signed in, but missing username <USernameForm />
  //3. user signed in, has username <SignOutButton />.


  return (
    <main>
      {user ? 
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </main>
  );
}

//Sign in with Google Buttons
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={ '/google.png'} alt="google img" />  Sign In with Google
    </button>
  )
}
//Sign out buttons
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null
}
