import React from "react";
import {searchNormal, banner} from '../../assets/images';
import PrimaryButton from '@/components/button/PrimaryButton';
import Image from 'next/image';


function FormSearch() {
  return (
    <div className="display-flex">
      <div className="-top-24 w-full left-auto right-auto">
        <div className="mx-auto lg:w-[810px] mt-[50px] lg:h-[84px] bg-white flex justify-between items-center px-4 gap-[18px]" style={{ boxShadow: "0px 4px 80px rgba(175, 173, 181, 0.2)" }}>
          <Image className="w-[32px] h-[32px]" src={searchNormal} alt="search" />
          <input className="w-[70%] h-[50px] p-2 focus:outline-none text-paragraph-1" type="search" placeholder="Search Property" />
          <PrimaryButton text={"Search"} />
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default FormSearch;
