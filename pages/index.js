import Head from "next/head";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://630356189eb72a839d7e219b.mockapi.io/razzi13/razzi-products"
  );
  const products = await res.json();

  return {
    props: { products },
  };
};

const Home = ({ products }) => {
  return (
    <div className="">
      <Head>
        <title>Razzi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
};

export default Home;
