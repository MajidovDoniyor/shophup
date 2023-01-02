import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { qushish, ayirish } from "./redux/counter";
import { textGet } from "./redux/text";

const App = () => {
  const data = useSelector((store) => store.counter);
  const data2 = useSelector((store) => store.text);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(textGet("comments"));
  }, []);
  return (
    <div>
      <h1>{data.num}</h1>
      <button onClick={() => dispatch(textGet("users"))}>user</button>
      <button onClick={() => dispatch(qushish())}>+</button>
      <button onClick={() => dispatch(ayirish())}>-</button>
      {data2.text?.map((v) => (
        <h1>{v.name}</h1>
      ))}
    </div>
  );
};

export default App;
