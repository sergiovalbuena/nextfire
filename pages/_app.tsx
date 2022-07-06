import "../styles/globals.css";
import { GetServerSideProps } from "next/app";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster position="top-right"/>
    </>
  );
}

export default MyApp;
