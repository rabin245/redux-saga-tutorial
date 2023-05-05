import { connect } from "react-redux";
import { getCount } from "../redux/selectors/counterSelectors";
import {
  increment,
  decrement,
  reset,
  set,
  incrementAsync,
} from "../redux/actions/counterActions";
import { useRef } from "react";

const Counter = (props) => {
  const { count, increment, decrement, reset, set, incrementAsync } = props;

  const countRef = useRef(0);

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
        <input type="number" ref={countRef} />
      </h1>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => set(Number(countRef.current.value))}>Set</button>
        <button onClick={() => incrementAsync()}>Increment Async</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: getCount(state),
  };
};
export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
  set,
  incrementAsync,
})(Counter);
