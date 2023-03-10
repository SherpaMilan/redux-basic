import "./App.css";
import { Display } from "./components/Display";

import { Form } from "./components/Form";

function App() {
  return (
    <div className="d-flex text-center">
      <Form />
      <hr />
      <Display />
    </div>
  );
}

export default App;
