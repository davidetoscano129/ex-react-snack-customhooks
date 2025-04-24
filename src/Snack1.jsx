import useSwitch from "./useSwitch";

function Snack1() {
  const [isOn, toggle] = useSwitch();
  return (
    <>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia stato</button>
    </>
  );
}

export default Snack1;
