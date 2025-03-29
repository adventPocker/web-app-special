import React from "react";
import { PeoplesLayout } from "../Elements/PeoplesLayout";
interface  PropsSectionF3 {
data : Cast[]

}

const SectionF3 = ({data}:PropsSectionF3) => {
  return (
    <>
      {" "}
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div></div>
          <PeoplesLayout Title="Lead Cast" data={data} />
        </div>
      </div>
    </>
  );
};

export default SectionF3;
