import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
      {/* this Component  wraps all of the page components */}
    </Layout>
  );
}

export default MyApp;
