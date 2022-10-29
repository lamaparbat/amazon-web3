import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/Home.module.css';
import Navbar from '../Components/Navbar';
import ProductsContainer from '../Components/ProductsContainer';

export default function Home() {
  useEffect(() => {
    return async () => {
      !window?.web3 && toast.warning("Please install metamask.");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <ProductsContainer />
      <ToastContainer position='top-center' />
    </div>
  )
}
