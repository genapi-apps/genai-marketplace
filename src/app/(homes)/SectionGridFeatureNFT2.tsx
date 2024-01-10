import React, { FC } from "react";
import HeaderFilterSection from "@/components/HeaderFilterSection";
import CardNFT2 from "@/components/CardNFT2";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

//
export interface SectionGridFeatureNFT2Props {
  moduleList:any
}

const SectionGridFeatureNFT2: FC<SectionGridFeatureNFT2Props> = ({moduleList}) => {
  console.log(moduleList)
  return (
    <div className="nc-SectionGridFeatureNFT2 relative">
      <HeaderFilterSection moduleList={moduleList}/>
      <div className={`grid gap-6 lg:gap-8 sm:grid-cols-2 xl:grid-cols-3`}>
        {moduleList.map((item:any, index:any) => (
          <CardNFT2 key={index} item={item} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeatureNFT2;
