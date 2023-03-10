import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  //useSelector will help to read the data

  const obj = useSelector((state) => state.firstItem);

  return (
    <div>
      <h3> Data are Shown Below</h3>
      <ul>
        {obj.nameList.map((firstItem) => (
          <li>{firstItem}</li>
        ))}
      </ul>
    </div>
  );
};
