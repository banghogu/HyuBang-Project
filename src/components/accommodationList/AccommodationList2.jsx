import React from "react";
import { cn } from "@/utils/cn";
import Icons from "../icons/icons";

const AccommodationList2 = ({ accommodations }) => {
  if (!accommodations) {
    return <div>No accommodations available</div>;
  }

  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      {accommodations.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "flex flex-col",
            index % 2 === 0 ? "border-r border-solid border-gray-300" : "",
            index < accommodations.length - 2 && "border-b border-solid border-gray-300"
          )}
        >
          <div className="m-6">
            <div className="rounded-md h-[200px] bg-gray-100 min-w-[170px] relative z-0">
              <img
                src={item.image}
                alt={item.productName}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="rounded-b-lg absolute inset-x-0 bottom-0 h-8 bg-black bg-opacity-50 text-white p-1 pl-3 flex justify-start">
                <div className="flex text-sm items-center gap-1">
                  <Icons type="LocationOnOutlinedIcon" size="small" color="primary" additionalClass="text-base" />
                  <p className="font-semibold">{item.area}</p>
                  <p className="ml-1">{item.address}</p>
                </div>
              </div>
            </div>
            <div className="flex-col p-3 mt-1 flex space-y-3 justify-between w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">{item.accommodationName}</h1>
              </div>
              <p className="text-lg text-gray-500">{item.category}</p>
              <div className="text-right">
                <p className="text-lg">숙박 15:00 ~</p>
                <div className="flex justify-end items-center">
                  <h2 className="font-bold text-2xl mr-1">
                    {item.minPrice.toLocaleString()}원~
                  </h2>
                  <p className="font-bold text-lg">/박</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccommodationList2;
