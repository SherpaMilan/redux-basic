import React from "react";

export const Display = ({ nameList }) => {
  console.log("rendering");
  return (
    <div>
      <ul>
        {nameList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
