import FutureExpense from "./FutureExpense";

export default function FutureExpenses() {
  const items = [{}, {}, {}];
  return (
    <>
      {items.map((item, index) => (
        <FutureExpense key={index} />
      ))}
    </>
  );
}
