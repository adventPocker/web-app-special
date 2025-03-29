import React from "react";
import { PeoplesLayout } from "../Elements/PeoplesLayout";
interface  PropsSectionF5 {
  data : Crew[]
  
  }
const SectionF5 = ({data}:PropsSectionF5) => {
  return (
    <>
      {" "}
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="">

          <PeoplesLayout Title="Lead Crew" data={data}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionF5;
