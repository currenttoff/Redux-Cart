import "./App.css";
import { useDispatch, useSelector } from "react-redux";
//import { Add } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import { actions } from "./store";

function App() {
  //using call back function -> useSelector((state)=>state.counter)
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const reset = () => {
    dispatch(actions.reset());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={increment}>Plus</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={addBy}>Add By 10 </Button>
        <Button onClick={decrement}>Minus</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;

/*
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
//import { Add } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  //using call back function -> useSelector((state)=>state.counter)
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={increment}>Plus</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={addBy}>Add By 10 </Button>
        <Button onClick={decrement}>Minus</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
*/
