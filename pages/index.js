import styles from '../styles/Home.module.css';
import Navbar from '../Components/Navbar';
import ProductsContainer from '../Components/ProductsContainer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <ProductsContainer />
    </div>
  )
}
