import useDate from "./useDate";

function Snack2() {
  const currentDate = useDate();

  return (
    <>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </>
  );
}

export default Snack2;
