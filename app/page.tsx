import Products from "./components/Products";

export default function Home() {
  return (
    <>
    {[0, 1, 2, 3, 4, 5, 6].map((id) => (
      <Products key={id} id={id} />
    ))}
    </>
  );
}
