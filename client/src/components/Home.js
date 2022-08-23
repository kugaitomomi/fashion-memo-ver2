import React, { useState } from "react";

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Upload from "./Upload";

function Home() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);


  return (
    <>
      {user ? (
        <>
          <Upload user={user} userData={userData} />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
}

export default Home;

function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>SignIn</p>
    </button>
  );
}

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>SingOut</p>
    </button>
  );
}
