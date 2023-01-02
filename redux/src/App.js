import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { qushish, ayirish } from "./redux/counter";
import { uzgartir } from "./redux/text";

const App = () => {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{data.text.text}</h1>
      <h1>{data.counter.num}</h1>
      <button onClick={() => dispatch(uzgartir())}>uzgartir</button>
      <button onClick={() => dispatch(qushish())}>+</button>
      <button onClick={() => dispatch(ayirish())}>-</button>
    </div>
  );
};

export default App;
