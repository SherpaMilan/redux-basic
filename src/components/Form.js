import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNameList } from "../creatingSlice";

export const Form = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  console.log(name);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(setNameList(name));
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          type="text"
          name="name"
          id=""
          placeholder="hi"
        ></input>
        <button>Add Data</button>
      </form>
    </div>
  );
};
