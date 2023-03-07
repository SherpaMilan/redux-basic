import React, { useState } from "react";

export const Form = ({ addToList }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  console.log(name);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToList(name);
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
