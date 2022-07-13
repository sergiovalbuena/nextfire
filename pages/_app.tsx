import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

import { useUserData } from '../lib/hooks';

import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function MyApp({ Component, pageProps }) {


  const userData = useUserData();


  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster position="top-left"/>
    </UserContext.Provider>
  );
}

export default MyApp;
