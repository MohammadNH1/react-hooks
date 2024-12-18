import { CounterContext, CounterProvider } from "../context/counter";
import { useContext, useEffect } from "react";
const Counter = () => {
  const { counter, setCounter, greet, setGreet } = useContext(CounterContext);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    if (counter >= 4) {
      setGreet("Hello And Welcome!");
    } else {
      setGreet("");
    }
  }, [counter]);

  return (
    <>
        <h4>greeting text : {greet ?? ""}</h4>
        <p> {counter}</p>
        <button onClick={handleIncrement}>Increament</button> <br />
        <button onClick={handleDecrement}>Decreemnt</button>
    </>
  );
};


export const CounterContent = () => {
    return(
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )
};
