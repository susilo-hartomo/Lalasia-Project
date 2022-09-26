import Layout from "@/components/Layout";
import React from "react";
import ProductCard from "../../components/card/ProductCard";
import FormSearch from "../../components/items/Search";
import ProductSlider from "../../components/slick/BannerSlick";
import { products } from "../../constants/products";
import FilterButton from "../../components/items/FilterButton";

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
        <ProductSlider />
      </div>
    );
  };

  const renderSearchProduct = () => {
    return (
      <div className="flex align-middle justify-center" style={{ alignItems: "baseline" }}>
        <div className="mx-2">
          <FormSearch />
        </div>
        <div className="mx-2">
          <FilterButton />
        </div>
      </div>
    );
  };

  const renderProductCard = () => {
    return (
      <div className="mt-12">
        <div>
          <h1 className="heading">Total Product</h1>
        </div>
        <div className="grid mt-11 gap-x-7 lg:gap-x-4 md:gap-x-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {products.map((item, i) => (
            <ProductCard key={i} img={item.img} category={item.category} name={item.name} desc={item.desc} price={item.price} />
          ))}
        </div>
      </div>
    );
  };

  const renderPagination = () => {
    return (
        <div className="flex justify-center mt-24">
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Previous</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border bg-[#518581] px-4 py-2 text-sm font-medium text-white focus:z-20">
              1
            </a>
            <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              2
            </a>
            <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
              3
            </a>
            <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
            <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              10
            </a>
            <a href="#" class="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Next</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
    );
  };
  return (
    <Layout title="Product" content="We are the one">
      <div className="container mx-auto px-2 lg:px-0">
        {renderTitle()}
        {renderCorouselProduct()}
        {renderSearchProduct()}
        {renderProductCard()}
        {renderPagination()}
      </div>
    </Layout>
  );
}
