import { useReducer } from "react";
// https://blog.stackademic.com/using-reacts-usereducer-hook-with-typescript-31ebd990bc66


type counterStateType = {
  count: number;
};

const initialState = {
    count:0
}

type counterActionType = { type: "INCREAMENT" } | { type: "DECREAMENT" };

const counterReducer = (state: counterStateType, action: counterActionType) => {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1 };
    case "DECREAMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};



export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const handleIncreament = ()=>{
    dispatch({type:'INCREAMENT'})
  }
  const handleDecreament = ()=>{
    dispatch({type:'DECREAMENT'})
  }
  return (
    <>
      <div>
        <h4>Hello World</h4>
        <p>count: {state.count}</p> <br />
        <button onClick={handleIncreament}>Increament</button> <br />
        <button onClick={handleDecreament}>Decreament</button>
      </div>
    </>
  );
};
