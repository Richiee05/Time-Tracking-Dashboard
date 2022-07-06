import React, { useState, useEffect } from "react";
import Activity from "./components/Activity";
import Header from "./components/Header";
import data from "./data";

function App() {
  const [activities, setActivities] = useState([]);
  const [timeFrame, setTimeFrame] = useState("daily");

  useEffect(() => {
    setActivities(data);
  }, []);

  return (
    <>
      <div className=" grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid gap-x-5 w-[90%] mt-[8%] mx-auto gap-y-8">
        <Header setTimeFrame={setTimeFrame} />
        {activities.map((item, i) => {
          return <Activity key={i} item={item} timeFrame={timeFrame} />;
        })}
      </div>
    </>
  );
}

export default App;
