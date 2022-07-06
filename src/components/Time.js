import React from "react";

const Time = ({ current, previous, time, item }) => {
  let gap = previous - current;

  return (
    <section className=" flex flex-col  justify-between items-start font-semibold  text-lg w-[80%] ml-7 mb-4 mt-3 ">
      <span className=" font-light text-6xl ml-1 mb-3">{current}hrs</span>
      <p
        className="text-pale-blue flex justify-between w-[100%] items-center md:flex-col font-light"
        onClick={() => console.log(item)}
      >
        {`${
          time === "daily"
            ? `Yesterday `
            : `${time === "weekly" ? `Last Week ` : `Last Month `}`
        }`}
        - {previous} hrs
        <span className=" font-bold text-sm">
          Spent{" "}
          {`${
            gap <= 0 && gap < 1
              ? `${-gap} hrs`
              : gap === 1
              ? `${gap} hr`
              : `${gap} hrs`
          } ${previous > current ? ` less` : ` more`}`}
        </span>
      </p>
    </section>
  );
};

export default Time;
