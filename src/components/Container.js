import React from "react";
import { Display } from "./Display";

export const Container = ({ nameList }) => {
  return (
    <div>
      <h3> Data are Shown Below</h3>
      <Display nameList={nameList} />
    </div>
  );
};
