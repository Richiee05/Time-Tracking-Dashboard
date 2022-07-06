import React from "react";
import Time from "./Time";

const Activity = ({ item, timeFrame }) => {
  const { title, timeframes, logo } = item;
  const period = [timeframes[timeFrame]];
  return (
    <div
      className={` w-[100%] flex flex-col  rounded-2xl overflow-hidden text-pale-blue text-white ${
        title.toLowerCase() === "self care"
          ? `bg-color-self-care`
          : `bg-color-${title.toLowerCase()}`
      }`}
    >
      <div className={``}>
        <img src={logo} className="h-12 mr-2 float-right " alt="" />
      </div>
      <article className=" rounded-t-2xl  w-[100%] hover:bg-opacity-90 bg-dark-blue">
        <section
          className=" flex justify-between items-center font-semibold text-white text-lg mx-auto w-[80%] mt-3"
          onClick={() => console.log(period)}
        >
          {title}
          <img src="./images/icon-ellipsis.svg" className=" " alt="" />
        </section>
        {period.map((item, i) => {
          return <Time key={i} item={item} {...item} time={timeFrame} />;
        })}
      </article>
    </div>
  );
};

export default Activity;
// timeframes: {
//     daily: {
//       current: 1,
//       previous: 2,
//     },
//     period: {
//       current: 10,
//       previous: 8,
//     },
//     monthly: {
//       current: 23,
//       previous: 29,
//     },
//   },
