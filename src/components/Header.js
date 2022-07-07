import React from "react";

const Header = ({ setTimeFrame }) => {
  const timePionts = ["Daily", "Weekly", "Monthly"];
  return (
    <div className=" bg-dark-blue rounded-xl md:row-span-3 lg:row-span-2 overflow-hidden">
      <div className="bg-color-Blue flex justify-start gap-x-5 items-center md:items-start  py-10 rounded-b-xl pl-4 md:flex-col lg:h-[70%] text-pale-blue h-[75%] md:gap-y-6 flex-row">
        <img
          src="./images/image-jeremy.png"
          className="mt-6 h-[3.5rem] w-[3.5rem]
           ring-4 ring-white rounded-full"
          alt=""
        />
        <p className=" font-light text-4xl text-white">
          <span className="font-normal text-pale-blue text-base ">
            {" "}
            Report for
          </span>
          <br />
          Jeremy Robson
        </p>
      </div>
      <div className="  flex justify-between w-[80%] md:items-start mx-auto items-center py-5 font-semibold text-pale-blue flex-row md:flex-col md:gap-y-3 md:ml-5">
        {timePionts.map((item, i) => {
          return (
            <button
              key={i}
              className=" cursor-pointer focus:text-white  "
              onClick={() => setTimeFrame(item.toLowerCase())}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
