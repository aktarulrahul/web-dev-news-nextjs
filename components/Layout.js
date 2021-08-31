import Nav from "./Nav";
import Header from "./Header.js";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {
            children /* this child comes from _apps.js => <Component {...pageProps} /> */
          }
        </main>
      </div>
    </>
  );
};

export default Layout;
