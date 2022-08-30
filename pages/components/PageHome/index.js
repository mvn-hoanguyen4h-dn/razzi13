import SectionAdvertising from "./SectionAdvertising";
import SectionBanner from "./SectionBanner";
import SectionCategory from "./SectionCategory";
import SectionDiscount from "./SectionDiscount";
import SectionProducts from "./SectionProducts";
import SectionReviews from "./SectionReviews";

const PageHome = ({ products }) => {
  return (
    <div className="page-home">
      <SectionBanner />
      <SectionCategory />
      <SectionDiscount />
      <SectionProducts products={products} />
      <SectionReviews />
      <SectionAdvertising />
    </div>
  );
};

export default PageHome;
