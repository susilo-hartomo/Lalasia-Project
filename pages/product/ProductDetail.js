import Layout from "@/components/Layout";
import Image from "next/image";
import { aestetic } from "../../assets/images";
import SecondaryButton from "@/components/button/SecondaryButton";
import { products } from "../../constants/products";
import ProductCard from "@/components/card/ProductCard";

const ProductDetail = () => {
  const renderProductDetail = () => {
    return (
      <div className="mt-14 px-2">
        <div className="lg:flex lg:flex-wrap lg:gap-10">
          <div className="w-full h-[327px] relative lg:w-1/2 lg:h-[600px]">
            <Image
              src={aestetic}
              alt="Services image brand"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-7 lg:w-[45%]">
            <h3 className="heading text-title-1 lg:text-4xl">
              White Aesthetic Chair
            </h3>
            <p className="mt-2 text-paragraph-1 paragraph">
              Combination of wood and wool
            </p>

            <h6 className="heading mt-5 text-title-1">Color</h6>
            <div className="mt-2 flex flex-wrap">
              <div className="h-8 w-8 lg:h-12 lg:w-12 bg-title-1 border-0"></div>
              <div className="h-8 w-8 lg:h-12 lg:w-12 bg-[#314443] border-0"></div>
              <div className="h-8 w-8 lg:h-12 lg:w-12 bg-[#C5A26E] border-0"></div>
              <div className="h-8 w-8 lg:h-12 lg:w-12 bg-[#D8DBE0] border-0"></div>
            </div>

            <p className="mt-4 text-paragraph-1 paragraph">
              Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
              facilisis facilisis ligula felis et a parturient aenean. Ac
              maecenas ultricies felis risus scelerisque duis posuere...{" "}
              <span className="inline-block text-primary-1 cursor-pointer">
                Read More
              </span>
            </p>

            <h3 className="mt-5 heading text-title-1 lg:text-4xl">$99.98</h3>

            <div className="mt-12 grid gap-5 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
              <SecondaryButton
                text="Buy Now"
                onClick={() => alert("press button")}
                bg="bg-primary-1"
              />
              <SecondaryButton
                text="Add to Cart"
                onClick={() => alert("press button")}
                bg="bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRelatedItems = () => {
    return (
      <div className="mt-28 px-2">
        <h2 className="heading text-title-1">Related Items</h2>
        <div className="mt-6 grid gap-4 grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              category={item.category}
              name={item.name}
              desc={item.desc}
              price={item.price}
              idx={index}
              responsiveParent="w-full h-[280px] lg:h-[535px]"
              responsiveImg="w-full h-[130px] lg:h-[360px]"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout title="Services" content="We are the one">
      <div className="container mx-auto px-2 lg:px-0">
        {renderProductDetail()}
        {renderRelatedItems()}
      </div>
    </Layout>
  );
};

export default ProductDetail;
