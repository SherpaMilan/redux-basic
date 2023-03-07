import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";

import { Form } from "./components/Form";

function App() {
  const [nameList, setNameList] = useState([]);

  const addToList = (name) => {
    setNameList([...nameList, name]);
  };

  return (
    <div className="d-flex text-center">
      <Form addToList={addToList} />

      <hr />

      <Container nameList={nameList} />
    </div>
  );
}

export default App;
