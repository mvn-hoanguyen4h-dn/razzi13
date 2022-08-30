import PageHome from "../../components/PageHome";

const Main = ({ products }) => {
  return (
    <div className="page-main">
      <PageHome products={products} />
    </div>
  );
};

export default Main;
