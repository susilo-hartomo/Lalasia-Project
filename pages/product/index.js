import Layout from "@/components/Layout";
import React from "react";
import ProductCard from "../../components/card/ProductCard";
import FormSearch from "../../components/items/Search";
import ProductSlider from "../../components/slick/BannerSlick";
import { products } from "../../constants/products"

export default function Product() {
  const renderTitle = () => {
    return (
      <div className="my-24">
        <div class="dark:bg- mx-auto my-4 lg:w-[600px] px-4">
          <h1 class="text-h1 text-center font-bold">Products</h1>
          <p class="text-center paragraph my-5">We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
        </div>
      </div>
    );
  };


  const renderCorouselProduct = () => {
	return (
		<div>
			<ProductSlider/>
		</div>
	)
  }


  const renderSearchProduct = () => {
	return (
		<div>
			<FormSearch/>
		</div>
	)
  }

  const renderProductCard = () => {
    return (
      <div className="">
      <div className="grid gap-x-7 lg:gap-x-4 md:gap-x-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {products.map((item, i) => (
					<ProductCard
						key={i}
						img={item.img}
						category={item.category}
						name={item.name}
						desc={item.desc}
						price={item.price}
					/>
				))}
      </div>
      </div>
    )
  }
  return (
    <Layout title="Product" content="We are the one">
      <div className="container mx-auto px-2 lg:px-0">
		{renderTitle()}
		{renderCorouselProduct()}
		{renderSearchProduct()}
    {renderProductCard()}
		</div>
    </Layout>
  );
}
