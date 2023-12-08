import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./demoStore";
import { decrement, increment, incrementByAmount, incrementAsync } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ marginBottom: 10}}>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))} style={{marginRight: 5}}>Increment</button>
        <button onClick={() => dispatch(decrement())} style={{marginLeft: 5}}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;