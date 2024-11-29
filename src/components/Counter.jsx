import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";
import "../styles/buttons.css"

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="section has-text-centered">
            <h1 className="title">Counter: {count}</h1>
            <div className="buttons is-centered">
                <button
                    className="button-3d increment"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className="button-3d decrement"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button className="button-3d reset" onClick={() => dispatch(reset())}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
